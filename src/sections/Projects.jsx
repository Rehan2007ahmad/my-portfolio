import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'AI Image Generator',
        category: 'MERN + OpenAI',
        image: 'https://placehold.co/600x400', // Placeholder
        description: 'A full-stack application that uses OpenAI API to generate and share creative images.',
        tech: ['React', 'Node.js', 'MongoDB', 'OpenAI'],
        links: { live: '#', github: '#' }
    },
    {
        title: 'Luxury E-Commerce',
        category: 'React + Tailwind',
        image: 'https://placehold.co/600x400', // Placeholder
        description: 'Premium shopping experience with complex cart logic and payment integration.',
        tech: ['React', 'Redux', 'Stripe', 'Tailwind'],
        links: { live: '#', github: '#' }
    },
    {
        title: 'Task Master Pro',
        category: 'Productivity Tool',
        image: 'https://placehold.co/600x400', // Placeholder
        description: 'Drag-and-drop task management dashboard inspired by Trello.',
        tech: ['Next.js', 'Firebase', 'DnD'],
        links: { live: '#', github: '#' }
    },
    {
        title: 'Portfolio v1',
        category: 'Personal Brand',
        image: 'https://placehold.co/600x400', // Placeholder
        description: 'Minimalist portfolio showcasing early web development work.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        links: { live: '#', github: '#' }
    }
];

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.utils.toArray('.project-card').forEach((card, i) => {
            gsap.fromTo(card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                    }
                }
            );
        });
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="py-20 md:py-32 bg-luxury-black relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-luxury-gold text-lg uppercase tracking-widest mb-2">Featured Work</h2>
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-luxury-white">
                            Selected <span className="text-luxury-gold">Projects</span>
                        </h3>
                    </div>
                    <a href="#" className="hidden md:block text-luxury-sand hover:text-luxury-gold transition-colors pb-2 border-b border-luxury-gold/30 hover:border-luxury-gold">
                        View All Projects
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card group relative bg-luxury-espresso overflow-hidden border border-luxury-gold/5 hover:border-luxury-gold/50 transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 md:h-80 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-luxury-black/50 group-hover:bg-luxury-black/20 transition-all duration-500"></div>

                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                    <a href={project.links.github} className="p-3 bg-luxury-black text-luxury-gold rounded-full hover:bg-luxury-gold hover:text-luxury-black transition-colors">
                                        <FaGithub size={20} />
                                    </a>
                                    <a href={project.links.live} className="p-3 bg-luxury-black text-luxury-gold rounded-full hover:bg-luxury-gold hover:text-luxury-black transition-colors">
                                        <FaExternalLinkAlt size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                <span className="text-luxury-gold text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
                                <h4 className="text-2xl font-heading font-bold text-luxury-white mb-3">{project.title}</h4>
                                <p className="text-luxury-sand/70 text-sm mb-6 line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1 bg-luxury-black/50 text-luxury-sand text-xs border border-luxury-gold/10 rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="text-luxury-sand hover:text-luxury-gold transition-colors pb-1 border-b border-luxury-gold/30">
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
