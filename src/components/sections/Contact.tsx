import { Mail } from 'lucide-react';

export function Contact() {
    return (
        <section id="contacts" className="container mx-auto px-4 max-w-6xl mb-32">
            <div className="flex items-center mb-12">
                <h2 className="text-3xl font-medium flex items-center">
                    <span className="text-primary mr-2">#</span>contacts
                    <span className="h-px bg-primary w-32 md:w-64 ml-4"></span>
                </h2>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-12">
                <div className="md:w-1/2 text-gray-400">
                    <p>
                        I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                    </p>
                </div>

                <div className="border border-gray-600 p-4">
                    <h3 className="font-medium text-white mb-4">Message me here</h3>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-gray-400">
                            <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center text-xs text-white">!</div>
                            <span>gurukannan0922</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <Mail className="w-5 h-5" />
                            <span>gurukannan2000@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
