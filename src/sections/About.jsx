import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    const expRef = useRef(null);
    const projRef = useRef(null);
    const dedicRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 90%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
            },
        });

        tl.fromTo(leftRef.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
        )
            .fromTo(rightRef.current,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
                "-=0.5"
            );

        // Counter Animations
        const animateCounter = (ref, endValue, suffix = "") => {
            const obj = { val: 0 };
            gsap.to(obj, {
                val: endValue,
                duration: 2.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                },
                onUpdate: () => {
                    if (ref.current) {
                        ref.current.innerText = Math.floor(obj.val) + suffix;
                    }
                }
            });
        };

        animateCounter(expRef, 2, "+");
        animateCounter(projRef, 20, "+");
        animateCounter(dedicRef, 100, "%");

    }, []);

    return (
        <section id="about" ref={containerRef} className="py-20 md:py-32 bg-luxury-espresso relative overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                {/* Left Side: Image/Visual */}
                <div ref={leftRef} className="w-full md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-luxury-gold p-2">
                        <div className="w-full h-full rounded-full bg-luxury-black overflow-hidden relative group">
                            {/* Placeholder for Profile Image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-luxury-black to-luxury-espresso flex items-center justify-center text-luxury-gold/20 font-heading text-9xl">
                                R
                            </div>
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-luxury-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        {/* Decorative Orbit */}
                        <div className="absolute -inset-4 border border-luxury-gold/20 rounded-full animate-spin-slow"></div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div ref={rightRef} className="w-full md:w-1/2">
                    <h2 className="text-luxury-gold text-lg uppercase tracking-widest mb-2">About Me</h2>
                    <h3 className="text-3xl md:text-5xl font-heading font-bold text-luxury-white mb-6">
                        Crafting Digital <span className="text-luxury-gold italic">Masterpieces</span>
                    </h3>
                    <p className="text-luxury-sand/80 text-lg mb-6 leading-relaxed">
                        I am a passionate MERN stack developer and AI/ML enthusiast dedicated to building seamless, premium web experiences. With a keen eye for design and a strong command of modern technologies, I bridge the gap between aesthetics and functionality.
                    </p>

                    <div className="grid grid-cols-3 gap-6 mt-8 border-t border-luxury-gold/20 pt-8">
                        <div className="text-center">
                            <span ref={expRef} className="block text-4xl font-heading font-bold text-luxury-gold">0+</span>
                            <span className="text-xs uppercase tracking-widest text-luxury-sand/60">Years Exp</span>
                        </div>
                        <div className="text-center">
                            <span ref={projRef} className="block text-4xl font-heading font-bold text-luxury-gold">0+</span>
                            <span className="text-xs uppercase tracking-widest text-luxury-sand/60">Projects</span>
                        </div>
                        <div className="text-center">
                            <span ref={dedicRef} className="block text-4xl font-heading font-bold text-luxury-gold">0%</span>
                            <span className="text-xs uppercase tracking-widest text-luxury-sand/60">Dedication</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
