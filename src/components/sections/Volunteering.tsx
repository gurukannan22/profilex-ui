import { getPortfolioData } from "@/lib/data";
import { getDriveImageLink } from "@/lib/utils";

interface Volunteer {
    id: string;
    role: string;
    organization: string;
    duration: string;
    description: string;
    certificate?: string;
}

export async function Volunteering() {
    const data = await getPortfolioData();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const volunteering = (data as any).volunteering as Volunteer[];

    if (!volunteering || volunteering.length === 0) return null;


    return (
        <section id="giving-back" className="container mx-auto px-4 max-w-6xl mb-24">
            <h2 className="text-3xl font-medium mb-12 flex items-center">
                <span className="text-primary mr-2">#</span>giving-back
                <span className="h-px bg-primary w-32 md:w-64 ml-4"></span>
            </h2>

            <div className="space-y-8">
                {volunteering.map((vol) => (
                    <div key={vol.id} className="border-l-4 border-muted pl-6 hover:border-primary transition-colors py-2 relative">
                        <span className="absolute -left-[11px] top-0 h-5 w-5 rounded-full border-4 border-background bg-muted" />
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h3 className="text-xl font-bold">{vol.role} <span className="text-primary">@ {vol.organization}</span></h3>
                            <span className="text-sm text-muted-foreground">{vol.duration}</span>
                        </div>
                        <p className="text-gray-400 mb-4 max-w-3xl">{vol.description}</p>

                        {vol.certificate && (
                            <div className="mt-4 pt-4 border-t border-gray-800">
                                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">Certificate of Appreciation</p>
                                <div className="relative w-full max-w-md h-auto border border-gray-700 rounded-lg overflow-hidden bg-gray-900/50 hover:bg-gray-900 transition-colors group">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={getDriveImageLink(vol.certificate)}
                                        alt={`${vol.role} Certificate`}
                                        className="w-full h-auto object-contain max-h-96 opacity-90 group-hover:opacity-100 transition-opacity"
                                        loading="lazy"
                                    />
                                    <a
                                        href={vol.certificate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                                    >
                                        <span>Full Screen ↗</span>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
