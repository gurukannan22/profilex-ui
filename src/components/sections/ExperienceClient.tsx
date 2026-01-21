"use client";

import { motion } from "framer-motion";
import { getDriveImageLink } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export interface Experience {
    id: string;
    role: string;
    company: string;
    duration: string;
    responsibilities: string[];
    logo?: string;
}

interface ExperienceClientProps {
    experiences: Experience[];
}

export function ExperienceClient({ experiences: initialExperiences }: ExperienceClientProps) {
    const { t } = useLanguage();
    // Use experiences from context for translation support
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const experiences = (t.experiences as any[]) || initialExperiences;

    return (
        <section id="experience" className="container mx-auto px-4 max-w-6xl mb-24">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-medium mb-12 flex items-center"
            >
                <span className="text-primary mr-2">#</span>{t.ui.experience.title}
                <span className="h-px bg-primary w-32 md:w-64 ml-4"></span>
            </motion.h2>

            <div className="space-y-12 relative border-l-2 border-primary/30 ml-3 pl-8 md:pl-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative group"
                    >
                        {/* Timeline Dot */}
                        <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 + 0.2 }}
                            className="absolute -left-[45px] md:-left-[61px] top-6 h-5 w-5 rounded-full border-4 border-background bg-primary z-10 group-hover:scale-125 transition-transform duration-300"
                        />

                        <div className="flex flex-col md:flex-row gap-4 items-start p-4 -ml-4 rounded-lg hover:bg-white/5 transition-colors duration-300">
                            {exp.logo && (
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                    className="hidden md:flex flex-shrink-0 bg-white p-2 rounded-lg w-16 h-16 items-center justify-center shadow-md relative overflow-hidden"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={getDriveImageLink(exp.logo)}
                                        alt={exp.company}
                                        className="w-full h-full object-contain"
                                    />
                                </motion.div>
                            )}

                            <div className="flex-1 w-full">
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
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-center text-muted-foreground mb-4 gap-1 md:gap-2 text-sm md:text-base">
                                    <span className="font-medium text-foreground/80">{exp.company}</span>
                                    <span className="hidden md:inline text-primary">•</span>
                                    <span className="text-xs md:text-sm bg-primary/10 px-2 py-0.5 rounded text-primary border border-primary/20">{exp.duration}</span>
                                </div>
                                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                                    {exp.responsibilities.map((resp: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-primary mt-1.5 text-xs">▹</span>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
