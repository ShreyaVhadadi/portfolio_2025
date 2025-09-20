import { ExternalLink, Github } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects =[
    {
        id: 0,
        title: "ReelMind AI",
        description: "Content-based movie recommender (July 2025) using OpenAI embeddings + FAISS; 85%+ relevance in manual tests.",
        image: "/Projects/Pic2.png",
        tags: ["Python","LLMs","OpenAI","FAISS"],
        demoUrl: 'https://projectsite.com',
        githubUrl:'#',
    },
    {
        id:2,
        title:"Portfolio Website",
        description:"Personal portfolio built with React + Vite + Tailwind; responsive UI and dark mode.",
        image:"/Projects/Portfolio1.png",
        tags:["React","Vite","TailwindCSS"],
        demoUrl: '#',
        githubUrl:'#',
    },
    
]


export const ProjectSection =()=>{
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here some of my recent projects!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key)=>(
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden relative">
                            <img 
                            src={project.image}
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-[0.95] group-hover:brightness-100 saturate-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag)=>(
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                            ))}
                        </div>
                     
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-start items-end mt-6">
                            <div className="flex space-x-4">
                                <a href={project.demoUrl} 
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <ExternalLink size={20}/>
                                </a>
                                <a href={project.githubUrl} 
                                target="_blank"
                                className="flex item-center text-foreground/80 hover:text-primary transition-colors duration-300">
                                <Github size={20}/>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto"
            target="_blank"
            href="https://github.com/ShreyaVhadadi/Trek-the-World"
            >
                    Check my github<ArrowRight size={16} />
            </a>
            </div>
        </div>
    </section>
};