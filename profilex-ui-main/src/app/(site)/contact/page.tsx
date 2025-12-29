import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-2xl text-center">
            <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
            <p className="text-muted-foreground mb-12">
                I’m currently open to new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>

            <div className="flex justify-center gap-8">
                <a href="mailto:email@example.com" className="flex flex-col items-center gap-2 hover:text-primary transition-colors">
                    <div className="p-4 bg-muted rounded-full">
                        <Mail className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-medium">Email</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:text-primary transition-colors">
                    <div className="p-4 bg-muted rounded-full">
                        <Linkedin className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:text-primary transition-colors">
                    <div className="p-4 bg-muted rounded-full">
                        <Github className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-medium">GitHub</span>
                </a>
            </div>
        </div>
    );
}
