import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiHeart } from 'react-icons/fi';

const MenuItem = ({ item, index, onAddToCart }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />

                {/* Favorite Button */}
                <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all"
                >
                    <FiHeart
                        className={`text-xl ${isFavorite ? 'fill-red-500 text-red-500' : 'text-coffee-600'
                            } transition-colors`}
                    />
                </button>

                {/* Tags */}
                <div className="absolute top-3 left-3 flex gap-2">
                    {item.tags.map((tag) => (
                        <span
                            key={tag}
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${tag === 'Hot'
                                    ? 'bg-red-500 text-white'
                                    : tag === 'Cold'
                                        ? 'bg-blue-500 text-white'
                                        : tag === 'New'
                                            ? 'bg-green-500 text-white'
                                            : 'bg-accent-peach text-coffee-900'
                                }`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-xl font-heading font-bold text-coffee-800 mb-2">
                    {item.name}
                </h3>
                <p className="text-coffee-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                </p>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-coffee-700">{item.price}</span>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onAddToCart(item)}
                        className="bg-coffee-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-coffee-700 transition-colors"
                    >
                        Add to Cart
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default MenuItem;
