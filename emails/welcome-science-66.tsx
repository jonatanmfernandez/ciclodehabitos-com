import { Heading, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, heading, text } from "./components";

interface WelcomeScience66EmailProps {
    unsubscribeUrl: string;
}

// Email 2 (Día 2): El mito de los 21 días vs. los 66 días de Lally + versión mínima.
export default function WelcomeScience66Email({ unsubscribeUrl }: WelcomeScience66EmailProps) {
    return (
        <EmailLayout preview="Por qué abandonaste en la semana 3 (y no fue tu culpa)" unsubscribeUrl={unsubscribeUrl}>
            <Heading style={heading}>El número que cambia cómo ves tus hábitos</Heading>
            <Text style={text}>
                ¿Alguna vez arrancaste un hábito con todo, lo sostuviste dos o tres semanas y después se te cayó?
            </Text>
            <Text style={text}>
                Si te pasó, probablemente pensaste que te faltó disciplina. Pero hay otra explicación, y está en un número.
            </Text>
            <Text style={text}>
                Durante décadas se repitió que un hábito se forma en 21 días. Esa cifra salió de una observación del cirujano Maxwell Maltz sobre cuánto tardaban sus pacientes en acostumbrarse a su nueva imagen después de una operación. No era un estudio sobre hábitos.
            </Text>
            <Text style={text}>
                Cuando el equipo de Phillippa Lally, en University College London, siguió a 96 personas durante 12 semanas, encontró que el promedio para que un hábito se volviera automático fue de <strong>66 días</strong>. Y con muchísima variación entre personas y hábitos: algunos se instalaron mucho antes, otros tardaron bastante más.
            </Text>
            <Text style={text}>
                ¿Qué significa esto en la práctica? Que si a las tres semanas tu hábito todavía te cuesta, no estás fallando. Estás exactamente donde tenés que estar. El problema es que la mayoría abandona justo ahí, convencida de que "ya debería salir solo".
            </Text>
            <Text style={text}>
                El mismo estudio trae una buena noticia: saltearse un día aislado no arruinó el proceso. Lo que importa es volver al día siguiente.
            </Text>
            <Text style={text}>
                Por eso en la guía insisto tanto con la <strong>versión mínima</strong>. Si tu hábito es lo bastante pequeño como para hacerlo incluso en un mal día, llegar a los 66 se vuelve mucho más probable.
            </Text>
            <Text style={text}>
                En el próximo correo te muestro una hoja de diseño completa, paso a paso, con un ejemplo real.
            </Text>
            <Text style={text}>
                Un abrazo,
                <br />
                <strong>Jonatan Fernandez</strong> — Ciclo de Hábitos
            </Text>
        </EmailLayout>
    );
}
