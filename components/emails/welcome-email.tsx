import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Link,
    Hr,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
    email?: string;
}

export const WelcomeEmail = ({ email }: WelcomeEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Bienvenido a Ciclo de Hábitos - Tu dosis semanal de claridad</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>Bienvenido a la comunidad.</Heading>
                    <Text style={text}>
                        Hola,
                    </Text>
                    <Text style={text}>
                        Gracias por suscribirte a <strong>Ciclo de Hábitos</strong>. Has dado el primer paso para construir un sistema de vida más consciente y efectivo.
                    </Text>
                    <Text style={text}>
                        Cada martes recibirás un correo corto con:
                    </Text>
                    <ul style={list}>
                        <li style={listItem}>3 ideas prácticas sobre hábitos y productividad.</li>
                        <li style={listItem}>2 citas inspiradoras para reflexionar.</li>
                        <li style={listItem}>1 pregunta para desafiar tu mentalidad actual.</li>
                    </ul>
                    <Section style={btnContainer}>
                        <Link
                            style={button}
                            href="https://ciclodehabitos.com/blog"
                        >
                            Leer artículos anteriores
                        </Link>
                    </Section>
                    <Text style={text}>
                        No dudes en responder a este correo. Leo todos los mensajes.
                    </Text>
                    <Text style={text}>
                        Un abrazo,
                        <br />
                        El equipo de Ciclo de Hábitos
                    </Text>
                    <Hr style={hr} />
                    <Text style={footer}>
                        Si no quieres recibir más correos, puedes darte de baja en cualquier momento.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

export default WelcomeEmail;

const main = {
    backgroundColor: "#f8fafc",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "560px",
};

const h1 = {
    color: "#0f172a",
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: "1.3",
    margin: "16px 0",
};

const text = {
    color: "#334155",
    fontSize: "16px",
    lineHeight: "26px",
    margin: "16px 0",
};

const list = {
    color: "#334155",
    fontSize: "16px",
    lineHeight: "26px",
    paddingLeft: "20px",
};

const listItem = {
    marginBottom: "8px",
};

const btnContainer = {
    textAlign: "center" as const,
    margin: "32px 0",
};

const button = {
    backgroundColor: "#0f172a",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    padding: "12px 24px",
};

const hr = {
    borderColor: "#e2e8f0",
    margin: "20px 0",
};

const footer = {
    color: "#94a3b8",
    fontSize: "12px",
    lineHeight: "16px",
};
