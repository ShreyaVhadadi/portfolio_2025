import { Calendar, MapPin, GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
    {
        id: 1,
        type: "degree",
        title: "Master of Science in Computer Science",
        institution: "Stevens Institute of Technology",
        location: "Hoboken, NJ",
        duration: "August 2019 - May 2021",
        description: "Focused on data structures, web programming, ML, data mining, HCI, and algorithms.",
        coursework: ["Data Structures", "Web Programming", "Machine Learning", "Data Mining", "HCI", "Algorithms"],
        icon: GraduationCap
    },
    {
        id: 2,
        type: "degree",
        title: "Bachelor of Engineering in Information Technology",
        institution: "SIES Graduate School of Technology",
        location: "Mumbai, India",
        duration: "August 2012 - June 2016",
        description: "Studied DSA, OOP, software engineering, and DBMS with hands-on projects.",
        coursework: ["Data Structures & Algorithms", "OOP", "Software Engineering", "DBMS"],
        icon: GraduationCap
    }
];

export const EducationSection = () => {
    return (
        <section id="education" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary">Education</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Academic journey and professional certifications that shaped my expertise
                </p>
                
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
                    
                    <div className="space-y-8">
                        {education.map((edu, index) => {
                            const IconComponent = edu.icon;
                            return (
                                <div key={edu.id} className="relative flex items-start gap-6 group">
                                    {/* Timeline dot */}
                                    <div className="flex-shrink-0 w-16 h-16 bg-card rounded-full flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/60 transition-colors duration-300 relative z-10">
                                        <IconComponent className="h-6 w-6 text-primary" />
                                    </div>
                                    
                                    {/* Content card */}
                                    <div className="flex-1 gradient-border p-6 card-hover">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-semibold text-foreground mb-1">
                                                    {edu.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-primary font-medium mb-2">
                                                    <GraduationCap className="h-4 w-4" />
                                                    {edu.institution}
                                                </div>
                                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="h-3 w-3" />
                                                        {edu.location}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="h-3 w-3" />
                                                        {edu.duration}
                                                    </div>
                                                    {edu.gpa && (
                                                        <div className="text-sm font-medium text-primary">
                                                            GPA: {edu.gpa}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <p className="text-muted-foreground mb-4 leading-relaxed">
                                            {edu.description}
                                        </p>
                                        
                                        {/* Coursework */}
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-foreground mb-2">Key Coursework:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {edu.coursework.map((course, courseIndex) => (
                                                    <span 
                                                        key={courseIndex}
                                                        className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                                                    >
                                                        {course}
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
