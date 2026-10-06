import { Heading, Link, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, button, buttonContainer, heading, highlight, text } from "./components";

interface WelcomeLeadMagnetEmailProps {
    unsubscribeUrl: string;
    pdfUrl: string;
}

// Email 1 (Día 0): Entrega de la guía PDF "El arte de diseñar hábitos" + pedido de respuesta.
export default function WelcomeLeadMagnetEmail({ unsubscribeUrl, pdfUrl }: WelcomeLeadMagnetEmailProps) {
    return (
        <EmailLayout preview="Acá tenés tu guía. Leela en 15 minutos y aplicala esta semana." unsubscribeUrl={unsubscribeUrl}>
            <Heading style={heading}>¡Acá tenés tu guía!</Heading>
            <Text style={text}>
                Acá tenés <strong>El arte de diseñar hábitos</strong>. Está pensada para leerse en 15 minutos y aplicarse en uno solo de tus hábitos esta misma semana.
            </Text>
            <Section style={buttonContainer}>
                <Link style={button} href={pdfUrl}>
                    Descargar la guía
                </Link>
            </Section>
            <Text style={text}>
                Un consejo antes de abrirla: no intentes cambiar cinco cosas a la vez. Elegí un solo hábito y llegá hasta la página 7, donde está la hoja de diseño.
            </Text>
            <Text style={highlight}>
                Una pregunta: ¿qué hábito querés instalar?
                <br /><br />
                Respondé este correo con una línea. Leo todas las respuestas y me ayudan a escribir contenido que te sirva de verdad.
            </Text>
            <Text style={text}>
                En unos días te escribo con lo que dice la investigación sobre cuánto tarda realmente un hábito en volverse automático.
            </Text>
            <Text style={text}>
                Un abrazo,
                <br />
                <strong>Joni</strong> — Ciclo de Hábitos
            </Text>
        </EmailLayout>
    );
}
