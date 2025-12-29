import { getPortfolioData } from "@/lib/data";
import { getDriveImageLink } from "@/lib/utils";

interface Education {
    id: string;
    degree: string;
    institution: string;
    year: string;
    logo?: string;
}

export async function Education() {
    const data = await getPortfolioData();
    const education = data.education as Education[];

    return (
        <section id="education" className="container mx-auto px-4 max-w-6xl mb-24">
            <h2 className="text-3xl font-medium mb-12 flex items-center">
                <span className="text-primary mr-2">#</span>education
                <span className="h-px bg-primary w-32 md:w-64 ml-4"></span>
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
                {education.map((edu) => (
                    <div key={edu.id} className="border border-muted p-6 hover:border-primary transition-colors flex gap-4 items-start group">
                        {edu.logo && (
                            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-md p-1 flex items-center justify-center overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={getDriveImageLink(edu.logo)}
                                    alt={edu.institution}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        )}
                        <div>
                            <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">{edu.degree}</h3>
                            <p className="text-foreground font-medium mb-1">{edu.institution}</p>
                            <p className="text-muted-foreground text-sm">{edu.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
