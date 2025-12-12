import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DiCode, DiReact, DiDatabase, DiPython } from 'react-icons/di';
// Using basic icons as placeholders, can upgrade to specific requested ones later if needed.

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: 'MERN Stack Development',
        description: 'Building robust, scalable full-stack applications with MongoDB, Express, React, and Node.js.',
        icon: <DiReact className="text-5xl text-luxury-gold group-hover:text-white transition-colors" />,
    },
    {
        title: 'Website & UI Development',
        description: 'Creating stunning, responsive interfaces with Tailwind CSS and advanced animations.',
        icon: <DiCode className="text-5xl text-luxury-gold group-hover:text-white transition-colors" />,
    },
    {
        title: 'Backend & API Design',
        description: 'Secure and efficient API development for seamless data communication.',
        icon: <DiDatabase className="text-5xl text-luxury-gold group-hover:text-white transition-colors" />,
    },
    {
        title: 'AI/ML Integration',
        description: 'Implementing basic AI/ML features using Python libraries to enhance web functionality.',
        icon: <DiPython className="text-5xl text-luxury-gold group-hover:text-white transition-colors" />,
    },
];

const Services = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo('.service-card',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                }
            }
        );
    }, []);

    return (
        <section id="services" ref={sectionRef} className="py-20 md:py-32 bg-luxury-espresso relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-luxury-gold text-lg uppercase tracking-widest mb-2">What I Offer</h2>
                    <h3 className="text-3xl md:text-5xl font-heading font-bold text-luxury-white">
                        Premium <span className="text-luxury-gold">Services</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card group relative p-8 bg-luxury-black/40 backdrop-blur-sm border border-luxury-gold/10 hover:border-luxury-gold/50 transition-all duration-500 rounded-none hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(198,166,103,0.1)] overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="mb-6">{service.icon}</div>
                                <h4 className="text-xl font-heading font-bold text-luxury-white mb-3 group-hover:text-luxury-gold transition-colors">{service.title}</h4>
                                <p className="text-luxury-sand/70 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
