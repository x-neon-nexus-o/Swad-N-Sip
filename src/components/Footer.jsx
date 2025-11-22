import { motion } from 'framer-motion';
import { businessInfo } from '../data';
import { FiCoffee, FiInstagram, FiFacebook, FiTwitter, FiHeart } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const quickLinks = [
        { name: 'Home', id: 'home' },
        { name: 'Menu', id: 'menu' },
        { name: 'Specials', id: 'specials' },
        { name: 'Gallery', id: 'gallery' },
        { name: 'About', id: 'about' },
        { name: 'Reviews', id: 'reviews' },
        { name: 'Visit Us', id: 'visit-us' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <footer className="bg-coffee-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <FiCoffee className="text-3xl text-accent-peach" />
                            <span className="text-2xl font-heading font-bold">
                                {businessInfo.name}
                            </span>
                        </div>
                        <p className="text-cream-200 mb-4 italic">
                            "{businessInfo.tagline}"
                        </p>
                        <p className="text-cream-300 text-sm">
                            Experience the perfect blend of taste and ambience.
                            Your daily dose of happiness in every cup and bite.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-heading font-bold mb-4">Quick Links</h3>
                        <ul className="grid grid-cols-2 gap-2">
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-cream-200 hover:text-accent-peach transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact & Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-heading font-bold mb-4">Connect With Us</h3>
                        <div className="space-y-2 mb-6 text-cream-200">
                            <p>{businessInfo.phone}</p>
                            <p>{businessInfo.email}</p>
                        </div>

                        {/* Social Media */}
                        <div className="flex gap-4">
                            <a
                                href={businessInfo.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-coffee-800 rounded-full flex items-center justify-center hover:bg-accent-peach hover:text-coffee-900 transition-all transform hover:scale-110"
                            >
                                <FiInstagram className="text-xl" />
                            </a>
                            <a
                                href={businessInfo.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-coffee-800 rounded-full flex items-center justify-center hover:bg-accent-peach hover:text-coffee-900 transition-all transform hover:scale-110"
                            >
                                <FiFacebook className="text-xl" />
                            </a>
                            <a
                                href={businessInfo.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-coffee-800 rounded-full flex items-center justify-center hover:bg-accent-peach hover:text-coffee-900 transition-all transform hover:scale-110"
                            >
                                <FiTwitter className="text-xl" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="border-t border-coffee-800 pt-8 text-center text-cream-300"
                >
                    <p className="flex items-center justify-center gap-2 flex-wrap">
                        © {currentYear} {businessInfo.name}. All rights reserved. Made with
                        <FiHeart className="text-red-500 fill-red-500" />
                        for coffee lovers.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
