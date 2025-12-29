import Link from 'next/link';
import { Github, Ghost, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-gray-600 pt-8 pb-12 mt-12">
            <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-4 font-bold text-lg">
                        <Ghost className="w-5 h-5 text-gray-400" />
                        <span>Guru</span>
                        <span className="text-gray-400 font-normal text-base ml-2">gurukannan0922@gmail.com</span>
                    </div>
                    <p className="text-gray-400">Web designer and front-end developer</p>
                </div>

                <div className="text-center md:text-left">
                    <h3 className="font-medium text-white mb-4 text-xl">Media</h3>
                    <div className="flex gap-4 justify-center md:justify-start items-center">
                        <Link href="https://github.com/gurukannan22" target="_blank" className="text-gray-400 hover:text-white"><Github className="w-5 h-5" /></Link>
                        <Link href="https://www.linkedin.com/in/gurukannan0922/" target="_blank" className="text-gray-400 hover:text-white"><Linkedin className="w-5 h-5" /></Link>
                        <Link href="https://gurukannan22.medium.com/" target="_blank" className="text-gray-400 hover:text-white">
                            {/* Medium Icon SVG since it's not in standard Lucide */}
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-400 mt-12 text-sm">
                © Copyright 2025. Made by Guru Kannan
            </div>
        </footer>
    );
}
