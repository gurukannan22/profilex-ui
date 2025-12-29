"use client";

import Link from 'next/link';
import { Ghost, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const navItems = [
    { name: '#home', href: '#home' },
    { name: '#works', href: '#projects' },
    {
        name: 'Journey',
        href: '#',
        children: [
            { name: '#experience', href: '#experience' },
            { name: '#education', href: '#education' },
            { name: '#upskilling', href: '#upskilling' },
            { name: '#giving-back', href: '#giving-back' },
        ]
    },
    { name: '#about-me', href: '#about-me' },
    { name: '#contacts', href: '#contacts' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur-sm z-50 py-4 border-b border-white/5">
            <div className="container mx-auto px-4 flex justify-between items-center max-w-6xl">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                    <Ghost className="w-6 h-6 text-primary" />
                    <span>Guru</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group">
                            {item.children ? (
                                <button
                                    className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors py-2"
                                    onMouseEnter={() => setDropdownOpen(true)}
                                    onMouseLeave={() => setDropdownOpen(false)}
                                >
                                    <span className="text-primary mr-0.5">#</span>
                                    {item.name}
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <span className="text-primary mr-0.5">#</span>
                                    {item.name.replace('#', '')}
                                </Link>
                            )}

                            {/* Dropdown */}
                            {item.children && (
                                <div
                                    className={`absolute top-full left-0 w-48 bg-background/95 backdrop-blur-md border border-gray-800 rounded-md shadow-xl py-2 transition-all duration-200 origin-top-left ${dropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
                                    onMouseEnter={() => setDropdownOpen(true)}
                                    onMouseLeave={() => setDropdownOpen(false)}
                                >
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                        >
                                            <span className="text-primary mr-1">#</span>
                                            {child.name.replace('#', '')}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="ml-4">
                        <span className="font-bold">EN</span>
                        <span className="text-gray-600 mx-1">\</span>
                        <span className="text-gray-400">RU</span>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-background border-b border-gray-800 p-4 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-2">
                        {navItems.map((item) => (
                            <div key={item.name}>
                                {item.children ? (
                                    <>
                                        <div className="text-xl font-bold py-2 text-gray-300">
                                            <span className="text-primary mr-1">#</span>{item.name}
                                        </div>
                                        <div className="pl-4 flex flex-col gap-3 border-l border-gray-800 ml-2 mt-1">
                                            {item.children.map(child => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="text-lg font-medium text-gray-400"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {child.name.replace('#', '')}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-2xl font-bold py-2 block"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="text-primary mr-1">#</span>
                                        {item.name.replace('#', '')}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="mt-4 pt-4 border-t border-gray-800">
                            <span className="font-bold text-xl">EN</span>
                            <span className="text-gray-600 mx-2 text-xl">\</span>
                            <span className="text-gray-400 text-xl">RU</span>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
