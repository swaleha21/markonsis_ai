import { NextRequest } from "next/server";
import { Buffer } from "node:buffer";

function estimateTokens(text: string): number {
  const t = (text || "").replace(/\s+/g, " ").trim();
  return t.length > 0 ? Math.ceil(t.length / 4) : 0;
}

function getTTSPrefix(text: string): string {
  const lower = text.toLowerCase().trim();

  if (
    lower.includes("?") ||
    lower.startsWith("what") ||
    lower.startsWith("how") ||
    lower.startsWith("why")
  ) {
    return "Here's what you asked:";
  }

  if (
    lower.includes("hello") ||
    lower.includes("hi") ||
    lower.includes("hey")
  ) {
    return "You said:";
  }

  if (lower.startsWith("please") || lower.startsWith("tell me")) {
    return "Your request was:";
  }

  if (lower.length > 50) return "Here's your text:";

  return "Repeating:";
}

export async function POST(req: NextRequest) {
  try {
    const { messages, model, voice } = await req.json();

    const apiKey =
      process.env.OPEN_PROVIDER_API_KEY ||
      process.env.OPEN_PROVIDER_API_KEY_BACKUP ||
      "demo";

    if (!model) {
      return Response.json({ error: "Missing model id" }, { status: 400 });
    }

    type Msg = {
      role: "user" | "assistant" | "system";
      content: string;
    };

    const sanitized: Msg[] = (messages || [])
      .map((m: any) => ({
        role: ["user", "assistant", "system"].includes(m?.role)
          ? m.role
          : "user",
        content: String(m?.content ?? "")
      }))
      .slice(-8);

    const lastUser = sanitized.filter((m) => m.role === "user").pop();
    let prompt = lastUser?.content || "Hello";

    const isImageModel = ["flux", "kontext", "turbo"].includes(model);
    const isAudioModel = model === "openai-audio";

    if (isAudioModel) {
      prompt = `${getTTSPrefix(prompt)} ${prompt}`;
    }

    /* ---------------- IMAGE MODELS ---------------- */

    if (isImageModel) {
      const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
        prompt
      )}?width=1024&height=1024&model=${encodeURIComponent(model)}`;

      return Response.json({
        text: `![Generated Image](${imageUrl})`,
        imageUrl,
        provider: "open-provider",
        tokens: estimateTokens(prompt)
      });
    }

    /* ---------------- AUDIO MODELS ---------------- */

    if (isAudioModel) {
      const encoded = encodeURIComponent(prompt);
      const selectedVoice = voice || "alloy";

      const url = `https://text.pollinations.ai/${encoded}?model=openai-audio&voice=${selectedVoice}`;

      const resp = await fetch(url);

      if (!resp.ok) {
        return Response.json({
          text: "Audio generation failed."
        });
      }

      const buffer = await resp.arrayBuffer();
      const base64 = Buffer.from(buffer).toString("base64");

      const audioUrl = `data:audio/mpeg;base64,${base64}`;

      return Response.json({
        text: `[AUDIO:${audioUrl}]`,
        audioUrl,
        provider: "open-provider"
      });
    }

    /* ---------------- TEXT MODELS ---------------- */

    const resp = await fetch("https://text.pollinations.ai/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: sanitized,
        stream: false,
        max_tokens: 2048
      })
    });

    if (!resp.ok) {
      const errorText = await resp.text();

      return Response.json(
        {
          text: "Model failed to respond.",
          error: errorText
        },
        { status: resp.status }
      );
    }

    const data = await resp.json();

    let text = "";

    if (data?.choices?.length) {
      text = data.choices
        .map((c: any) => c?.message?.content || "")
        .join("\n\n");
    }

    if (!text) {
      text = "No response generated.";
    }

    const tokenEstimate = sanitized.reduce(
      (sum, m) => sum + estimateTokens(m.content),
      0
    );

    return Response.json({
      text,
      raw: data,
      provider: "open-provider",
      tokens: tokenEstimate
    });
  } catch (err: any) {
    return Response.json(
      {
        error: err?.message || "Unknown error"
      },
      { status: 500 }
    );
  }
}