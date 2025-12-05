import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

interface TransferCardProps {
    player: string
    from: string
    to: string
    fee: string
    status: "Official" | "Rumor" | "Here We Go"
    time: string
}

export function TransferCard({ player, from, to, fee, status, time }: TransferCardProps) {
    return (
        <Card className="overflow-hidden">
            <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                    {/* Status Strip */}
                    <div className={`h-2 sm:h-auto sm:w-2 ${status === "Official" ? "bg-green-500" :
                            status === "Here We Go" ? "bg-yellow-500" :
                                "bg-blue-500"
                        }`} />

                    <div className="flex-1 p-4 sm:p-6">
                        <div className="flex items-center justify-between mb-4">
                            <Badge variant={status === "Official" ? "default" : "secondary"}>
                                {status}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{time}</span>
                        </div>

                        <h3 className="text-lg font-bold mb-4">{player}</h3>

                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2 font-medium">
                                <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-[10px]">{from[0]}</div>
                                {from}
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                            <div className="flex items-center gap-2 font-medium">
                                <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-[10px]">{to[0]}</div>
                                {to}
                            </div>
                        </div>

                        <div className="mt-4 text-sm font-medium text-muted-foreground">
                            Fee: <span className="text-foreground">{fee}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
