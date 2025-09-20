import { ArrowDown } from "lucide-react"

export const HeroSection=()=>{
    return <section id="home" className="relative min-h-screen flex items-center justify-center px-4"
    >
        <div className="w-full max-w-6xl mx-auto text-center z-10 -mt-16 sm:-mt-32">
            <div className="flex flex-col items-center justify-center space-y-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                    <span className="text-foreground">
                        {"Hi, I am ".split("").map((char, index) => (
                            <span
                                key={index}
                                className="opacity-0 animate-char-reveal"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animationFillMode: 'forwards'
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </span>
                    <span className="text-primary animate-text-glow-intense">
                        {"Shreya Vhadadi".split("").map((char, index) => (
                            <span
                                key={index}
                                className="opacity-0 animate-char-reveal"
                                style={{
                                    animationDelay: `${(index + 9) * 0.1}s`,
                                    animationFillMode: 'forwards'
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </span>
                </h1>
                <div className="pt-4">
                    <a 
                        href="#projects" 
                        className="cosmic-button w-fit flex items-center mx-auto"
                    >
                        View my work
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>

    </section>
}