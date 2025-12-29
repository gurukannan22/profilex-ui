import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SocialSidebar } from "@/components/layout/SocialSidebar";
import { Hero } from "@/components/sections/Hero";
import { Quote } from "@/components/sections/Quote";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { AboutMe } from "@/components/sections/AboutMe";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Volunteering } from "@/components/sections/Volunteering";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground font-mono relative overflow-x-hidden">
            <Navbar />
            <SocialSidebar />

            <div className="relative z-10 pt-4">
                <Hero />
                <Quote />
                <AboutMe />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Certifications />
                <Volunteering />
                <Contact />
            </div>

            <Footer />
        </main>
    );
}
