import { Linkedin, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="px-4 py-16 bg-background/80">
            <div className="container mx-auto max-w-5xl text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Connect <span className="text-primary">with me</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                    I’m open to new opportunities, collaborations, and conversations.
                </p>
                <div className="flex items-center justify-center gap-6">
                    <a
                        href="https://www.linkedin.com/in/shreya-vhadadi-20a13011a/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full border border-border hover:bg-primary/10 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                        href="https://www.instagram.com/sherryme_30/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full border border-border hover:bg-primary/10 transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram className="h-5 w-5" />
                    </a>
                    <a
                        href="https://www.facebook.com/share/1CLbVJBm9r/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full border border-border hover:bg-primary/10 transition-colors"
                        aria-label="Facebook"
                    >
                        <Facebook className="h-5 w-5" />
                    </a>
                </div>
                <p className="text-xs text-muted-foreground mt-10">
                    © {new Date().getFullYear()} Shreya Vhadadi. All rights reserved.
                </p>
            </div>
        </footer>
    );
};


