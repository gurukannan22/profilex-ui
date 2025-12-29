import { getPortfolioData } from "@/lib/data";

interface Education {
    id: string;
    degree: string;
    institution: string;
    year: string;
}

export default async function EducationPage() {
    const data = await getPortfolioData();
    const education = data.education as Education[];

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">Education & Certifications</h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Education</h2>
                <div className="space-y-6">
                    {education.map((edu) => (
                        <div key={edu.id} className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4 last:border-0">
                            <div>
                                <h3 className="text-xl font-medium">{edu.degree}</h3>
                                <p className="text-muted-foreground">{edu.institution}</p>
                            </div>
                            <p className="text-sm font-medium mt-2 md:mt-0 bg-secondary px-3 py-1 rounded-full">{edu.year}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    {/* Placeholder for certifications as it wasn't in initial data explicitly as a list */}
                    <div className="p-4 border rounded bg-muted/20">
                        <h3 className="font-medium">AWS Certified Solutions Architect</h3>
                        <p className="text-sm text-muted-foreground">Amazon Web Services • 2024</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
