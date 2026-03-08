import { NextRequest } from "next/server"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  try {
    const { messages, model, apiKey: apiKeyFromBody, referer, title } =
      await req.json()

    const apiKey = apiKeyFromBody || process.env.OPENROUTER_API_KEY

    if (!apiKey) {
      return Response.json(
        { error: "Missing OpenRouter API key" },
        { status: 400 }
      )
    }

    if (!model) {
      return Response.json(
        { error: "Missing model id" },
        { status: 400 }
      )
    }

    /* ---------------- SANITIZE MESSAGES ---------------- */

    const sanitized = (Array.isArray(messages) ? messages : [])
      .map((m: any) => ({
        role:
          m?.role === "user" ||
          m?.role === "assistant" ||
          m?.role === "system"
            ? m.role
            : "user",
        content: typeof m?.content === "string"
          ? m.content
          : String(m?.content ?? "")
      }))
      .slice(-8)

    /* ---------------- REQUEST BODY ---------------- */

    const body = {
      model,
      messages: sanitized,
      max_tokens: 4000,
      stream: false
    }

    const controller = new AbortController()

    const timeout = setTimeout(() => {
      controller.abort()
    }, 120000)

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": referer || "http://localhost:3000",
          "X-Title": title || "AI Chat"
        },
        body: JSON.stringify(body),
        signal: controller.signal
      }
    )

    clearTimeout(timeout)

    const data = await response.json()

    if (!response.ok) {
      const message =
        data?.error?.message ||
        `Provider error (${response.status})`

      return Response.json(
        {
          text: message,
          code: response.status,
          provider: "openrouter"
        },
        { status: response.status }
      )
    }

    /* ---------------- EXTRACT TEXT ---------------- */

    let text = ""

    const choice = data?.choices?.[0]

    const content = choice?.message?.content

    if (typeof content === "string") {
      text = content
    }

    else if (Array.isArray(content)) {
      text = content
        .map((c: any) =>
          typeof c?.text === "string"
            ? c.text
            : typeof c?.content === "string"
            ? c.content
            : ""
        )
        .join("\n")
    }

    else if (data?.output_text) {
      text = data.output_text
    }

    if (!text) {
      text = "No response generated."
    }

    return Response.json({
      text,
      raw: data
    })
  }

  catch (error: any) {

    if (error?.name === "AbortError") {
      return Response.json(
        { error: "Request timed out" },
        { status: 408 }
      )
    }

    return Response.json(
      {
        error: error?.message || "Unknown error"
      },
      { status: 500 }
    )
  }
}