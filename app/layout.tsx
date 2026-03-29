import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import Script from "next/script"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ciclo de Hábitos - Construye Hábitos Inquebrantables en 30 Días | Sistema Científicamente Probado",
  description:
    "Descubre el sistema científicamente probado para construir hábitos duraderos sin depender de la fuerza de voluntad. Más de 2,800 personas ya transformaron sus vidas. Guía gratuita disponible.",
  generator: "v0.app",
  keywords: [
    "hábitos",
    "construir hábitos",
    "productividad",
    "desarrollo personal",
    "transformación personal",
    "disciplina",
    "motivación",
    "cambio de hábitos",
    "sistema de hábitos",
    "hábitos duraderos",
    "anti-procrastinación",
    "fortaleza emocional",
    "método científico",
    "30 días",
    "cambio de vida",
    "mejora personal",
    "autoayuda",
    "crecimiento personal",
    "puntos de contacto",
  ],
  authors: [{ name: "Ciclo de Hábitos" }],
  creator: "Ciclo de Hábitos",
  publisher: "Ciclo de Hábitos",
  other: {
    preconnect: [
      "https://va.vercel-scripts.com",
      process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    ].filter(Boolean),
  },
  openGraph: {
    title: "Ciclo de Hábitos - Transforma Tu Vida en 30 Días",
    description:
      "El sistema para construir hábitos que realmente funcionan. Más de 2,800 personas ya transformaron sus vidas.",
    type: "website",
    locale: "es_ES",
    siteName: "Ciclo de Hábitos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ciclo de Hábitos - Construye Hábitos Inquebrantables",
    description: "Sistema científicamente probado para transformar tu vida en 30 días",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1971351790174483"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-8N2P1GKWGM"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-8N2P1GKWGM');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  )
}
