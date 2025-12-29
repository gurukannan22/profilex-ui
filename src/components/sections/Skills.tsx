const skillsData = [
    {
        category: 'Core Tech',
        items: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Hibernate'],
    },
    {
        category: 'Emerging Tech',
        items: ['Artificial Intelligence', 'Generative AI', 'Prompt Engineering', 'Data Analysis'],
    },
    {
        category: 'Tools & DevOps',
        items: ['Git', 'Kafka', 'Grafana', 'Firebase', 'PostgreSQL'],
    },
    {
        category: 'Languages',
        items: ['Java', 'Perl', 'HTML', 'CSS', 'JavaScript'],
    },
    {
        category: 'Domain',
        items: ['FinTech (UPI)', 'Healthcare', 'EdTech'],
    },
];

export function Skills() {
    return (
        <section id="skills" className="container mx-auto px-4 max-w-6xl mb-24">
            <h2 className="text-3xl font-medium mb-12 flex items-center">
                <span className="text-primary mr-2">#</span>skills
                <span className="h-px bg-primary w-32 md:w-64 ml-4"></span>
            </h2>

            <div className="flex flex-col md:flex-row gap-12">
                {/* Left side: Abstract shapes (placeholder) */}
                <div className="md:w-1/3 relative hidden md:block">
                    <div className="w-24 h-24 border border-primary absolute top-10 left-10"></div>
                    <div className="w-16 h-16 border border-primary absolute top-24 left-24"></div>

                    <div className="absolute bottom-10 left-0 grid grid-cols-5 gap-2">
                        {[...Array(15)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-gray-500 rounded-full"></div>
                        ))}
                    </div>
                </div>

                {/* Right side: Skill boxes */}
                <div className="md:w-2/3 flex flex-wrap gap-4 items-start justify-end">
                    <div className="flex flex-col gap-4">
                        {/* Column 1 */}
                        <SkillBox category={skillsData[0].category} items={skillsData[0].items} />
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* Column 2 */}
                        <SkillBox category={skillsData[1].category} items={skillsData[1].items} />
                        <SkillBox category={skillsData[3].category} items={skillsData[3].items} />
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* Column 3 */}
                        <SkillBox category={skillsData[2].category} items={skillsData[2].items} />
                        <SkillBox category={skillsData[4].category} items={skillsData[4].items} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SkillBox({ category, items }: { category: string, items: string[] }) {
    return (
        <div className="border border-gray-600 w-full md:w-48">
            <h3 className="border-b border-gray-600 p-2 font-medium bg-background">{category}</h3>
            <div className="p-2 text-gray-400">
                {items.join(' ')}
            </div>
        </div>
    )
}
