"use client"

import type React from "react"
import Image from "next/image"

import { useState } from "react"
import { Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="Ciclo de Hábitos Logo" width={40} height={40} className="w-10 h-10" />
              <span className="font-bold text-xl text-slate-800">Ciclo de Hábitos</span>
            </Link>
            <div className="hidden md:flex gap-8 items-center">
              <Link href="/" className="text-slate-600 hover:text-blue-600 transition">
                Inicio
              </Link>
              <Link href="/blog" className="text-slate-600 hover:text-blue-600 transition">
                Blog
              </Link>
              <Link href="/directorio-ia" className="text-slate-600 hover:text-blue-600 transition">
                Directorio IA
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-blue-600 transition">
                About
              </Link>
              <Link href="/contact" className="text-blue-600 font-semibold">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <MessageSquare className="w-16 h-16 mx-auto mb-4 text-blue-600" />
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Hablemos</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            ¿Tienes preguntas, sugerencias o simplemente quieres compartir tu historia? Nos encantaría escucharte
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Envíanos un mensaje</h2>

            {submitted ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">¡Mensaje enviado!</h3>
                <p className="text-green-700">Te responderemos lo antes posible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="general">Consulta general</option>
                    <option value="support">Soporte técnico</option>
                    <option value="collaboration">Colaboración</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg py-4 rounded-xl transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Enviar mensaje</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Otras formas de contacto</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">Email directo</h3>
                    <p className="text-slate-600 mb-2">Para consultas más detalladas</p>
                    <a
                      href="mailto:hola@ciclodehabitos.com"
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      hola@ciclodehabitos.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">Redes sociales</h3>
                    <p className="text-slate-600 mb-3">Síguenos para contenido diario</p>
                    <div className="flex gap-3">
                      <a href="#" className="text-slate-600 hover:text-blue-600 transition">
                        Twitter
                      </a>
                      <span className="text-slate-300">•</span>
                      <a href="#" className="text-slate-600 hover:text-blue-600 transition">
                        Instagram
                      </a>
                      <span className="text-slate-300">•</span>
                      <a href="#" className="text-slate-600 hover:text-blue-600 transition">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-3">Tiempo de respuesta</h3>
                <p className="text-blue-100 mb-4">
                  Normalmente respondemos en menos de 24 horas durante días laborables.
                </p>
                <p className="text-sm text-blue-200">
                  Si tu consulta es urgente, por favor indícalo en el asunto del mensaje.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Prefieres empezar por tu cuenta?</h2>
          <p className="text-xl text-slate-600 mb-8">Descarga nuestra guía gratuita y comienza tu transformación hoy</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all hover:scale-105 shadow-xl"
          >
            <span>Descargar Guía Gratuita</span>
          </Link>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-400 text-sm">
            <p>© 2025 Ciclo de Hábitos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
