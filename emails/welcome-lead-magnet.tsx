import { Heading, Link, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, button, buttonContainer, heading, highlight, text } from "./components";

interface WelcomeLeadMagnetEmailProps {
    unsubscribeUrl: string;
}

// Email 1 (Día 0): Entrega de la guía PDF "El Arte de Diseñar Hábitos" + primera interacción.
export default function WelcomeLeadMagnetEmail({ unsubscribeUrl }: WelcomeLeadMagnetEmailProps) {
    return (
        <EmailLayout preview="Acá está tu guía gratis: El Arte de Diseñar Hábitos 🎁" unsubscribeUrl={unsubscribeUrl}>
            <Heading style={heading}>¡Acá tenés tu guía gratis!</Heading>
            <Text style={text}>
                Gracias por sumarte a <strong>Ciclo de Hábitos</strong>. Acabás de dar el paso más importante: dejar de confiar en la motivación vacía y empezar a diseñar tu vida.
            </Text>
            <Text style={text}>
                Tu copia de <strong>"El Arte de Diseñar Hábitos: Por qué los hábitos más beneficiosos se rompen y cómo construir el próximo con éxito"</strong> ya está lista:
            </Text>
            <Section style={buttonContainer}>
                <Link
                    style={button}
                    href="https://ciclodehabitos.com/landing"
                >
                    📥 Descargar Guía en PDF
                </Link>
            </Section>
            
            <Text style={highlight}>
                💬 Una pregunta rápida para empezar hoy mismo:
                <br /><br />
                <strong>¿Cuál es el hábito concreto que querés construir esta semana?</strong>
                <br /><br />
                Respondé directamente a este correo con una sola frase (ej: <em>"quiero leer 10 minutos por día"</em> o <em>"quiero hacer ejercicio por la mañana"</em>). Leo y respondo cada mensaje.
            </Text>

            <Text style={text}>
                En los próximos 10 días te voy a compartir 4 ideas breves respaldadas por ciencia del comportamiento para acompañarte a pasar de "bajé una guía" a construir tu sistema completo.
            </Text>
            <Text style={text}>
                Un abrazo,
                <br />
                <strong>Jonatan Fernandez</strong> — Ciclo de Hábitos
            </Text>
        </EmailLayout>
    );
}
