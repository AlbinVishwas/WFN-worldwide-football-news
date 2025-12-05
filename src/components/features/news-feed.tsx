import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for news
const NEWS_ITEMS = [
    {
        id: "1",
        title: "Arsenal vs Liverpool: The Tactical Battle That Could Decide the Title",
        summary: "Arteta and Slot face off in a high-stakes chess match at the Emirates.",
        image: "https://images.unsplash.com/photo-1522778119026-d647f0565c6a?auto=format&fit=crop&q=80",
        tag: "Analysis",
        time: "2h ago"
    },
    {
        id: "2",
        title: "Mbappe's Madrid Start: A Statistical Deep Dive",
        summary: "Is the Frenchman struggling or just adapting? The numbers tell a different story.",
        image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80",
        tag: "Stats",
        time: "4h ago"
    },
    {
        id: "3",
        title: "Champions League: Team of the Week",
        summary: "Who made the cut after a thrilling round of European action?",
        image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80",
        tag: "UCL",
        time: "6h ago"
    },
    {
        id: "4",
        title: "Transfer Watch: The Next Big Brazilian Wonderkid",
        summary: "Scouts from every top club are watching this 17-year-old sensation.",
        image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80",
        tag: "Transfers",
        time: "8h ago"
    }
]

export function NewsFeed() {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NEWS_ITEMS.map((news) => (
                <Link key={news.id} href={`/news/${news.id}`} className="group">
                    <Card className="h-full overflow-hidden transition-all hover:shadow-md hover:border-primary/50">
                        <div className="aspect-video w-full overflow-hidden">
                            <img
                                src={news.image}
                                alt={news.title}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <CardHeader className="p-4">
                            <div className="mb-2 flex items-center justify-between">
                                <Badge variant="secondary" className="text-xs font-normal">
                                    {news.tag}
                                </Badge>
                                <span className="text-xs text-muted-foreground">{news.time}</span>
                            </div>
                            <CardTitle className="line-clamp-2 text-lg group-hover:text-primary">
                                {news.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                            <p className="line-clamp-2 text-sm text-muted-foreground">
                                {news.summary}
                            </p>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    )
}
