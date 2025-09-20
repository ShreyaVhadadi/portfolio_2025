import { useState } from "react";
import { cn } from "../lib/util";

const skills =[
  {name: "ETL Development", level: 85, category: "data"},
  {name: "Data Migration", level: 80, category: "data"},
  {name: "Data Integration", level: 85, category: "data"},
  {name: "Automation Scripting", level: 80, category: "automation"},
  {name: "Backend Development", level: 90, category: "backend"},
  {name: "Java", level: 90, category: "backend"},
  {name: "Python", level: 90, category: "backend"},
  {name: "Django", level: 85, category: "backend"},
  {name: "Spring Boot", level: 85, category: "backend"},
  {name: "Kafka", level: 80, category: "backend"},
  {name: "Data Pipelines", level: 85, category: "data"},
  {name: "APIs", level: 85, category: "backend"},
  {name: "Rest APIs", level: 85, category: "backend"},
  {name: "PostgreSQL", level: 85, category: "database"},
  {name: "MySQL", level: 85, category: "database"},
  {name: "System Design", level: 80, category: "frontend"},
  {name: "Microservices", level: 85, category: "frontend"},
  {name: "Object Oriented Programming", level: 90, category: "backend"},
  {name: "Artificial Intelligence", level: 80, category: "AI"},
  {name: "Generative AI", level: 75, category: "AI"},
  {name: "Test Automation", level: 80, category: "automation"},
  {name: "Automation", level: 80, category: "automation"},
  {name: "Software Testing", level: 80, category: "QA"},
  {name: "Large Language Models", level: 75, category: "AI"}
];
const categories =["all","frontend","backend","AI"];


export const SkillsSection =()=>{
    const[activeCategory,setActiveCategory]=useState("all");
    const filteredSkills =skills.filter((skill)=> activeCategory==="all" || skill.category===activeCategory);

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key)=>(
                    <button key={key} 
                    onClick={()=> setActiveCategory(category)}
                    className={cn("cosmic-button capitalize",
                        activeCategory=== category ? "bg-primary text-primary-foreground" : ""
                    )}>
                        {category}
                    </button>

                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill,key)=>(
                    <div key={key} className="bg-card p-6 rounded=lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                style={{width:skill.level+"%"}}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
};