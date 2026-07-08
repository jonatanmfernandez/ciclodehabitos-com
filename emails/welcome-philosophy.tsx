import { Heading, Link, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, button, buttonContainer, heading, text } from "./components";

interface WelcomePhilosophyEmailProps {
    unsubscribeUrl: string;
}

// Email 2 de la secuencia de bienvenida: filosofía de Ciclo de Hábitos (+1 día).
export default function WelcomePhilosophyEmail({ unsubscribeUrl }: WelcomePhilosophyEmailProps) {
    return (
        <EmailLayout preview="Mi filosofía sobre los hábitos" unsubscribeUrl={unsubscribeUrl}>
            <Heading style={heading}>Mi filosofía sobre los hábitos</Heading>
            <Text style={text}>
                En Ciclo de Hábitos creemos que los cambios reales no vienen de la fuerza de
                voluntad, sino de sistemas simples que se repiten todos los días.
            </Text>
            <Text style={text}>
                No se trata de motivación. Se trata de <strong>diseño</strong>: diseñar tu
                entorno, tus rutinas y tus micro-acciones para que el progreso sea inevitable.
            </Text>
            <Text style={text}>
                Mi misión es ayudarte a construir hábitos que duren toda la vida, sin fricción
                y sin culpa. Todo lo que publico está respaldado por ciencia del comportamiento,
                no por frases motivacionales.
            </Text>
            <Section style={buttonContainer}>
                <Link style={button} href="https://ciclodehabitos.com/blog">
                    Leer más en el blog
                </Link>
            </Section>
            <Text style={text}>
                Mañana no te escribo. Pasado, te mando tu primer hábito accionable — uno que
                toma literalmente un minuto.
            </Text>
        </EmailLayout>
    );
}
