import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const subTextRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(textRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
        )
            .fromTo(subTextRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
                "-=1"
            )
            .fromTo(ctaRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                "-=0.5"
            );

    }, []);

    return (
        <section
            id="hero"
            ref={heroRef}
            className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden pt-20"
        >
            {/* Background Gradient/Effects (Optional) */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-espresso/30 to-luxury-black z-0 pointer-events-none"></div>

            {/* Content */}
            <div className="z-10 px-4">
                <h2
                    ref={subTextRef}
                    className="text-luxury-gold text-lg md:text-xl uppercase tracking-[0.3em] mb-3"
                >
                    MERN + AI/ML Developer
                </h2>

                <h1
                    ref={textRef}
                    className="text-5xl md:text-7xl lg:text-9xl font-heading font-bold text-luxury-white mb-4 leading-tight"
                >
                    <span className="block">REHAN</span>
                    <span className="block text-gradient-gold">AHMAD</span>
                </h1>

                <p className="text-luxury-sand/80 max-w-2xl mx-auto text-lg md:text-xl mb-8 font-body">
                    Building modern digital experiences with code, creativity, and AI.
                </p>

                <div ref={ctaRef} className="flex flex-col md:flex-row gap-6 justify-center">
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-luxury-gold text-luxury-black font-button font-semibold rounded-none hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(198,166,103,0.3)]"
                    >
                        HIRE ME
                    </a>
                    <a
                        href="/cv.pdf"
                        target="_blank"
                        className="px-8 py-4 border border-luxury-gold text-luxury-gold font-button font-semibold rounded-none hover:bg-luxury-gold hover:text-black transition-all duration-300"
                    >
                        DOWNLOAD CV
                    </a>
                </div>
            </div>

            {/* Abstract Shapes/Parallax Elements could go here */}

        </section>
    );
};

export default Hero;
