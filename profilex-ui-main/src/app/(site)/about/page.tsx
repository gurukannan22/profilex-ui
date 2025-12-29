import { getPortfolioData } from "@/lib/data";

export default async function AboutPage() {
    const data = await getPortfolioData();
    const { about, skills } = data;

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">About Me</h1>
            <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
                <p className="text-lg leading-relaxed text-muted-foreground">{about.summary}</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {Object.entries(skills).map(([category, items]: [string, any]) => (
                        <div key={category} className="p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
                            <h3 className="font-semibold mb-3 capitalize text-lg border-b pb-2">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {Array.isArray(items) && items.map((skill: string) => (
                                    <span key={skill} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
