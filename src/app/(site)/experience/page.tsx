import { getPortfolioData } from "@/lib/data";

interface Experience {
    id: string;
    role: string;
    company: string;
    duration: string;
    responsibilities: string[];
}

export default async function ExperiencePage() {
    const data = await getPortfolioData();
    const experiences = data.experiences as Experience[];

    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-3xl font-bold mb-8">Professional Experience</h1>
            <div className="space-y-8 relative border-l-2 border-border ml-3 pl-8">
                {experiences.map((exp) => (
                    <div key={exp.id} className="relative">
                        <span className="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
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
                ))}
            </div>
        </div>
    );
}
