import { Navbar } from "./navbar"
import { Sidebar } from "./sidebar"

export function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background">
            <Sidebar />
            <div className="flex flex-col lg:pl-64">
                <Navbar />
                <main className="flex-1 p-4 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    )
}
