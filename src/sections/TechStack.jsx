import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DiReact, DiNodejsSmall, DiMongodb, DiPython, DiGit } from 'react-icons/di';
import { SiTailwindcss, SiExpress, SiNextdotjs } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const technologies = [
    { name: 'React', icon: <DiReact /> },
    { name: 'Node.js', icon: <DiNodejsSmall /> },
    { name: 'MongoDB', icon: <DiMongodb /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Python', icon: <DiPython /> },
    { name: 'Git', icon: <DiGit /> },
];

const TechStack = () => {
    // Duplicate the array to ensure seamless looping
    const loopedTechs = [...technologies, ...technologies];

    useEffect(() => {
        // Optional: Fade in the section itself
        gsap.fromTo('#tech-stack-content',
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: '#tech-stack',
                    start: 'top 80%',
                }
            }
        );
    }, []);

    return (
        <section id="tech-stack" className="py-20 bg-luxury-black border-t border-luxury-espresso overflow-hidden">
            <div id="tech-stack-content" className="container mx-auto px-4 text-center">
                <h2 className="text-luxury-gold text-sm uppercase tracking-widest mb-10 opacity-70">Technologies I Work With</h2>

                {/* Marquee Container */}
                <div className="relative w-full overflow-hidden mask-gradient">
                    {/* Gradient Masks for smooth fade edges (Optional but premium) */}
                    <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-luxury-black to-transparent z-10"></div>
                    <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-luxury-black to-transparent z-10"></div>

                    <div className="flex w-max animate-marquee gap-16">
                        {loopedTechs.map((tech, index) => (
                            <div key={`${tech.name}-${index}`} className="tech-icon group flex flex-col items-center gap-2 cursor-pointer min-w-[100px]">
                                <div className="text-5xl md:text-6xl text-luxury-sand/50 group-hover:text-luxury-gold transition-all duration-300 transform group-hover:scale-110">
                                    {tech.icon}
                                </div>
                                <span className="text-sm text-luxury-sand/0 group-hover:text-luxury-sand/100 transition-all duration-300">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
