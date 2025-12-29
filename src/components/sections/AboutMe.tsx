import Link from 'next/link';

export function AboutMe() {
    return (
        <section id="about-me" className="container mx-auto px-4 max-w-6xl mb-24">
            <div className="flex items-center mb-12">
                <h2 className="text-3xl font-medium flex items-center">
                    <span className="text-primary mr-2">#</span>about-me
                    <span className="h-px bg-primary w-32 md:w-64 ml-4"></span>
                </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-12 justify-between">
                {/* Text Content */}
                <div className="md:w-1/2 text-gray-400 leading-relaxed">
                    <p className="mb-6">
                        Hi, I’m Guru Kannan – <span className="text-white font-medium">Java whisperer by day, tech mentor by passion.</span>
                    </p>
                    <p className="mb-6">
                        Currently building scalable backend systems at <span className="text-primary">TCS</span>, and shaping tomorrow’s tech talent through my upskilling venture <span className="text-primary">Ednue Technologies</span>.
                    </p>
                    <p className="mb-8">
                        Previously at Neurealm, I juggled Perl scripts and Java microservices like a backend ninja – from healthcare platforms to fintech UPI apps. I speak Java, think in microservices, and occasionally dream in JSON. Always up for clean code, good coffee, and great conversations.
                    </p>
                    <Link href="#contacts" className="border border-primary text-white px-6 py-2 hover:bg-primary/10 transition-colors inline-block">
                        Read more -&gt;
                    </Link>
                </div>

                {/* Image Placeholder */}
                <div className="md:w-1/2 flex justify-center relative">
                    <div className="w-80 h-96 bg-gray-800 border-b border-primary relative">
                        {/* Person image placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                            Person Image
                        </div>
                        {/* Decorative Dots */}
                        <div className="absolute top-10 left-[-20px] grid grid-cols-5 gap-1">
                            {[...Array(20)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-gray-500 rounded-full"></div>
                            ))}
                        </div>

                        <div className="absolute bottom-20 right-[-10px] grid grid-cols-4 gap-2">
                            {[...Array(16)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
