import { Heading, Link, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, heading, inlineLink, text } from "./components";

interface WelcomeCtaEmailProps {
    unsubscribeUrl: string;
}

// Email 4 de la secuencia de bienvenida: CTA suave a blog y web (+7 días).
export default function WelcomeCtaEmail({ unsubscribeUrl }: WelcomeCtaEmailProps) {
    return (
        <EmailLayout preview="Seguimos construyendo hábitos" unsubscribeUrl={unsubscribeUrl}>
            <Heading style={heading}>Seguimos construyendo hábitos</Heading>
            <Text style={text}>
                Ya tenés las bases: la bienvenida, mi filosofía y tu primer hábito simple.
                Ahora quiero invitarte a profundizar un poco más.
            </Text>
            <Text style={text}>Acá tenés dos caminos para seguir creciendo:</Text>
            <Text style={text}>
                👉{" "}
                <Link href="https://ciclodehabitos.com/blog" style={inlineLink}>
                    Leer el blog
                </Link>{" "}
                — artículos sobre neurociencia, productividad y diseño de hábitos.
                <br />
                👉{" "}
                <Link href="https://ciclodehabitos.com" style={inlineLink}>
                    Explorar el sistema completo
                </Link>{" "}
                — todo lo que Ciclo de Hábitos tiene para ofrecerte.
            </Text>
            <Text style={text}>
                A partir de ahora te escribo una vez por semana con el último artículo, una
                reflexión corta y un hábito para probar. Sin spam, sin relleno.
            </Text>
            <Text style={text}>
                Gracias por estar acá. Esto recién empieza.
                <br />
                Jonatan — Ciclo de Hábitos
            </Text>
        </EmailLayout>
    );
}
