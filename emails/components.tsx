import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Link,
    Preview,
    Text,
} from "@react-email/components";
import * as React from "react";

interface EmailLayoutProps {
    preview: string;
    unsubscribeUrl: string;
    children: React.ReactNode;
}

// Shared shell for every Ciclo de Hábitos email: brand palette
// (#090A0D / #F2884B / #FEFEFE) and the legally required unsubscribe footer.
export function EmailLayout({ preview, unsubscribeUrl, children }: EmailLayoutProps) {
    return (
        <Html lang="es">
            <Head />
            <Preview>{preview}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Text style={brand}>Ciclo de Hábitos</Text>
                    {children}
                    <Hr style={hr} />
                    <Text style={footer}>
                        Recibís este correo porque te suscribiste en{" "}
                        <Link href="https://ciclodehabitos.com" style={footerLink}>
                            ciclodehabitos.com
                        </Link>
                        .
                        <br />
                        <Link href={unsubscribeUrl} style={footerLink}>
                            Darme de baja
                        </Link>
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: "#f5f5f5",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    padding: "24px 12px",
};

const container = {
    margin: "0 auto",
    backgroundColor: "#FEFEFE",
    borderRadius: "12px",
    padding: "40px",
    maxWidth: "560px",
};

const brand = {
    color: "#F2884B",
    fontSize: "13px",
    fontWeight: "bold" as const,
    letterSpacing: "2px",
    textTransform: "uppercase" as const,
    margin: "0 0 8px",
};

const hr = {
    borderColor: "#e5e7eb",
    margin: "32px 0 16px",
};

const footer = {
    color: "#9ba3af",
    fontSize: "12px",
    lineHeight: "18px",
    margin: 0,
};

const footerLink = {
    color: "#9ba3af",
    textDecoration: "underline",
};

export const heading = {
    color: "#090A0D",
    fontSize: "26px",
    fontWeight: "bold" as const,
    lineHeight: "1.3",
    margin: "8px 0 16px",
};

export const text = {
    color: "#333640",
    fontSize: "16px",
    lineHeight: "26px",
    margin: "16px 0",
};

export const highlight = {
    ...text,
    fontWeight: "bold" as const,
    color: "#090A0D",
    backgroundColor: "#fef0e8",
    borderLeft: "4px solid #F2884B",
    borderRadius: "0 8px 8px 0",
    padding: "12px 16px",
};

export const button = {
    backgroundColor: "#F2884B",
    borderRadius: "999px",
    color: "#FEFEFE",
    fontSize: "16px",
    fontWeight: "bold" as const,
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    padding: "12px 28px",
};

export const buttonContainer = {
    textAlign: "center" as const,
    margin: "32px 0 8px",
};

export const inlineLink = {
    color: "#F2884B",
    fontWeight: "bold" as const,
    textDecoration: "underline",
};
