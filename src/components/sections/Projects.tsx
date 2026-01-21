"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Folder, Github, ExternalLink, Globe } from 'lucide-react';

const projectsData = [
    {
        title: 'ABCD (Aditya Birla Capital Digital)',
        desc: 'Developed Wrapper microservices for UPI Payments App using Java & Spring Boot.',
        tech: ['Java', 'Spring Boot', 'Microservices', 'Firebase', 'Grafana'],
        image: '#',
        live: '#',
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
    const { t } = useLanguage();
    // Assuming we might add translations for project descriptions later, 
    // for now we use the static data but translate UI elements.

    return (
        <section id="projects" className="container mx-auto px-4 max-w-6xl mb-24">
            <div className="flex justify-between items-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-medium flex items-center"
                >
                    <span className="text-primary mr-2">#</span>{t.ui.projects.title || 'projects'}
                    <span className="h-px bg-primary w-32 md:w-64 ml-4"></span>
                </motion.h2>
                <Link href="#projects" className="text-white hover:text-primary transition-colors flex items-center gap-1 group">
                    {t.ui.projects.viewAll || 'View all'}
                    <span className="group-hover:translate-x-1 transition-transform">~~&gt;</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -8 }}
                        className="border border-muted bg-card/50 hover:border-primary transition-all duration-300 rounded-lg overflow-hidden flex flex-col group h-full hover:shadow-lg hover:shadow-primary/5"
                    >
                        {/* Image Placeholder area - now more stylistic */}
                        <div className="h-48 w-full border-b border-muted bg-muted/20 flex items-center justify-center relative overflow-hidden group-hover:bg-muted/30 transition-colors">
                            <div className="absolute inset-0 bg-primary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                            <Folder className="w-12 h-12 text-primary/40 group-hover:text-primary transition-colors duration-300" />
                        </div>

                        {/* Tech Stack */}
                        <div className="border-b border-muted p-3 bg-muted/10 flex flex-wrap gap-2 text-xs">
                            {project.tech.map((tech) => (
                                <span key={tech} className="text-primary/80">#{tech}</span>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-grow">{project.desc}</p>

                            <div className="flex gap-4 mt-auto">
                                <Link
                                    href={project.live}
                                    className="flex items-center gap-2 border border-primary text-primary px-4 py-2 text-sm rounded hover:bg-primary hover:text-background transition-all font-medium"
                                >
                                    {project.live.includes('github') ? <Github className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
                                    Live
                                </Link>
                                {project.cached && (
                                    <Link
                                        href={project.cached}
                                        className="flex items-center gap-2 border border-muted text-muted-foreground px-4 py-2 text-sm rounded hover:border-foreground hover:text-foreground transition-all"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Cached
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
