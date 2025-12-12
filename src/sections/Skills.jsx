import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'React.js', level: 95 },
    { name: 'Node.js & Express', level: 95 },
    { name: 'MongoDB', level: 80 },
    { name: 'Tailwind CSS', level: 75 },
    { name: 'Next Js', level: 90 },
    { name: 'Python', level: 50 },
    { name: 'AI/ML Basics', level: 30 },
];

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const bars = gsap.utils.toArray('.skill-bar');

        bars.forEach(bar => {
            gsap.fromTo(bar,
                { width: '0%' },
                {
                    width: bar.dataset.width,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: bar,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse',
                    }
                }
            );
        });

    }, []);

    return (
        <section id="skills" ref={sectionRef} className="py-20 md:py-32 bg-luxury-black relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="text-center mb-16">
                    <h2 className="text-luxury-gold text-lg uppercase tracking-widest mb-2">My Expertise</h2>
                    <h3 className="text-3xl md:text-5xl font-heading font-bold text-luxury-white">
                        Technical <span className="text-luxury-gold">Skills</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
                    {skillsData.map((skill) => (
                        <div key={skill.name} className="relative">
                            <div className="flex justify-between mb-2">
                                <span className="text-luxury-sand font-medium uppercase tracking-wider text-sm">{skill.name}</span>
                                <span className="text-luxury-gold font-bold">{skill.level}%</span>
                            </div>
                            <div className="w-full h-2 bg-luxury-espresso rounded-full overflow-hidden">
                                <div
                                    className="skill-bar h-full bg-gradient-to-r from-luxury-gold to-yellow-600 rounded-full"
                                    data-width={`${skill.level}%`}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
