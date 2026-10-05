import { Heading, Link, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, button, buttonContainer, heading, inlineLink, text } from "./components";

interface WelcomeCompleteSystemEmailProps {
    unsubscribeUrl: string;
}

// Email 5 (Día 10): Pasaste de "bajé un PDF" a "quiero el sistema completo".
export default function WelcomeCompleteSystemEmail({ unsubscribeUrl }: WelcomeCompleteSystemEmailProps) {
    return (
        <EmailLayout preview="De la guía al sistema completo: Tu próximo paso 🚀" unsubscribeUrl={unsubscribeUrl}>
            <Heading style={heading}>De un PDF a tu sistema completo</Heading>
            <Text style={text}>
                ¡Felicitaciones! Hace 10 días descargaste la guía <strong>"El Arte de Diseñar Hábitos"</strong>.
            </Text>
            <Text style={text}>
                En este tiempo ya aprendiste:
            </Text>
            <Text style={text}>
                ✓ Que la automatización toma 66 días (no 21) y cómo superar el bache del día 14.
                <br />
                ✓ La potencia de la <em>Versión Mínima</em> para no fallar jamás.
                <br />
                ✓ El bucle de 3 piezas: Señal, Rutina y Recompensa.
                <br />
                ✓ Cómo el diseño de entorno elimina la necesidad de fuerza de voluntad.
            </Text>
            <Text style={text}>
                Pero diseñar un solo hábito es solo el punto de partida. Lo que realmente transforma tu productividad, tu salud y tu día a día es construir un <strong>sistema integral de hábitos</strong>.
            </Text>
            <Text style={text}>
                En <strong>Ciclo de Hábitos</strong> tenemos un ecosistema diseñado para eso: artículos profundos de ciencia del comportamiento, plantillas de seguimiento, análisis de neurociencia y la newsletter semanal.
            </Text>
            
            <Section style={buttonContainer}>
                <Link style={button} href="https://ciclodehabitos.com">
                    🚀 Explorar el Sistema Completo
                </Link>
            </Section>

            <Text style={text}>
                O si querés seguir leyendo análisis y guías aplicadas:
                <br />
                👉 <Link href="https://ciclodehabitos.com/blog" style={inlineLink}>Visitar el Blog de Ciclo de Hábitos</Link>
            </Text>
            
            <Text style={text}>
                A partir de ahora, vas a recibir el newsletter semanal los martes con un solo concepto potente respaldado por ciencia y una estrategia lista para probar. Sin spam, sin contenido de relleno.
            </Text>
            <Text style={text}>
                Gracias por confiar en este camino. Seguimos en contacto.
                <br /><br />
                Un abrazo grande,
                <br />
                <strong>Jonatan Fernandez</strong> — Ciclo de Hábitos
            </Text>
        </EmailLayout>
    );
}
