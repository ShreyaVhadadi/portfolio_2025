import {ThemeToggle} from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { EducationSection } from "../components/EducationSection";
import { ProjectSection } from "../components/ProjectSection";
import { Footer } from "../components/Footer";
import { ContactSection } from "../components/ContactSection";
export const Home=()=>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
    {/*Theme Toggel*/}
    <ThemeToggle/>

    {/*Background Effects*/}
    <StarBackground/>

    {/*Navbar*/}
    <Navbar/>
    {/*Main Content*/}
    <main className="pt-24 md:pt-28">
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ExperienceSection/>
        <EducationSection/>
        <ProjectSection/>
        <ContactSection/>
    </main>

    {/*Footer*/}
    <Footer/>

    </div>
};