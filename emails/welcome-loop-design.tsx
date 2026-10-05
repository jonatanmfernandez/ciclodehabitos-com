import { Heading, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, heading, highlight, text } from "./components";

interface WelcomeLoopDesignEmailProps {
    unsubscribeUrl: string;
}

// Email 3 (Día 4): El bucle de 3 piezas: Señal, Rutina y Recompensa.
export default function WelcomeLoopDesignEmail({ unsubscribeUrl }: WelcomeLoopDesignEmailProps) {
    return (
        <EmailLayout preview="Las 3 piezas que hacen que un hábito se sostenga solo" unsubscribeUrl={unsubscribeUrl}>
            <Heading style={heading}>Las 3 piezas que sostienen un hábito</Heading>
            <Text style={text}>
                Cuando un hábito se rompe, la mayoría se culpa: <em>"no tengo disciplina"</em>. Pero en el 95% de los casos, no es un fallo personal, es una pieza del diseño que se cayó.
            </Text>
            <Text style={text}>
                Todo hábito duradero funciona como un bucle neurocientífico de 3 partes:
            </Text>
            <Text style={highlight}>
                1. ⚡ <strong>Señal (El disparador):</strong> Algo que ya pasa en tu rutina diaria. No "cuando tenga tiempo", sino <em>"después de lavarme los dientes"</em> o <em>"apenas sirvo el primer café"</em>.
                <br /><br />
                2. ⚙️ <strong>Rutina (La micro-acción):</strong> La conducta específica y ridículamente fácil de hacer.
                <br /><br />
                3. 🎉 <strong>Recompensa (El cierre):</strong> Un registro o sensación inmediata de haber cumplido que libera dopamina en tu cerebro.
            </Text>
            <Text style={text}>
                Si no hay una señal clara, te olvidás. Si la rutina es demasiado pesada, tu cerebro procrastina. Si no hay recompensa, tu sistema neurológico no ve razón para repetir la acción mañana.
            </Text>
            <Text style={text}>
                Revisá el módulo 02 y la <strong>Hoja de Diseño</strong> de la guía PDF que descargaste. ¿Tu hábito actual tiene sus 3 piezas bien definidas?
            </Text>
            <Text style={text}>
                En 3 días te cuento cómo diseñar tu entorno para que el mal hábito sea difícil y el buen hábito sea automático.
            </Text>
            <Text style={text}>
                Abrazo,
                <br />
                <strong>Jonatan Fernandez</strong> — Ciclo de Hábitos
            </Text>
        </EmailLayout>
    );
}
