import { LiveTicker } from "@/components/features/live-ticker"
import { NewsFeed } from "@/components/features/news-feed"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HomePage() {
    return (
        <div className="space-y-8">
            {/* Live Ticker Section */}
            <section className="-mx-4 lg:-mx-8">
                <LiveTicker />
            </section>

            {/* Hero / Tonight For You Section */}
            <section className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background p-6 lg:p-10 border">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-primary font-medium">
                            <Sparkles className="h-4 w-4" />
                            <span>Tonight For You</span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                            Arsenal vs Liverpool
                        </h1>
                        <p className="text-muted-foreground max-w-xl">
                            The title race heats up as the top two collide. Don't miss the tactical breakdown and live coverage starting at 20:00.
                        </p>
                    </div>
                    <Button size="lg" className="shrink-0">
                        Go to Match Centre <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </section>

            {/* Latest News Section */}
            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight">Latest Stories</h2>
                    <Button variant="ghost" className="text-muted-foreground">
                        View All
                    </Button>
                </div>
                <NewsFeed />
            </section>
        </div>
    )
}
