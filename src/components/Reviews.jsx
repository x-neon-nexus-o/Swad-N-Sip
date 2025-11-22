import { motion } from 'framer-motion';
import { reviews } from '../data';
import { FiStar } from 'react-icons/fi';

const Reviews = () => {
    return (
        <section id="reviews" className="py-20 bg-gradient-to-b from-coffee-50 to-cream-100">
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
                        What Our Customers Say
                    </h2>
                    <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
                        Don't just take our word for it – hear from our happy customers
                    </p>
                </motion.div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
                        >
                            {/* Avatar and Rating */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-coffee-500 to-coffee-700 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                    {review.initials}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-heading font-bold text-coffee-800 text-lg">
                                        {review.name}
                                    </h3>
                                    <div className="flex gap-1">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <FiStar
                                                key={i}
                                                className="text-yellow-500 fill-yellow-500 text-sm"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Review Text */}
                            <p className="text-coffee-700 leading-relaxed">
                                "{review.review}"
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Overall Rating */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 text-center bg-coffee-600 text-white rounded-3xl p-8 shadow-xl"
                >
                    <div className="text-5xl font-bold mb-2">4.9/5</div>
                    <div className="flex justify-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <FiStar
                                key={i}
                                className="text-yellow-300 fill-yellow-300 text-2xl"
                            />
                        ))}
                    </div>
                    <p className="text-cream-100 text-lg">
                        Based on 500+ customer reviews
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Reviews;
