import { getPortfolioData } from "@/lib/data";
import { getDriveImageLink } from "@/lib/utils";

interface Experience {
    id: string;
    role: string;
    company: string;
    duration: string;
    responsibilities: string[];
    logo?: string;
}

export async function Experience() {
    const data = await getPortfolioData();
    const experiences = data.experiences as Experience[];

    return (
        <section id="experience" className="container mx-auto px-4 max-w-6xl mb-24">
            <h2 className="text-3xl font-medium mb-12 flex items-center">
                <span className="text-primary mr-2">#</span>experience
                <span className="h-px bg-primary w-32 md:w-64 ml-4"></span>
            </h2>

            <div className="space-y-12 relative border-l-2 border-primary ml-3 pl-8 md:pl-12">
                {experiences.map((exp) => (
                    <div key={exp.id} className="relative group">
                        <span className="absolute -left-[45px] md:-left-[61px] top-6 h-5 w-5 rounded-full border-4 border-background bg-primary z-10" />

                        <div className="flex flex-col md:flex-row gap-4 items-start">
                            {exp.logo && (
                                <div className="hidden md:flex flex-shrink-0 bg-white p-2 rounded-lg w-16 h-16 items-center justify-center shadow-md relative overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={getDriveImageLink(exp.logo)}
                                        alt={exp.company}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            )}

                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                    {exp.logo && (
                                        <div className="md:hidden flex-shrink-0 bg-white p-1.5 rounded-md w-10 h-10 flex items-center justify-center shadow-sm relative overflow-hidden">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={getDriveImageLink(exp.logo)}
                                                alt={exp.company}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-center text-muted-foreground mb-4 gap-1 md:gap-2 text-sm md:text-base">
                                    <span className="font-medium text-foreground/80">{exp.company}</span>
                                    <span className="hidden md:inline">•</span>
                                    <span>{exp.duration}</span>
                                </div>
                                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground leading-relaxed">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="pl-1">{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
