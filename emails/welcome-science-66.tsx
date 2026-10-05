import { Heading, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, heading, highlight, text } from "./components";

interface WelcomeScience66EmailProps {
    unsubscribeUrl: string;
}

// Email 2 (Día 2): Mito de los 21 días vs 66 días + La versión mínima del hábito.
export default function WelcomeScience66Email({ unsubscribeUrl }: WelcomeScience66EmailProps) {
    return (
        <EmailLayout preview="Por qué el 92% abandona el día 14 (y la regla de los 66 días)" unsubscribeUrl={unsubscribeUrl}>
            <Heading style={heading}>Por qué el 92% abandona el día 14</Heading>
            <Text style={text}>
                Hola! Seguro escuchaste mil veces que <em>"un hábito se forma en 21 días"</em>.
            </Text>
            <Text style={text}>
                Ese número no vino de ningún laboratorio. Salió de una observación clínica del cirujano plástico Maxwell Maltz en 1960 sobre cuánto tardaban sus pacientes en acostumbrarse a ver su nueva cara.
            </Text>
            <Text style={text}>
                La investigación real de Phillippa Lally en <strong>University College London (UCL)</strong> demostró que en promedio un hábito tarda <strong>66 días</strong> en volverse automático. Y en el camino, alrededor del día 14, la motivación inicial cae a cero.
            </Text>
            <Text style={highlight}>
                💡 La clave para no abandonar: La Versión Mínima
                <br /><br />
                En el capítulo 03 de la guía explicamos cómo reducir cualquier hábito a una acción tan pequeña que podés cumplirla incluso en tus peores días.
                <br /><br />
                • En lugar de "hacer 1 hora de gym" → 1 serie de 5 flexiones.
                <br />
                • En lugar de "leer 1 capítulo" → Leer 2 páginas.
                <br />
                • En lugar de "meditar 20 minutos" → 3 respiraciones conscientes.
            </Text>
            <Text style={text}>
                Lo importante en los primeros 30 días no es la intensidad, sino la <strong>frecuencia y la identidad</strong>. Primero construís el hábito de aparecer, después lo perfeccionás.
            </Text>
            <Text style={text}>
                <strong>Desafío para hoy:</strong> ¿Cuál es la versión de 1 minuto del hábito que elegiste el primer día? Respondeme este correo y decime cuál es.
            </Text>
            <Text style={text}>
                Un abrazo,
                <br />
                <strong>Jonatan Fernandez</strong> — Ciclo de Hábitos
            </Text>
        </EmailLayout>
    );
}
