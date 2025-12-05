"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SearchOverlay } from "@/components/features/search-overlay"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
            <div className="container flex h-14 items-center">
                <Button variant="ghost" size="icon" className="mr-2">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="font-bold text-xl tracking-tight">WFN</span>
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <SearchOverlay />
                    </div>
                </div>
            </div>
        </header>
    )
}
