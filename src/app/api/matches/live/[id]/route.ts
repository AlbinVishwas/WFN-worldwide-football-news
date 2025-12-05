import { NextRequest } from "next/server"
import { LiveScoreService } from "@/services/live-score-service"

export const dynamic = 'force-dynamic'

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params

    const stream = new ReadableStream({
        async start(controller) {
            const encoder = new TextEncoder()

            try {
                for await (const update of LiveScoreService.subscribeToMatch(id)) {
                    const data = JSON.stringify(update)
                    controller.enqueue(encoder.encode(`data: ${data}\n\n`))
                }
            } catch (error) {
                console.error("Stream error:", error)
                controller.close()
            }
        }
    })

    return new Response(stream, {
        headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
        },
    })
}
