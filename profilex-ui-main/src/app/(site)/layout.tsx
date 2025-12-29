export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // For the specific Figma design 'Elias', we handle layout in the page itself 
    // or we could move Navbar/Footer here if we standardized all pages. 
    // To avoid duplication with the new page.tsx structure, we'll just render children.
    return (
        <div className="min-h-screen">
            {children}
        </div>
    );
}
