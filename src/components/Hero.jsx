import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <div className="absolute inset-0 z-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
                <img
                    src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920&h=1080&fit=crop"
                    alt="Café Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-coffee-900/80 via-coffee-800/70 to-coffee-700/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Open Now Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block mb-6"
                >
                    <span className="bg-accent-mint text-coffee-900 px-6 py-2 rounded-full text-sm font-semibold animate-pulse-slow shadow-lg">
                        ☕ Open Now - Since 2025
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
                >
                    Swad N Sip
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl sm:text-2xl lg:text-3xl font-heading text-cream-100 mb-4"
                >
                    Taste the Joy in Every Sip & Bite
                </motion.p>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg sm:text-xl text-cream-200 mb-12 max-w-3xl mx-auto"
                >
                    Experience the finest coffee, refreshing beverages, delicious ice creams, and tasty snacks in our cozy café atmosphere
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('menu')}
                        className="bg-coffee-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 shadow-2xl hover:bg-coffee-700 transition-all"
                    >
                        Explore Menu
                        <FiArrowRight className="text-xl" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('visit-us')}
                        className="bg-white text-coffee-800 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:bg-cream-100 transition-all"
                    >
                        Visit Us
                    </motion.button>
                </motion.div>

                {/* Decorative Coffee Cup Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-16 inline-block"
                >
                    <div className="text-8xl">☕</div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
                >
                    <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
