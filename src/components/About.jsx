import { motion } from 'framer-motion';
import { cafeFeatures } from '../data';
import { FiCoffee, FiAward, FiHeart } from 'react-icons/fi';

const About = () => {
    const icons = [FiCoffee, FiAward, FiHeart];

    return (
        <section id="about" className="py-20 bg-gradient-to-br from-cream-100 to-cream-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop"
                                alt="Café Interior"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/30 to-transparent"></div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-peach rounded-full blur-3xl opacity-50"></div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-heading font-bold text-coffee-800 mb-6">
                            About Swad N Sip
                        </h2>

                        <p className="text-lg text-coffee-700 mb-6 leading-relaxed">
                            Welcome to Swad N Sip, where every cup tells a story and every bite brings joy.
                            We're passionate about crafting the perfect café experience for you.
                        </p>

                        <p className="text-lg text-coffee-700 mb-8 leading-relaxed">
                            From our carefully selected coffee beans to our handcrafted treats, we believe
                            in quality over everything. Our cozy space is designed to be your perfect hangout
                            spot – whether you're studying, working, or catching up with friends.
                        </p>

                        {/* Features */}
                        <div className="space-y-6">
                            {cafeFeatures.map((feature, index) => {
                                const Icon = icons[index];
                                return (
                                    <motion.div
                                        key={feature.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-coffee-600 rounded-full flex items-center justify-center">
                                            <Icon className="text-2xl text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-heading font-bold text-coffee-800 mb-1">
                                                {feature.title}
                                            </h3>
                                            <p className="text-coffee-600">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
