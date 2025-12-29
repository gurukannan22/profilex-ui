export function Quote() {
    return (
        <section className="container mx-auto px-4 max-w-4xl mb-24">
            <div className="relative border border-primary p-8 inline-block left-1/2 transform -translate-x-1/2">
                <span className="absolute -top-3 left-6 bg-background px-2 text-2xl">“</span>
                <h3 className="text-xl md:text-2xl font-medium">With great power comes great electricity bill</h3>
                <span className="absolute -bottom-3 right-6 bg-background px-2 text-2xl">”</span>
            </div>
            <div className="flex justify-end mt-[-1px] mr-[calc(50%-200px)]">
                <div className="border border-primary border-t-0 p-4 inline-block">
                    - Dr. Who
                </div>
            </div>
        </section>
    );
}
