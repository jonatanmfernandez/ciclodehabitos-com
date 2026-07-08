import { Heading, Link, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, button, buttonContainer, heading, highlight, inlineLink, text } from "./components";

interface WeeklyEmailProps {
    title: string;
    excerpt: string;
    url: string;
    reflection: string;
    habit: string;
    unsubscribeUrl: string;
}

// Newsletter semanal: último post del blog + reflexión + hábito de la semana.
// Se envía como Broadcast de Resend; unsubscribeUrl recibe el placeholder
// {{{RESEND_UNSUBSCRIBE_URL}}} que Resend sustituye por el link real de baja.
export default function WeeklyEmail({ title, excerpt, url, reflection, habit, unsubscribeUrl }: WeeklyEmailProps) {
    return (
        <EmailLayout preview={`${title} — tu hábito semanal adentro`} unsubscribeUrl={unsubscribeUrl}>
            <Text style={label}>📬 Esta semana en el blog</Text>
            <Heading style={heading}>{title}</Heading>
            <Text style={text}>{excerpt}</Text>
            <Section style={buttonContainer}>
                <Link style={button} href={url}>
                    Leer el artículo completo
                </Link>
            </Section>

            <Text style={label}>💭 Reflexión de la semana</Text>
            <Text style={text}>{reflection}</Text>

            <Text style={label}>✅ Hábito para probar</Text>
            <Text style={highlight}>{habit}</Text>

            <Text style={text}>
                ¿Probaste el hábito de la semana pasada? Contame respondiendo este correo — leo
                todos los mensajes. Y si querés más, en{" "}
                <Link href="https://ciclodehabitos.com" style={inlineLink}>
                    ciclodehabitos.com
                </Link>{" "}
                está el sistema completo.
            </Text>
        </EmailLayout>
    );
}

const label = {
    color: "#F2884B",
    fontSize: "13px",
    fontWeight: "bold" as const,
    letterSpacing: "1px",
    textTransform: "uppercase" as const,
    margin: "28px 0 4px",
};
