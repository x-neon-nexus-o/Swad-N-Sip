import { motion } from 'framer-motion';
import { specialItems } from '../data';
import { FiStar } from 'react-icons/fi';

const Specials = () => {
    return (
        <section id="specials" className="py-20 bg-coffee-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
                        Today's Specials
                    </h2>
                    <p className="text-lg text-cream-200 max-w-2xl mx-auto">
                        Handpicked favorites that our customers absolutely love
                    </p>
                </motion.div>

                {/* Specials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specialItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="relative bg-gradient-to-br from-cream-100 to-cream-200 rounded-3xl overflow-hidden shadow-2xl group"
                        >
                            {/* Badge */}
                            <div className="absolute top-4 right-4 z-10">
                                <span className="bg-coffee-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                                    <FiStar className="fill-yellow-300 text-yellow-300" />
                                    {item.badge}
                                </span>
                            </div>

                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/50 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 text-coffee-900">
                                <h3 className="text-2xl font-heading font-bold mb-3">
                                    {item.name}
                                </h3>
                                <p className="text-coffee-700 mb-4">
                                    {item.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-3xl font-bold text-coffee-800">
                                        {item.price}
                                    </span>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-coffee-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-coffee-700 transition-colors shadow-lg"
                                    >
                                        Order Now
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specials;
