import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Mock data
const STANDINGS = [
    { pos: 1, team: "Liverpool", p: 15, w: 11, d: 3, l: 1, pts: 36, form: ["W", "W", "D", "W", "W"] },
    { pos: 2, team: "Arsenal", p: 15, w: 10, d: 4, l: 1, pts: 34, form: ["W", "D", "W", "W", "D"] },
    { pos: 3, team: "Man City", p: 15, w: 10, d: 2, l: 3, pts: 32, form: ["L", "D", "L", "W", "L"] },
    { pos: 4, team: "Chelsea", p: 15, w: 8, d: 4, l: 3, pts: 28, form: ["W", "W", "W", "D", "W"] },
    { pos: 5, team: "Nottm Forest", p: 15, w: 7, d: 4, l: 4, pts: 25, form: ["L", "W", "L", "W", "L"] },
]

export function StandingsTable() {
    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-12 text-center">#</TableHead>
                        <TableHead>Team</TableHead>
                        <TableHead className="text-center">P</TableHead>
                        <TableHead className="text-center font-bold">Pts</TableHead>
                        <TableHead className="text-right hidden md:table-cell">Form</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {STANDINGS.map((row) => (
                        <TableRow key={row.team}>
                            <TableCell className="text-center font-medium">{row.pos}</TableCell>
                            <TableCell className="font-semibold">{row.team}</TableCell>
                            <TableCell className="text-center text-muted-foreground">{row.p}</TableCell>
                            <TableCell className="text-center font-bold">{row.pts}</TableCell>
                            <TableCell className="text-right hidden md:table-cell">
                                <div className="flex justify-end gap-1">
                                    {row.form.map((res, i) => (
                                        <Badge
                                            key={i}
                                            className={`h-5 w-5 p-0 flex items-center justify-center text-[10px] ${res === "W" ? "bg-green-500 hover:bg-green-600" :
                                                    res === "D" ? "bg-gray-400 hover:bg-gray-500" :
                                                        "bg-red-500 hover:bg-red-600"
                                                }`}
                                        >
                                            {res}
                                        </Badge>
                                    ))}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
