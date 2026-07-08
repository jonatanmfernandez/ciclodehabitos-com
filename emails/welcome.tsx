import { Heading, Link, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, button, buttonContainer, heading, text } from "./components";

interface WelcomeEmailProps {
    unsubscribeUrl: string;
}

// Email 1 de la secuencia de bienvenida: bienvenida + regalo (enviado al suscribirse).
export default function WelcomeEmail({ unsubscribeUrl }: WelcomeEmailProps) {
    return (
        <EmailLayout preview="Bienvenido a Ciclo de Hábitos — tu primer recurso adentro" unsubscribeUrl={unsubscribeUrl}>
            <Heading style={heading}>¡Bienvenido a la comunidad!</Heading>
            <Text style={text}>
                Gracias por unirte a <strong>Ciclo de Hábitos</strong>. Acabás de dar el primer
                paso para construir un sistema de vida más consciente y efectivo.
            </Text>
            <Text style={text}>
                Como regalo de bienvenida, acá tenés la guía con la que recomiendo empezar:
            </Text>
            <Section style={buttonContainer}>
                <Link
                    style={button}
                    href="https://ciclodehabitos.com/blog/5-pasos-para-crear-habitos-duraderos"
                >
                    Leer: 5 pasos para crear hábitos duraderos
                </Link>
            </Section>
            <Text style={text}>
                En los próximos días te voy a mandar tres correos cortos: mi filosofía sobre los
                hábitos, tu primer hábito accionable y cómo seguir a partir de ahí. Después,
                cada semana recibirás el newsletter con el último artículo y un hábito para probar.
            </Text>
            <Text style={text}>
                No dudes en responder a este correo. Leo todos los mensajes.
            </Text>
            <Text style={text}>
                Un abrazo,
                <br />
                Jonatan — Ciclo de Hábitos
            </Text>
        </EmailLayout>
    );
}
