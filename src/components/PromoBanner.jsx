import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiInfo } from 'react-icons/fi';

const PromoBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                exit={{ y: -100 }}
                className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-coffee-600 to-coffee-700 text-white py-3 px-4 shadow-lg"
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1 justify-center">
                        <FiInfo className="text-2xl text-accent-mint" />
                        <p className="text-sm md:text-base font-semibold">
                            ☕ Visit us daily! Mon-Sun: 9:00 AM - 10:00 PM | Fresh coffee & snacks all day!
                        </p>
                    </div>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="ml-4 hover:bg-white/20 p-1 rounded-full transition-colors"
                    >
                        <FiX className="text-xl" />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PromoBanner;
