import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

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
  ],
  authors: [{ name: "Ciclo de Hábitos" }],
  creator: "Ciclo de Hábitos",
  publisher: "Ciclo de Hábitos",
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
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
