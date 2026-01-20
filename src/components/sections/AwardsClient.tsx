"use client";

import { motion } from "framer-motion";
import { getDriveImageLink } from "@/lib/utils";

export interface Award {
    id: string;
    title: string;
    issuer: string;
    date: string;
    associatedWith: string;
    associatedWithLogo?: string;
    description: string;
    certificate?: string;
    image?: string;
}

interface AwardsClientProps {
    awards: Award[];
}

export function AwardsClient({ awards }: AwardsClientProps) {
    if (!awards || awards.length === 0) return null;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring" as const, bounce: 0.4, duration: 0.8 }
        }
    };

    return (
        <section id="honors" className="container mx-auto px-4 max-w-6xl mb-24">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-medium mb-12 flex items-center"
            >
                <span className="text-primary mr-2">#</span>honors-&-awards
                <span className="h-px bg-primary w-32 md:w-64 ml-4"></span>
            </motion.h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid gap-8 md:grid-cols-2"
            >
                {awards.map((award) => (
                    <motion.div
                        key={award.id}
                        variants={item}
                        whileHover={{
                            y: -8,
                            scale: 1.02,
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                        }}
                        className="border border-muted rounded-lg hover:border-primary transition-colors duration-300 bg-card/30 p-6 flex flex-col h-full group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{award.title}</h3>
                                <p className="text-primary font-medium">{award.issuer}</p>
                            </div>
                            <span className="text-sm text-muted-foreground whitespace-nowrap bg-muted/50 px-2 py-1 rounded">{award.date}</span>
                        </div>

                        <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                            {award.associatedWithLogo && (
                                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={getDriveImageLink(award.associatedWithLogo)}
                                        alt={award.associatedWith}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            )}
                            <span>Associated with {award.associatedWith}</span>
                        </div>

                        <p className="text-muted-foreground mb-6 flex-grow">{award.description}</p>

                        {(award.certificate || award.image) && (
                            <div className="mt-auto pt-4 border-t border-muted/50">
                                <div className="relative w-full h-48 rounded-md overflow-hidden bg-muted/30 border border-muted group cursor-pointer">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={getDriveImageLink(award.certificate || award.image || '')}
                                        alt={award.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                    <a
                                        href={award.certificate || award.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                    >
                                        <span className="text-white font-medium border border-white px-3 py-1 rounded hover:bg-white/20 transition-colors">View Full Size</span>
                                    </a>
                                </div>
                                <p className="text-xs text-center mt-2 text-muted-foreground uppercase tracking-wider">
                                    {award.certificate ? 'Certificate of Achievement' : 'Event Photo'}
                                </p>
                            </div>
                        )}
                        {/* Placeholder state for user guidance */}
                        {(!award.certificate && !award.image) && (
                            <div className="mt-auto pt-4 border-t border-muted/50 border-dashed">
                                <div className="flex items-center justify-center h-24 bg-muted/10 rounded text-sm text-muted-foreground italic">
                                    [Image/Certificate Placeholder]
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
