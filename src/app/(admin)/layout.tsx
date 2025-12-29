import { type ReactNode } from "react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-muted/40">
            <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-background px-6 shadow-sm">
                <Link href="/admin" className="text-lg font-bold">ProfileX Admin</Link>
                <div className="ml-auto">
                    {/* Placeholder for logout */}
                    <span className="text-sm text-muted-foreground">Admin</span>
                </div>
            </header>
            <main className="container mx-auto p-6">
                {children}
            </main>
        </div>
    );
}
