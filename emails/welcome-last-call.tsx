import { Heading, Link, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, button, buttonContainer, heading, text } from "./components";

interface WelcomeLastCallEmailProps {
    unsubscribeUrl: string;
    neuralUrl: string;
    discountCode: string;
}

// Email 6 (Día 10): Cierre del precio especial + preguntas frecuentes.
// Solo se envía si hay un código de descuento real (la urgencia tiene que ser verdadera).
export default function WelcomeLastCallEmail({ unsubscribeUrl, neuralUrl, discountCode }: WelcomeLastCallEmailProps) {
    return (
        <EmailLayout preview="Hoy termina tu precio especial de NEURAL System" unsubscribeUrl={unsubscribeUrl}>
            <Heading style={heading}>Último día del precio especial</Heading>
            <Text style={text}>
                Un mensaje corto: hoy es el último día para conseguir NEURAL System con el precio especial para quienes descargaron la guía (código <strong>{discountCode}</strong>, ya aplicado en el botón).
            </Text>
            <Text style={text}>
                Te dejo las tres preguntas que más me hacen, por si alguna te frena:
            </Text>
            <Text style={text}>
                <strong>¿Necesito saber mucho de Notion?</strong>
                <br />
                No. Lo duplicás a tu cuenta y empezás a anotar. Todo lo que vas a tocar es tildar una casilla, escribir una línea y elegir una opción de una lista. En menos de 15 minutos lo tenés andando.
            </Text>
            <Text style={text}>
                <strong>¿Sirve si ya tengo mi propio sistema?</strong>
                <br />
                Sí. Podés usar solo el módulo Sistema de Hábitos en 30 días e ir sumando el resto cuando quieras.
            </Text>
            <Text style={text}>
                <strong>¿Es un pago mensual?</strong>
                <br />
                No. Es un pago único y la plantilla queda en tu Notion para siempre.
            </Text>
            <Text style={text}>
                Si ya aplicaste la hoja de diseño de la guía, NEURAL es el paso natural: el lugar donde ese hábito convive con tus proyectos y metas, en lugar de competir contra ellos.
            </Text>
            <Section style={buttonContainer}>
                <Link style={button} href={neuralUrl}>
                    Conseguir NEURAL System
                </Link>
            </Section>
            <Text style={text}>
                Y si no es para vos ahora, no pasa nada. Voy a seguir escribiéndote cada semana con ideas prácticas sobre hábitos y ciencia del comportamiento.
            </Text>
            <Text style={text}>
                Un abrazo,
                <br />
                <strong>Jonatan Fernandez</strong> — Ciclo de Hábitos
            </Text>
        </EmailLayout>
    );
}
