import { Heading, Link, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, button, buttonContainer, heading, highlight, text } from "./components";

interface WelcomeNeuralEmailProps {
    unsubscribeUrl: string;
    neuralUrl: string;
    price: string;
    discountCode: string | null;
}

// Email 5 (Día 8): NEURAL System por dentro (oferta). Si hay código, abre la ventana de 72 h.
export default function WelcomeNeuralEmail({ unsubscribeUrl, neuralUrl, price, discountCode }: WelcomeNeuralEmailProps) {
    return (
        <EmailLayout preview="El sistema donde viven tus hábitos (y todo lo demás)" unsubscribeUrl={unsubscribeUrl}>
            <Heading style={heading}>NEURAL System por dentro</Heading>
            <Text style={text}>
                Te prometí mostrarte el sistema que uso para que los hábitos no queden sueltos. Se llama <strong>NEURAL System</strong> y es un workspace de Notion para sacar todo lo que tenés en la cabeza, organizarlo y ejecutar con foco.
            </Text>
            <Text style={text}>
                La idea es simple: todo lo que hoy tenés repartido entre notas, apps y la memoria pasa a vivir en un sistema conectado, donde cada pieza se relaciona con las demás. Esto es lo que vas a encontrar adentro:
            </Text>
            <Text style={highlight}>
                Mente en Orden: la guía del método, para capturar, decidir y ejecutar sin depender de la memoria.
                <br /><br />
                Bandeja de Entrada: todo lo que se te cruza en el día entra acá, sin decidir nada todavía.
                <br /><br />
                Gestión de tareas: acciones concretas con contexto (@casa, @oficina, @llamadas), vinculadas a sus proyectos.
                <br /><br />
                Life Vision Board: tus áreas de vida (salud, carrera, finanzas, relaciones, crecimiento personal) conectadas con lo que hacés hoy.
                <br /><br />
                Second Brain: tus notas, ideas y recursos en un solo lugar, listos para cuando los necesites.
                <br /><br />
                Revisión Semanal: un checklist corto para mantener el sistema limpio y seguir confiando en él.
            </Text>
            <Text style={text}>
                Y para lo que venimos hablando en estos correos, incluye el módulo <strong>Sistema de Hábitos en 30 días</strong>, que lleva a la práctica todo lo que viste en la guía:
            </Text>
            <Text style={highlight}>
                Gestión de hábitos: diseñás el hábito antes de trackearlo (señal, rutina, versión mínima, recompensa), con seis ejemplos ya completos.
                <br /><br />
                Tracker de 30 días: un tilde y una línea por día. Cuenta la versión mínima, no el volumen.
                <br /><br />
                Revisión semanal: tres preguntas cada domingo y una sola decisión: seguir, ajustar la señal, bajar a la versión mínima o rediseñar.
                <br /><br />
                Ajustes de hábitos: dieciséis problemas típicos ("me olvido de hacerlo", "el celular me gana siempre") con la corrección y la evidencia detrás.
            </Text>
            <Text style={text}>
                NEURAL System cuesta <strong>{price}</strong>, pago único. Lo duplicás en tu Notion en menos de 15 minutos y es tuyo para siempre, con las actualizaciones incluidas.
            </Text>
            {discountCode && (
                <Text style={text}>
                    Como descargaste la guía, tenés un precio especial durante las próximas 72 horas con el código <strong>{discountCode}</strong>. Ya viene aplicado en el botón.
                </Text>
            )}
            <Section style={buttonContainer}>
                <Link style={button} href={neuralUrl}>
                    Quiero NEURAL System
                </Link>
            </Section>
            <Text style={text}>
                Si tenés cualquier duda sobre si te sirve, respondé este correo y te la contesto yo.
            </Text>
            <Text style={text}>
                Un abrazo,
                <br />
                <strong>Joni</strong> — Ciclo de Hábitos
            </Text>
        </EmailLayout>
    );
}
