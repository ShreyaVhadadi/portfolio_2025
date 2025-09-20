import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/util";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        // Check initial theme
        const storedTheme = localStorage.getItem("theme");
        const isDark = storedTheme === "dark";
        setIsDarkMode(isDark);
        
        if (isDark) {
            document.documentElement.classList.add("dark");
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        
        if (newTheme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            {/* Main Navbar */}
            <nav
                className={cn(
                    "fixed w-full z-50 transition-all duration-300",
                    isScrolled ? "py-3 bg-background/90 backdrop-blur-md shadow-lg" : "py-4"
                )}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between w-full">
                        {/* Logo/Brand - Left */}
                        <a href="#home" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors duration-300">
                            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent animate-pulse-subtle">
                                SP
                            </span>
                        </a>

                        {/* Desktop Navigation - Center */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        {/* Desktop Theme Toggle - Right */}
                        <div className="hidden lg:flex items-center">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300"
                                aria-label="Toggle theme"
                            >
                                {isDarkMode ? (
                                    <Sun className="h-5 w-5 text-yellow-400" />
                                ) : (
                                    <Moon className="h-5 w-5 text-foreground" />
                                )}
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center space-x-2">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300"
                                aria-label="Toggle theme"
                            >
                                {isDarkMode ? (
                                    <Sun className="h-5 w-5 text-yellow-400" />
                                ) : (
                                    <Moon className="h-5 w-5 text-foreground" />
                                )}
                            </button>
                            
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6 text-foreground" />
                                ) : (
                                    <Menu className="h-6 w-6 text-foreground" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-40">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={closeMenu}
                    />
                    
                    {/* Menu Panel */}
                    <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-background shadow-2xl">
                        <div className="p-6 pt-20">
                            {/* Navigation Links */}
                            <nav className="space-y-4">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={closeMenu}
                                        className="block py-3 px-4 text-lg font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};