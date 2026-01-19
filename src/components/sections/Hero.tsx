"use client";

import Link from 'next/link';
import Image from 'next/image';
import profilePic from '@/assets/profile_char.png';
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section id="home" className="pt-32 pb-16 min-h-screen flex items-center">
            <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2 mb-12 md:mb-0"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Guru Kannan is a <span className="text-primary">Java Developer</span> and{' '}
                        <span className="text-primary">Tech Mentor</span>
                    </h1>
                    <p className="text-gray-400 mb-8 max-w-md">
                        Building scalable backend systems and shaping tomorrow’s tech talent.
                    </p>
                    <Link
                        href="#contacts"
                        className="inline-block"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-primary text-white px-6 py-2 hover:bg-primary/10 transition-colors relative overflow-hidden group"
                        >
                            <span className="relative z-10">Contact me!!</span>
                            <motion.div
                                className="absolute inset-0 bg-primary/20"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.5 }}
                            />
                        </motion.button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:w-1/2 relative flex justify-center"
                >
                    {/* Abstract lines placeholder */}
                    <div className="absolute top-0 left-10 w-24 h-24 border-2 border-gray-700 rounded-full opacity-50 -z-10"></div>

                    {/* Background Gradient for Depth */}
                    <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform scale-110 -z-20"></div>

                    {/* Image Placeholder */}
                    <div className="relative z-10">
                        {/* We will replace this with a real image later */}
                        <div className="w-80 h-96 relative border-b-2 border-primary">
                            <Image
                                src={profilePic}
                                alt="Guru Kannan"
                                fill
                                className="object-cover object-top"
                                priority
                            />

                            {/* Dots decorative element */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                className="absolute bottom-4 right-[-20px] grid grid-cols-5 gap-1 z-20"
                            >
                                {[...Array(25)].map((_, i) => (
                                    <div key={i} className="w-1 h-1 bg-gray-500 rounded-full"></div>
                                ))}
                            </motion.div>

                            {/* Logo outline decorative element */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                className="absolute top-10 left-[-20px] text-gray-700 z-20"
                            >
                                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 10 H 90 V 90 H 10 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </motion.div>
                        </div>

                        <div className="mt-2 flex items-center border border-gray-700 px-2 py-1 inline-block bg-background">
                            <div className="w-3 h-3 bg-primary mr-2"></div>
                            <span className="text-gray-400 text-sm">Currently building at <span className="text-white font-bold">Ednue & TCS</span></span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
