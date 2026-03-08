import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { ThemeProvider } from '@/lib/themeContext'
import { AuthProvider } from '@/lib/auth'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://markonsis.com"),
  title: {
    default: "Markonsis AI",
    template: "%s | Markonsis AI",
  },
  description:
    "Markonsis AI lets you chat with 300+ AI models—OpenAI, Gemini, Claude, Perplexity, DeepSeek, Grok, and more—in one place. Compare responses and stay in flow.",
  applicationName: "Markonsis AI",
  generator: "Markonsis AI",
  keywords: [
    "Markonsis AI",
    "markonsis",
    "markonsis.com",
    "Markonsis AI chat",
    "Markonsis AI app",
    "AI chat",
    "AI assistant",
    "compare AI models",
    "multi model AI chat",
    "GPT alternative",
    "OpenAI",
    "Anthropic Claude",
    "Google Gemini",
    "Perplexity",
    "DeepSeek",
    "Grok xAI",
    "OpenRouter",
    "research assistant",
    "coding assistant",
    "writing assistant",
    "prompt engineering",
    "brainstorming with AI",
    "AI compare",
    "chat with multiple models",
    "evaluate AI responses",
    "side by side AI",
    "chat with 300+ AI models",
    "best AI chat alternatives",
    "compare GPT vs Claude vs Gemini",
    "multi-provider AI chat app",
    "compare LLMs",
    "LLM comparator",
    "AI model benchmark",
    "prompt A/B testing",
    "compare ChatGPT vs Claude vs Gemini",
    "openrouter models",
    "OpenAI vs Claude",
    "best AI model for coding",
    "best AI model for writing",
    "research with AI assistants",
    "AI productivity tool",
  ].join(", "),
  authors: [{ name: "Markonsis", url: "https://markonsis.com" }],
  creator: "Markonsis",
  publisher: "Markonsis AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  classification: "AI Tools, Developer Tools, Productivity, Chatbots",
  category: [
    "AI Chat",
    "Developer Productivity",
    "Prompt Engineering",
    "Research Tools",
    "Writing Tools",
    "Open Source",
  ].join(", "),
  other: {
    "application-name": "Markonsis AI",
    "apple-mobile-web-app-capable": "yes",
    "mobile-web-app-capable": "yes",
    "theme-color": "#000000",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://markonsis.com/",
    siteName: "Markonsis AI",
    title: "Markonsis AI – Smarter AI. Better Results.",
    description:
      "Markonsis AI lets you chat with 300+ AI models—OpenAI, Gemini, Claude, Perplexity, DeepSeek, Grok, and more—in one place. Compare responses and stay in flow.",
    images: [
      {
        url: "https://markonsis.com/og.png",
        width: 1200,
        height: 630,
        alt: "Markonsis AI",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@markonsis",
    creator: "@markonsis",
    title: "Markonsis AI – Smarter AI. Better Results.",
    description:
      "Markonsis AI lets you chat with 300+ AI models—OpenAI, Gemini, Claude, Perplexity, DeepSeek, Grok, and more—in one place. Compare responses and stay in flow.",
    images: ["https://markonsis.com/og.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <title>Markonsis AI – Smarter AI. Better Results.</title>
        <meta name="description" content="Markonsis AI lets you chat with 300+ AI models—OpenAI, Gemini, Claude, Perplexity, DeepSeek, Grok, and more—in one place. Compare responses and stay in flow." />
        <meta property="og:title" content="Markonsis AI – Smarter AI. Better Results." />
        <meta property="og:description" content="Markonsis AI lets you chat with 300+ AI models—OpenAI, Gemini, Claude, Perplexity, DeepSeek, Grok, and more—in one place. Compare responses and stay in flow." />
        <meta property="og:url" content="https://markonsis.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Markonsis AI" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://markonsis.com/og.png" />
        <meta property="og:image:secure_url" content="https://markonsis.com/og.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Markonsis AI" />
        <meta itemProp="image" content="https://markonsis.com/og.png" />
        <link rel="image_src" href="https://markonsis.com/og.png" />
        <meta name="thumbnail" content="https://markonsis.com/og.png" />
        <meta name="twitter:image" content="https://markonsis.com/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Markonsis AI – Smarter AI. Better Results." />
        <meta name="twitter:description" content="Markonsis AI lets you chat with 300+ AI models—OpenAI, Gemini, Claude, Perplexity, DeepSeek, Grok, and more—in one place. Compare responses and stay in flow." />
        <meta property="twitter:domain" content="markonsis.com" />
        <meta property="twitter:url" content="https://markonsis.com" />
        <meta name="twitter:site" content="@markonsis" />
        <meta name="twitter:creator" content="@markonsis" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />

        {/* PWA Meta Tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="background-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Markonsis AI" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icons/icon-192x192.svg" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.svg" />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/icons/icon-192x192.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileImage" content="/icons/icon-144x144.svg" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>

        <Script id="ld-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Markonsis AI",
            url: "https://markonsis.com",
            logo: "https://markonsis.com/brand.png",
            sameAs: [
              "https://markonsis.com"
            ]
          })}
        </Script>
        <Script id="ld-website" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Markonsis AI",
            url: "https://markonsis.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://markonsis.com/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>
        <Script id="ld-webapp" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Markonsis AI",
            description:
              "Chat with and compare 300+ AI models (OpenAI, Claude, Gemini, Perplexity, DeepSeek, Grok) side-by-side in one place.",
            url: "https://markonsis.com",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock"
            },
            publisher: {
              "@type": "Organization",
              name: "Markonsis AI",
              url: "https://markonsis.com"
            },
            author: {
              "@type": "Person",
              name: "Markonsis",
              url: "https://markonsis.com"
            },
            inLanguage: "en-US",
            isAccessibleForFree: true,
            keywords:
              "Markonsis AI, AI chat, compare AI models, GPT alternative, OpenAI, Claude, Gemini, Perplexity, DeepSeek, Grok, OpenRouter",
          })}
        </Script>
      </body>
    </html>
  )
}