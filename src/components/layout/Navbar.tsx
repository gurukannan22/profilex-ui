"use client";

import Link from 'next/link';
import { Ghost, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const navItemsKeys = [
    { nameKey: 'home', href: '#home', isAnchor: true },
    { nameKey: 'works', href: '#projects', isAnchor: true },
    {
        nameKey: 'journey',
        href: '#',
        isAnchor: false,
        children: [
            { nameKey: 'experience', href: '#experience', isAnchor: true },
            { nameKey: 'education', href: '#education', isAnchor: true },
            { nameKey: 'upskilling', href: "/#upskilling", isAnchor: true },
            { nameKey: 'givingBack', href: "/#giving-back", isAnchor: true },
            { nameKey: 'honors', href: "/#honors", isAnchor: true },
        ]
    },
    { nameKey: 'about', href: '#about-me', isAnchor: true },
    { nameKey: 'contacts', href: '#contacts', isAnchor: true },
] as const;

// Type guard or helper to safe check children
const hasChildren = (item: unknown): item is { children: ReadonlyArray<{ href: string; nameKey: string }> } => {
    return typeof item === 'object' && item !== null && 'children' in item;
};

export function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Helper to get translated name
    const getNavName = (key: keyof typeof t.ui.nav) => t.ui.nav[key];

    return (
        <nav className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur-md z-50 py-4 border-b border-white/5 shadow-sm">
            <div className="container mx-auto px-4 flex justify-between items-center max-w-6xl">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg group">
                    <Ghost className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
                    <span className="group-hover:text-primary transition-colors">Guru</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItemsKeys.map((item, index) => (
                        <div
                            key={item.href + index}
                            className="relative px-2 py-1"
                            onMouseEnter={() => {
                                setHoveredIndex(index);
                                if (hasChildren(item)) setDropdownOpen(true);
                            }}
                            onMouseLeave={() => {
                                setHoveredIndex(null);
                                if (hasChildren(item)) setDropdownOpen(false);
                            }}
                        >
                            {/* Hover Highlight */}
                            {hoveredIndex === index && (
                                <motion.span
                                    layoutId="nav-hover"
                                    className="absolute inset-0 bg-white/5 rounded-md -z-10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}

                            {hasChildren(item) ? (
                                <button
                                    className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
                                >
                                    <span className="text-primary mr-0.5">#</span>
                                    {getNavName(item.nameKey as keyof typeof t.ui.nav)}
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen && hoveredIndex === index ? 'rotate-180' : ''}`} />
                                </button>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <span className="text-primary mr-0.5">#</span>
                                    {getNavName(item.nameKey as keyof typeof t.ui.nav).replace('#', '')}
                                </Link>
                            )}

                            {/* Dropdown */}
                            <AnimatePresence>
                                {hasChildren(item) && dropdownOpen && hoveredIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 w-48 bg-background/95 backdrop-blur-md border border-gray-800 rounded-md shadow-xl py-2 mt-2 origin-top-left overflow-hidden"
                                    >
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors relative"
                                            >
                                                <span className="text-primary mr-1">#</span>
                                                {getNavName(child.nameKey as keyof typeof t.ui.nav).replace('#', '')}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    <div className="ml-4 flex items-center gap-2 text-sm font-medium">
                        <span
                            className={`transition-colors cursor-pointer ${language === 'en' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                            onClick={() => setLanguage('en')}
                        >
                            EN
                        </span>
                        <span className="text-gray-600">/</span>
                        <span
                            className={`transition-colors cursor-pointer ${language === 'ta' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                            onClick={() => setLanguage('ta')}
                        >
                            TA
                        </span>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/5 rounded-md transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="absolute top-full left-0 w-full bg-background border-b border-gray-800 overflow-hidden md:hidden shadow-2xl"
                        >
                            <div className="p-4 flex flex-col gap-4">
                                {navItemsKeys.map((item, index) => (
                                    <div key={item.href + index}>
                                        {hasChildren(item) ? (
                                            <>
                                                <div className="text-xl font-bold py-2 text-gray-300">
                                                    <span className="text-primary mr-1">#</span>{getNavName(item.nameKey as keyof typeof t.ui.nav)}
                                                </div>
                                                <div className="pl-4 flex flex-col gap-3 border-l border-gray-800 ml-2 mt-1">
                                                    {item.children.map((child) => (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            className="text-lg font-medium text-gray-400 hover:text-primary transition-colors"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {getNavName(child.nameKey as keyof typeof t.ui.nav).replace('#', '')}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="text-2xl font-bold py-2 block text-gray-200 hover:text-primary transition-colors"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <span className="text-primary mr-1">#</span>
                                                {getNavName(item.nameKey as keyof typeof t.ui.nav).replace('#', '')}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                <div className="mt-4 pt-4 border-t border-gray-800 flex items-center gap-4">
                                    <span
                                        className={`font-bold text-xl ${language === 'en' ? 'text-white' : 'text-gray-400'}`}
                                        onClick={() => setLanguage('en')}
                                    >
                                        EN
                                    </span>
                                    <span className="text-gray-600 text-xl">/</span>
                                    <span
                                        className={`font-bold text-xl ${language === 'ta' ? 'text-white' : 'text-gray-400'}`}
                                        onClick={() => setLanguage('ta')}
                                    >
                                        TA
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
