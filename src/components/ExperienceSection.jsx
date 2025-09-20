import { Calendar, MapPin, Building2, Users, Code2, Database, Laptop } from "lucide-react";

const experiences = [
    {
        id: 1,
        title: "ETL Developer",
        company: "Amdocs",
        location: "Plano, Texas",
        duration: "May 2023 - Present",
        description: "Lead ETL development with K2View/TDM9, boosting data availability and cutting latency for analytics.",
        bullets: [
            "Designed and maintained K2View/TDM9 ETL pipelines for analytics",
            "Delivered multiple onshore integration/migration releases on time",
            "Partnered with cross‑functional teams to optimize workflows",
            "Drove quality gates to ensure 100% data accuracy"
        ],
        technologies: ["K2View", "ETL", "Data Analytics"],
        achievements: ["30% higher availability", "25% faster processing", "95%+ client satisfaction"],
        icon: Database
    },
    {
        id: 2,
        title: "Software Developer", 
        company: "Amdocs",
        location: "Plano, Texas",
        duration: "June 2021 - May 2023",
        description: "Automated backend workflows in Java/Ginger and improved 5G solution scalability.",
        bullets: [
            "Automated regression and ops flows using Java + Ginger",
            "Built Spring Boot services and Kafka pipelines",
            "Improved test efficiency and reduced manual effort",
            "Contributed to 5G architecture and scalability"
        ],
        technologies: ["Java", "Spring Boot", "Kafka"],
        achievements: ["40% less manual effort", "35% better scalability", "5k+ txns/month"],
        icon: Laptop
    },
    {
        id: 3,
        title: "Software Engineer Intern",
        company: "Whatsbusy",
        location: "Remote",
        duration: "June 2020 - August 2020",
        description: "Refactored a Django app to cut bugs and improve performance and maintainability.",
        bullets: [
            "Refactored legacy views and models to reduce tech debt",
            "Fixed priority issues identified by the team",
            "Improved app responsiveness and error rates"
        ],
        technologies: ["Django", "Python", "Optimization"],
        achievements: ["15% faster", "20% fewer errors"],
        icon: Users
    },
    {
        id: 4,
        title: "Systems Engineer",
        company: "Tata Consultancy Services (TCS)",
        location: "Mumbai, India",
        duration: "January 2017 - February 2019",
        description: "Maintained T24 Banking App and built automation to reduce manual effort.",
        bullets: [
            "Resolved change requests across Agile sprints for T24",
            "Created Selenium/Python automation for timesheets",
            "Led test planning with ConformIQ and executed regression"
        ],
        technologies: ["Selenium", "Python", "Agile"],
        achievements: ["100+ CRs", "40% uptime gain", "30% faster planning"],
        icon: Building2
    }
];

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary">Experience</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Professional journey showcasing my growth and expertise in software development
                </p>
                
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
                    
                    <div className="space-y-8">
                        {experiences.map((exp, index) => {
                            const IconComponent = exp.icon;
                            return (
                                <div key={exp.id} className="relative flex items-start gap-6 group">
                                    {/* Timeline dot */}
                                    <div className="flex-shrink-0 w-16 h-16 bg-card rounded-full flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/60 transition-colors duration-300 relative z-10">
                                        <IconComponent className="h-6 w-6 text-primary" />
                                    </div>
                                    
                                    {/* Content card */}
                                    <div className="flex-1 gradient-border p-6 card-hover">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-semibold text-foreground mb-1">
                                                    {exp.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-primary font-medium mb-2">
                                                    <Building2 className="h-4 w-4" />
                                                    {exp.company}
                                                </div>
                                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="h-3 w-3" />
                                                        {exp.location}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="h-3 w-3" />
                                                        {exp.duration}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        {exp.bullets && (
                                            <ul className="text-sm text-muted-foreground mb-4 list-disc list-inside space-y-1 text-left">
                                                {exp.bullets.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                        )}
                                        
                                        {/* Achievements */}
                                        {exp.achievements && (
                                            <div className="mb-4">
                                                <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.achievements.map((achievement, achievementIndex) => (
                                                        <span 
                                                            key={achievementIndex}
                                                            className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                                                        >
                                                            {achievement}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        
                                        {/* Technologies */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, techIndex) => (
                                                    <span 
                                                        key={techIndex}
                                                        className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
