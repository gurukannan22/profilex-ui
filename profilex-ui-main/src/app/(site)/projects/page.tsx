import { getPortfolioData } from '@/lib/data';

interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    link?: string;
}

export default async function ProjectsPage() {
    const data = await getPortfolioData();
    const projects = data.projects as Project[];

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">Projects</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.id} className="group flex flex-col bg-card rounded-xl border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                                {project.link && (
                                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                    </span>
                                )}
                            </div>
                            <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="bg-secondary/50 text-secondary-foreground border border-border px-2.5 py-1 rounded-md text-xs font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0" aria-label={`View ${project.title}`}></a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
