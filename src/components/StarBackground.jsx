import { useEffect, useState } from "react";

//id, size, x, y, opacity, animationDuration
//id, size, x, y, delay, animationDuration


export const StarBackground =() =>{
    const [stars,setStars]= useState([])
    const [meteors,setMeteors]= useState([])
    const [isInitialized, setIsInitialized] = useState(false)

    useEffect(()=>{
        if (!isInitialized) {
            generateStars();
            generateMeteors();
            setIsInitialized(true);
        }

        const handleResize =() =>{
            // Debounce resize to prevent excessive re-renders
            clearTimeout(window.resizeTimeout);
            window.resizeTimeout = setTimeout(() => {
                generateStars();
            }, 250); // Increased debounce time
        }

        window.addEventListener('resize',handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
            clearTimeout(window.resizeTimeout);
        }
    },[isInitialized]);

    const generateStars =() =>{
        const numberOfStars = Math.floor(window.innerWidth*window.innerHeight/600); // Higher density for full coverage
        const newStars=[]
        for( let i=0;i<numberOfStars;i++){
            newStars.push({
                id:i,
                size: Math.random()*2+1, // Simple size range
                x: Math.random() * 160 - 30, // Extended range: -30% to 130% (left-right)
                y: Math.random() * 160 - 30, // Extended range: -30% to 130% (top-bottom)
                opacity: Math.random() * 0.4 + 0.4, // Reduced opacity range for subtle flickering
                animationDuration: Math.random() * 2 + 1, // Faster, more varied flickering
            });
        }

        setStars(newStars);
    };

     const generateMeteors =() =>{
        const numberOfMeteors = 4; // Reduced number for less busy effect
        const newMeteors = [];
        for( let i=0;i<numberOfMeteors;i++){
            newMeteors.push({
                id:i,
                size: Math.random()*1.5+1, // Smaller meteors
                x: Math.random() * 100,
                y: Math.random() * 15, // Reduced vertical spread
                delay: i * 3, // Longer delays between meteors
                animationDuration: 5, // Slower, more natural movement
            });
        }

        setMeteors(newMeteors);
    };


    return (
     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 animate-parallax-drift">  
    {stars.map((star)=>(
        <div 
            key={star.id} 
            className="star animate-pulse-subtle" 
            style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration+"s",
            }}  
        />
    ))}

    {meteors.map((meteor)=>(
        <div 
            key={meteor.id} 
            className="meteor animate-meteor" 
            style={{
            width: meteor.size*37 + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration+"s",
            }}  
        />
    ))}
    </div>
    );
};