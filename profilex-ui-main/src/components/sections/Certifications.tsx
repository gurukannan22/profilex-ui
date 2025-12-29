import { getPortfolioData } from "@/lib/data";

interface Certification {
    id: string;
    title: string;
    issuer: string;
    date: string;
}

export async function Certifications() {
    const data = await getPortfolioData();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const certifications = (data as any).certifications as Certification[];

    if (!certifications || certifications.length === 0) return null;

    return (
        <section id="upskilling" className="container mx-auto px-4 max-w-6xl mb-24">
            <h2 className="text-3xl font-medium mb-12 flex items-center">
                <span className="text-primary mr-2">#</span>upskilling
                <span className="h-px bg-primary w-32 md:w-64 ml-4"></span>
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
                {certifications.map((cert) => (
                    <div key={cert.id} className="p-4 border border-muted bg-card/50 hover:bg-card transition-colors">
                        <h3 className="font-semibold text-foreground mb-1 line-clamp-2 min-h-[3rem]">{cert.title}</h3>
                        <div className="flex justify-between items-end mt-4">
                            <span className="text-sm text-primary">{cert.issuer}</span>
                            <span className="text-xs text-muted-foreground">{cert.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
