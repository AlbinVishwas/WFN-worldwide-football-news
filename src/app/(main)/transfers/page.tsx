import { TransferCard } from "@/components/features/transfer-card"

const TRANSFERS = [
    { player: "Kylian Mbappe", from: "PSG", to: "Real Madrid", fee: "Free Transfer", status: "Official", time: "2h ago" },
    { player: "Victor Osimhen", from: "Napoli", to: "Chelsea", fee: "€120m", status: "Rumor", time: "4h ago" },
    { player: "Joshua Kimmich", from: "Bayern Munich", to: "Man City", fee: "€50m", status: "Here We Go", time: "6h ago" },
    { player: "Alphonso Davies", from: "Bayern Munich", to: "Real Madrid", fee: "€40m", status: "Rumor", time: "1d ago" },
] as const

export default function TransfersPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Transfer Centre</h1>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {TRANSFERS.map((t, i) => (
                    <TransferCard key={i} {...t} />
                ))}
            </div>
        </div>
    )
}
