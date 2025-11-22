import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuItem from './MenuItem';
import { menuItems } from '../data';

const Menu = () => {
    const categories = ['All', 'Coffee', 'Beverages', 'Ice Cream', 'Snacks'];
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredItems = activeCategory === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <section id="menu" className="py-20 bg-gradient-to-b from-cream-50 to-cream-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-coffee-800 mb-4">
                        Our Menu
                    </h2>
                    <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
                        Explore our delightful selection of coffee, beverages, ice creams, and snacks
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${activeCategory === category
                                    ? 'bg-coffee-600 text-white shadow-lg scale-105'
                                    : 'bg-white text-coffee-700 hover:bg-coffee-100 shadow-md'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Menu Items Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredItems.map((item, index) => (
                            <MenuItem key={item.id} item={item} index={index} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Item Count */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mt-8 text-coffee-600"
                >
                    Showing {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
                </motion.p>
            </div>
        </section>
    );
};

export default Menu;
