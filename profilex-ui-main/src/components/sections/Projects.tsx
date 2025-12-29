import Link from 'next/link';

const projects = [
    {
        title: 'ABCD (Aditya Birla Capital Digital)',
        desc: 'Developed Wrapper microservices for UPI Payments App using Java & Spring Boot.',
        tech: ['Java', 'Spring Boot', 'Microservices', 'Firebase', 'Grafana'],
        image: '#', // Placeholder
        live: '#', // Corporate project, likely no public link
        cached: '#',
    },
    {
        title: 'Athenahealth Rules 2.0',
        desc: 'Migrated healthcare rules engine using Perl and RedHat DMN architecture.',
        tech: ['Perl', 'RedHat DMN', 'Linux', 'Bitbucket'],
        image: '#',
        live: '#',
    },
    {
        title: 'Ednue Invoice App',
        desc: 'Automated invoice generation for training/upskilling venture.',
        tech: ['Java', 'PDF Generation', 'JavaFX'],
        image: '#',
        live: 'https://github.com/Ednue-Technologies',
    },
    {
        title: 'Frontend Learning',
        desc: 'Complete syllabus and internship program for students.',
        tech: ['HTML', 'CSS', 'JS'],
        image: '#',
        live: 'https://github.com/gurukannan22/frontend-learning',
    }
];

export function Projects() {
    return (
        <section id="projects" className="container mx-auto px-4 max-w-6xl mb-24">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-medium flex items-center">
                    <span className="text-primary mr-2">#</span>projects
                    <span className="h-px bg-primary w-32 md:w-64 ml-4"></span>
                </h2>
                <Link href="#projects" className="text-white hover:text-primary transition-colors">
                    View all ~~&gt;
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="border border-gray-600 bg-background hover:scale-105 transition-transform duration-300">
                        {/* Image Placeholder */}
                        <div className="h-48 w-full border-b border-gray-600 bg-gray-800 flex items-center justify-center">
                            {/* We'll use a dynamic solid color or a generic svg if possible later */}
                            <div className="text-gray-500 font-mono text-sm">{project.image !== '#' ? 'Image' : 'Project Image'}</div>
                        </div>

                        {/* Tech Stack */}
                        <div className="border-b border-gray-600 p-2 text-gray-400 text-sm">
                            {project.tech.join(' ')}
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <h3 className="text-2xl font-medium mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.desc}</p>
                            <div className="flex gap-4">
                                <Link href={project.live} className="border border-primary px-4 py-2 hover:bg-primary/10 transition-colors">
                                    Live &lt;~&gt;
                                </Link>
                                {project.cached && (
                                    <Link href={project.cached} className="border border-gray-600 px-4 py-2 hover:bg-gray-800 transition-colors text-gray-400">
                                        Cached &gt;=
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
