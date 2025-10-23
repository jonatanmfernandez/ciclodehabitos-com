import { consumeStream, convertToModelMessages, streamText, type UIMessage } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const prompt = convertToModelMessages(messages)

  const result = streamText({
    model: "google/gemini-2.5-flash-image",
    prompt,
    system: `Eres un asistente experto en desarrollo personal y construcción de hábitos. 
Tu objetivo es ayudar a las personas a construir hábitos duraderos y superar la procrastinación.
Proporciona consejos prácticos, motivadores y basados en ciencia del comportamiento.
Sé empático, comprensivo y ofrece pasos concretos y accionables.
Responde en español de manera clara y concisa.`,
    abortSignal: req.signal,
  })

  return result.toUIMessageStreamResponse({
    onFinish: async ({ isAborted }) => {
      if (isAborted) {
        console.log("[v0] Chat aborted")
      }
    },
    consumeSseStream: consumeStream,
  })
}
