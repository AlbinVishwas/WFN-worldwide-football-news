"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area" // We might need to create this later, using div for now
import { Home, Trophy, Calendar, Newspaper, ArrowLeftRight, Settings } from "lucide-react"

const sidebarItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Matches", href: "/matches", icon: Calendar },
    { name: "Leagues", href: "/leagues", icon: Trophy },
    { name: "News", href: "/news", icon: Newspaper },
    { name: "Transfers", href: "/transfers", icon: ArrowLeftRight },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="hidden border-r bg-background lg:block lg:w-64 lg:fixed lg:inset-y-0">
            <div className="flex h-full flex-col">
                <div className="flex h-14 items-center border-b px-6">
                    <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
                        <span>WFN</span>
                    </Link>
                </div>
                <div className="flex-1 overflow-auto py-4">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        {sidebarItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                                    pathname === item.href
                                        ? "bg-muted text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                <item.icon className="h-4 w-4" />
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="mt-auto p-4 border-t">
                    <Button variant="ghost" className="w-full justify-start gap-2">
                        <Settings className="h-4 w-4" />
                        Settings
                    </Button>
                </div>
            </div>
        </div>
    )
}
