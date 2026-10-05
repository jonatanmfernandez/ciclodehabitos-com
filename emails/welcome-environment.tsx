import { Heading, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, heading, highlight, text } from "./components";

interface WelcomeEnvironmentEmailProps {
    unsubscribeUrl: string;
}

// Email 4 (Día 7): El diseño de entorno le gana a la disciplina.
export default function WelcomeEnvironmentEmail({ unsubscribeUrl }: WelcomeEnvironmentEmailProps) {
    return (
        <EmailLayout preview="El diseño de entorno le gana a la disciplina (siempre)" unsubscribeUrl={unsubscribeUrl}>
            <Heading style={heading}>El entorno le gana a la disciplina</Heading>
            <Text style={text}>
                Llegamos al día 7. A esta altura, la novedad inicial de la guía empieza a asentarse y te enfrentás a la vida real: días con cansancio, imprevistos y baja energía.
            </Text>
            <Text style={text}>
                Acá es donde la mayoría comete el error de intentar "forzar" la disciplina. La neurociencia nos enseña algo distinto: <strong>somos criaturas del menor esfuerzo</strong>.
            </Text>
            <Text style={highlight}>
                🛡️ La Ley de la Fricción
                <br /><br />
                • Si querés leer antes de dormir, dejá el libro arriba de la almohada y el celular en la cocina (aumentás fricción al hábito malo, reducís al bueno).
                <br /><br />
                • Si querés tomar más agua, poné una botella llena al lado de tu teclado desde la mañana.
            </Text>
            <Text style={text}>
                Las personas que parecen tener "superfuerza de voluntad" en realidad no están luchando contra la tentación todo el día. Simplemente <strong>diseñaron un entorno donde la tentación casi no existe</strong> y donde la acción correcta es el camino por defecto.
            </Text>
            <Text style={text}>
                En 3 días te voy a mostrar cómo conectar esto para crear no solo un hábito aislado, sino un <strong>sistema de vida completo</strong>.
            </Text>
            <Text style={text}>
                Un abrazo,
                <br />
                <strong>Jonatan Fernandez</strong> — Ciclo de Hábitos
            </Text>
        </EmailLayout>
    );
}
