import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export function SocialSidebar() {
    return (
        <div className="fixed left-4 top-0 h-full hidden xl:flex flex-col items-center justify-start pt-32 gap-4 z-50">
            <div className="w-px h-32 bg-gray-500 mb-2"></div>
            <Link href="https://github.com/gurukannan22" target="_blank" className="text-gray-400 hover:text-primary transition-colors"><Github className="w-6 h-6" /></Link>
            <Link href="https://www.linkedin.com/in/gurukannan0922/" target="_blank" className="text-gray-400 hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></Link>
            <Link href="https://gurukannan22.medium.com/" target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
            </Link>
        </div>
    );
}
