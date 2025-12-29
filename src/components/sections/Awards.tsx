import { getPortfolioData } from "@/lib/data";
import { getDriveImageLink } from "@/lib/utils";

interface Award {
    id: string;
    title: string;
    issuer: string;
    date: string;
    associatedWith: string;
    associatedWithLogo?: string;
    description: string;
    certificate?: string;
    image?: string;
}

export async function Awards() {
    const data = await getPortfolioData();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const awards = (data as any).awards as Award[];

    if (!awards || awards.length === 0) return null;

    return (
        <section id="honors" className="container mx-auto px-4 max-w-6xl mb-24">
            <h2 className="text-3xl font-medium mb-12 flex items-center">
                <span className="text-primary mr-2">#</span>honors-&-awards
                <span className="h-px bg-primary w-32 md:w-64 ml-4"></span>
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
                {awards.map((award) => (
                    <div key={award.id} className="border border-muted rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg bg-card/30 p-6 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-1">{award.title}</h3>
                                <p className="text-primary font-medium">{award.issuer}</p>
                            </div>
                            <span className="text-sm text-muted-foreground whitespace-nowrap bg-muted/50 px-2 py-1 rounded">{award.date}</span>
                        </div>

                        <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                            {award.associatedWithLogo && (
                                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={getDriveImageLink(award.associatedWithLogo)}
                                        alt={award.associatedWith}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            )}
                            <span>Associated with {award.associatedWith}</span>
                        </div>

                        <p className="text-muted-foreground mb-6 flex-grow">{award.description}</p>

                        {(award.certificate || award.image) && (
                            <div className="mt-auto pt-4 border-t border-muted/50">
                                <div className="relative w-full h-48 rounded-md overflow-hidden bg-muted/30 border border-muted group cursor-pointer">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={getDriveImageLink(award.certificate || award.image || '')}
                                        alt={award.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                    <a
                                        href={award.certificate || award.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <span className="text-white font-medium border border-white px-3 py-1 rounded">View Full Size</span>
                                    </a>
                                </div>
                                <p className="text-xs text-center mt-2 text-muted-foreground uppercase tracking-wider">
                                    {award.certificate ? 'Certificate of Achievement' : 'Event Photo'}
                                </p>
                            </div>
                        )}
                        {/* Placeholder state for user guidance */}
                        {(!award.certificate && !award.image) && (
                            <div className="mt-auto pt-4 border-t border-muted/50 border-dashed">
                                <div className="flex items-center justify-center h-24 bg-muted/10 rounded text-sm text-muted-foreground italic">
                                    [Image/Certificate Placeholder]
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
