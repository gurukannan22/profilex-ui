"use client";

import { motion } from "framer-motion";
import { getDriveImageLink } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export interface Education {
    id: string;
    degree: string;
    institution: string;
    year: string;
    logo?: string;
}

interface EducationClientProps {
    education: Education[];
}

export function EducationClient({ education: initialEducation }: EducationClientProps) {
    const { t } = useLanguage();
    // Use education from context for translation support
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const education = (t.education as any[]) || initialEducation;

    return (
        <section id="education" className="container mx-auto px-4 max-w-6xl mb-24">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-medium mb-12 flex items-center"
            >
                <span className="text-primary mr-2">#</span>{t.ui.education?.title || 'education'}
                <span className="h-px bg-primary w-32 md:w-64 ml-4"></span>
            </motion.h2>

            <div className="grid gap-6 md:grid-cols-2">
                {education.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                        className="border border-muted p-6 hover:border-primary transition-all duration-300 flex gap-4 items-start group bg-card/30 rounded-lg hover:shadow-lg hover:shadow-primary/5"
                    >
                        {edu.logo && (
                            <div className="flex-shrink-0 w-14 h-14 bg-white rounded-md p-1.5 flex items-center justify-center overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-300">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={getDriveImageLink(edu.logo)}
                                    alt={edu.institution}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        )}
                        <div>
                            <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2 group-hover:text-primary transition-colors">{edu.degree}</h3>
                            <p className="text-foreground font-medium mb-1">{edu.institution}</p>
                            <p className="text-muted-foreground text-sm bg-muted/30 inline-block px-2 py-0.5 rounded border border-muted/50">{edu.year}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
