import { Text } from "@react-email/components";
import * as React from "react";
import { PersonalEmailLayout, note, text } from "./components";

interface WelcomeDesignSheetEmailProps {
    unsubscribeUrl: string;
}

// Email 3 (Día 4): La hoja de diseño completa con un ejemplo (leer todos los días).
export default function WelcomeDesignSheetEmail({ unsubscribeUrl }: WelcomeDesignSheetEmailProps) {
    return (
        <PersonalEmailLayout preview="Te muestro cómo completar la hoja con un ejemplo" unsubscribeUrl={unsubscribeUrl}>
            <Text style={text}>
                Hoy quiero que veas cómo queda la hoja de diseño de la guía cuando está completa. Tomemos un hábito que mucha gente quiere y casi nadie sostiene: <strong>leer todos los días</strong>.
            </Text>
            <Text style={note}>
                Señal: después de servirme el primer café de la mañana.
                <br />
                Rutina: leer.
                <br />
                Versión mínima: abrir el libro y leer una página.
                <br />
                Recompensa: tachar el día en el calendario de la heladera.
            </Text>
            <Text style={text}>
                Fijate en tres detalles. La señal es algo que <em>ya</em> pasa todos los días, así que no dependés de acordarte. La versión mínima es ridículamente pequeña a propósito: una página la podés leer aunque estés cansado, apurado o sin ganas. Y la recompensa es inmediata y visible.
            </Text>
            <Text style={text}>
                Lo que suele pasar es que muchos días vas a leer más de una página. Perfecto. Pero el día que solo leas una, eso cuenta como "hecho". Ese es el truco: proteger la cadena, no el volumen.
            </Text>
            <Text style={text}>
                Tu tarea para hoy: abrí la guía en la página 7 y completá la hoja con <strong>un solo hábito</strong>. Te lleva cinco minutos.
            </Text>
            <Text style={text}>
                Y si querés, respondé este correo con tu hoja completa. Me encanta leerlas.
            </Text>
            <Text style={text}>
                Un abrazo,
                <br />
                <strong>Joni</strong> — Ciclo de Hábitos
            </Text>
        </PersonalEmailLayout>
    );
}
