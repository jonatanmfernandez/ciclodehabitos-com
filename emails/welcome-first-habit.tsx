import { Heading, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, heading, highlight, text } from "./components";

interface WelcomeFirstHabitEmailProps {
    unsubscribeUrl: string;
}

// Email 3 de la secuencia de bienvenida: primer hábito accionable (+3 días).
export default function WelcomeFirstHabitEmail({ unsubscribeUrl }: WelcomeFirstHabitEmailProps) {
    return (
        <EmailLayout preview="Tu primer hábito simple: 1 minuto" unsubscribeUrl={unsubscribeUrl}>
            <Heading style={heading}>Tu primer hábito simple</Heading>
            <Text style={text}>
                Vamos directo a la acción. Hoy vas a implementar una micro-acción que puede
                cambiar tu día:
            </Text>
            <Text style={highlight}>→ "1 minuto de orden antes de dormir"</Text>
            <Text style={text}>
                No es una limpieza profunda. Es solo un minuto: guardar algo, acomodar algo,
                dejar algo listo para mañana.
            </Text>
            <Text style={text}>
                Este hábito activa un ciclo poderoso: claridad → energía → consistencia. Y como
                es imposible fallar (es un minuto), empieza a construir la identidad de "persona
                que cumple lo que se propone".
            </Text>
            <Text style={text}>Probalo hoy. Te va a sorprender.</Text>
            <Text style={text}>
                ¿Lo hiciste? Respondé este correo con un "listo" — me encanta saber quién pasó
                a la acción.
            </Text>
        </EmailLayout>
    );
}
