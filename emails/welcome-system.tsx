import { Heading, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, heading, text } from "./components";

interface WelcomeSystemEmailProps {
    unsubscribeUrl: string;
}

// Email 4 (Día 6): Un hábito solo no alcanza. Presenta el problema que resuelve NEURAL System.
export default function WelcomeSystemEmail({ unsubscribeUrl }: WelcomeSystemEmailProps) {
    return (
        <EmailLayout preview="Lo que pasa cuando tu hábito no tiene dónde vivir" unsubscribeUrl={unsubscribeUrl}>
            <Heading style={heading}>Un hábito solo no alcanza</Heading>
            <Text style={text}>
                Si llegaste hasta acá, ya sabés diseñar un hábito: señal, rutina mínima, recompensa. Eso solo ya te pone adelante de la mayoría.
            </Text>
            <Text style={text}>
                Pero hay algo que la guía deja planteado al final y que hoy quiero desarrollar: <strong>un hábito es solo una pieza del sistema</strong>.
            </Text>
            <Text style={text}>
                Pensalo así. Querés leer más, pero también tenés proyectos de trabajo, metas personales, tareas que se acumulan y una lista de ideas que nunca terminás de ordenar. Cuando todo eso vive desparramado entre notas del celular, la cabeza y tres apps distintas, el hábito nuevo compite contra el caos. Y el caos suele ganar.
            </Text>
            <Text style={text}>
                Los hábitos que se sostienen en el tiempo casi siempre tienen algo en común: están conectados a un lugar donde ves tu semana completa. Sabés por qué hacés lo que hacés, qué viene después y cómo vas.
            </Text>
            <Text style={text}>
                Eso es lo que se conoce como un "segundo cerebro": un sistema externo donde organizás proyectos, metas, tareas y hábitos para que tu cabeza quede libre para pensar, no para acordarse de todo.
            </Text>
            <Text style={text}>
                Yo armé el mío en Notion y lo convertí en una plantilla que cualquiera puede duplicar. En el próximo correo te la muestro por dentro.
            </Text>
            <Text style={text}>
                Un abrazo,
                <br />
                <strong>Jonatan Fernandez</strong> — Ciclo de Hábitos
            </Text>
        </EmailLayout>
    );
}
