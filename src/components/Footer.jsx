import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-8 bg-luxury-espresso border-t border-luxury-gold/10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-luxury-sand/60 text-sm">
                    &copy; {new Date().getFullYear()} Rehan Ahmad. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-luxury-sand/60 text-sm">
                    <span>Designed & Built with</span>
                    <FaHeart className="text-red-500" />
                    <span>and</span>
                    <span className="text-luxury-gold">Creativity</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
