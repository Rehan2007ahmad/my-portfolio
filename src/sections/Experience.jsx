import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
    {
        year: '2023 - Present',
        title: 'Freelance MERN Developer',
        company: 'Self-Employed',
        description: 'Developing full-stack web applications for international clients. Focusing on React, Node.js, and modern UI/UX design.',
    },
    {
        year: '2022 - 2023',
        title: 'Web Development Intern',
        company: 'Tech Solutions Inc.',
        description: 'Collaborated with senior developers to build and maintain responsive websites. Learned agile methodologies and version control.',
    },
    {
        year: '2021 - 2022',
        title: 'Computer Science Student',
        company: 'University of Engineering',
        description: 'Started my journey into programming. Learned C++, Python, and Data Structures. built first personal projects.',
    }
];

const Experience = () => {
    useEffect(() => {
        gsap.utils.toArray('.timeline-item').forEach((item, i) => {
            gsap.fromTo(item,
                { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }, []);

    return (
        <section id="experience" className="py-20 md:py-32 bg-luxury-espresso relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-luxury-gold text-lg uppercase tracking-widest mb-2">My Journey</h2>
                    <h3 className="text-3xl md:text-5xl font-heading font-bold text-luxury-white">
                        Experience & <span className="text-luxury-gold">Education</span>
                    </h3>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Line (Desktop) / Left Line (Mobile) */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-luxury-gold/20"></div>

                    {experienceData.map((exp, index) => (
                        <div key={index} className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Mobile Node (Visible only on mobile) */}
                            <div className="absolute left-4 transform -translate-x-1/2 w-4 h-4 rounded-full bg-luxury-gold border-4 border-luxury-espresso shadow-[0_0_10px_#C6A667] md:hidden mt-1.5"></div>

                            {/* Content */}
                            <div className="w-full pl-12 md:pl-0 md:w-5/12">
                                <div className={`p-6 border border-luxury-gold/10 bg-luxury-black/40 backdrop-blur-sm hover:border-luxury-gold/50 transition-all duration-300 relative ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-left`}>
                                    {/* Desktop Arrow/Connector could go here */}
                                    <span className="text-luxury-gold text-sm font-bold uppercase tracking-wider block mb-2">{exp.year}</span>
                                    <h4 className="text-xl font-heading font-bold text-luxury-white mb-1">{exp.title}</h4>
                                    <p className="text-sm text-luxury-sand/60 mb-3 italic">{exp.company}</p>
                                    <p className="text-luxury-sand/80 text-sm leading-relaxed">{exp.description}</p>
                                </div>
                            </div>

                            {/* Desktop Node (Visible only on desktop) */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-luxury-gold border-4 border-luxury-espresso shadow-[0_0_10px_#C6A667] hidden md:block"></div>

                            {/* Empty side for spacing (Desktop only) */}
                            <div className="w-full md:w-5/12 hidden md:block"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
