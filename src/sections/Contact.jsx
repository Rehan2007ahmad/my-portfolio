import React, { useRef } from 'react';
import { FaEnvelope, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert("Thank you for your message! I will get back to you soon.");
        formRef.current.reset();
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-luxury-black relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="text-center mb-16">
                    <h2 className="text-luxury-gold text-lg uppercase tracking-widest mb-2">Get In Touch</h2>
                    <h3 className="text-3xl md:text-5xl font-heading font-bold text-luxury-white">
                        Let's Work <span className="text-luxury-gold">Together</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div>
                        <h4 className="text-2xl font-heading font-bold text-luxury-white mb-6">Contact Information</h4>
                        <p className="text-luxury-sand/70 mb-8 leading-relaxed">
                            Have a project in mind or want to collaborate? Feel free to reach out. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="flex flex-col gap-6 mb-10">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 flex items-center justify-center border border-luxury-gold/30 rounded-full text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-black transition-all duration-300">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <span className="block text-sm text-luxury-sand/50 uppercase tracking-wider">Email Me</span>
                                    <a href="mailto:contact@rehanahmad.dev" className="text-lg text-luxury-white hover:text-luxury-gold transition-colors">contact@rehanahmad.dev</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {[FaGithub, FaLinkedinIn, FaTwitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center border border-luxury-gold/30 rounded-full text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm text-luxury-sand/70 uppercase tracking-widest">Name</label>
                                <input type="text" id="name" required className="bg-luxury-espresso/50 border border-luxury-gold/20 p-4 text-luxury-white focus:border-luxury-gold outline-none transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm text-luxury-sand/70 uppercase tracking-widest">Email</label>
                                <input type="email" id="email" required className="bg-luxury-espresso/50 border border-luxury-gold/20 p-4 text-luxury-white focus:border-luxury-gold outline-none transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="subject" className="text-sm text-luxury-sand/70 uppercase tracking-widest">Subject</label>
                            <input type="text" id="subject" required className="bg-luxury-espresso/50 border border-luxury-gold/20 p-4 text-luxury-white focus:border-luxury-gold outline-none transition-colors" placeholder="Project Inquiry" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm text-luxury-sand/70 uppercase tracking-widest">Message</label>
                            <textarea id="message" rows="5" required className="bg-luxury-espresso/50 border border-luxury-gold/20 p-4 text-luxury-white focus:border-luxury-gold outline-none transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                        </div>

                        <button type="submit" className="px-8 py-4 bg-luxury-gold text-luxury-black font-button font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 mt-2">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
