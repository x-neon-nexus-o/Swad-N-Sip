import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiCoffee, FiPhone } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = ['Home', 'Our Menu', 'Specials', 'Gallery', 'About', 'Reviews', 'Visit Us', 'Contact'];

    const scrollToSection = (sectionId) => {
        const sectionMap = {
            'Home': 'home',
            'Our Menu': 'menu',
            'Specials': 'specials',
            'Gallery': 'gallery',
            'About': 'about',
            'Reviews': 'reviews',
            'Visit Us': 'visit-us',
            'Contact': 'contact'
        };

        const element = document.getElementById(sectionMap[sectionId]);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-100/95 backdrop-blur-md shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={() => scrollToSection('Home')}
                    >
                        <FiCoffee className="text-3xl text-coffee-600" />
                        <span className="text-2xl font-heading font-bold text-coffee-800">
                            Swad N Sip
                        </span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item, index) => (
                            <motion.button
                                key={item}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => scrollToSection(item)}
                                className="text-coffee-700 hover:text-coffee-900 font-medium transition-colors"
                            >
                                {item}
                            </motion.button>
                        ))}
                        <motion.a
                            href="tel:+919876543210"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                            className="bg-coffee-600 text-white px-6 py-2 rounded-full hover:bg-coffee-700 transform hover:scale-105 transition-all shadow-lg flex items-center gap-2"
                        >
                            <FiPhone />
                            Call Us
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-coffee-700 hover:text-coffee-900 focus:outline-none"
                        >
                            {isOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-cream-50 border-t border-coffee-200"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {menuItems.map((item) => (
                                <motion.button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    whileHover={{ x: 10 }}
                                    className="block w-full text-left text-coffee-700 hover:text-coffee-900 font-medium py-2"
                                >
                                    {item}
                                </motion.button>
                            ))}
                            <a
                                href="tel:+919876543210"
                                className="w-full bg-coffee-600 text-white px-6 py-3 rounded-full hover:bg-coffee-700 transition-all shadow-lg flex items-center justify-center gap-2"
                            >
                                <FiPhone />
                                Call Us
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
