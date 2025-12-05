"use client"

import { Area, AreaChart, ResponsiveContainer, YAxis, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface MomentumData {
    minute: number
    value: number // Positive for Home, Negative for Away
}

// Mock data generator
const generateMockMomentum = (): MomentumData[] => {
    const data = []
    for (let i = 0; i <= 90; i += 5) {
        data.push({
            minute: i,
            value: Math.floor(Math.random() * 100) - 50 // -50 to 50
        })
    }
    return data
}

const data = generateMockMomentum()

export function MomentumGraph() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Match Momentum
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.8} />
                                </linearGradient>
                            </defs>
                            <YAxis hide domain={[-60, 60]} />
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        const val = payload[0].value as number
                                        return (
                                            <div className="rounded-lg border bg-background p-2 shadow-sm text-xs">
                                                <span className={val > 0 ? "text-red-500" : "text-blue-500"}>
                                                    {val > 0 ? "Home Dominance" : "Away Dominance"}
                                                </span>
                                            </div>
                                        )
                                    }
                                    return null
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="none"
                                fill="url(#colorValue)"
                                fillOpacity={1}
                            />
                            {/* Center Line */}
                            <line x1="0" y1="100" x2="100%" y2="100" stroke="currentColor" strokeOpacity={0.2} strokeDasharray="4 4" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>Kick Off</span>
                    <span>HT</span>
                    <span>FT</span>
                </div>
            </CardContent>
        </Card>
    )
}
