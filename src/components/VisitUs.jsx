import { motion } from 'framer-motion';
import { businessInfo } from '../data';
import { FiMapPin, FiClock, FiPhone, FiMail } from 'react-icons/fi';

const VisitUs = () => {
    return (
        <section id="visit-us" className="py-20 bg-cream-50">
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
                        Visit Us
                    </h2>
                    <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
                        We'd love to see you! Drop by for a cup of joy
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        {/* Address */}
                        <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex-shrink-0 w-12 h-12 bg-coffee-600 rounded-full flex items-center justify-center">
                                <FiMapPin className="text-2xl text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-bold text-coffee-800 mb-2">
                                    Address
                                </h3>
                                <p className="text-coffee-600">
                                    {businessInfo.address}
                                </p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex-shrink-0 w-12 h-12 bg-coffee-600 rounded-full flex items-center justify-center">
                                <FiClock className="text-2xl text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-bold text-coffee-800 mb-2">
                                    Opening Hours
                                </h3>
                                <p className="text-coffee-600">
                                    <span className="font-semibold">Mon - Fri:</span> {businessInfo.hours.weekdays}
                                </p>
                                <p className="text-coffee-600">
                                    <span className="font-semibold">Sat - Sun:</span> {businessInfo.hours.weekends}
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex-shrink-0 w-12 h-12 bg-coffee-600 rounded-full flex items-center justify-center">
                                <FiPhone className="text-2xl text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-bold text-coffee-800 mb-2">
                                    Phone
                                </h3>
                                <p className="text-coffee-600">
                                    {businessInfo.phone}
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex-shrink-0 w-12 h-12 bg-coffee-600 rounded-full flex items-center justify-center">
                                <FiMail className="text-2xl text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-bold text-coffee-800 mb-2">
                                    Email
                                </h3>
                                <p className="text-coffee-600">
                                    {businessInfo.email}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden h-[500px]"
                    >
                        <div className="w-full h-full bg-gradient-to-br from-coffee-200 to-coffee-300 flex items-center justify-center">
                            <div className="text-center p-8">
                                <FiMapPin className="text-6xl text-coffee-600 mx-auto mb-4" />
                                <h3 className="text-2xl font-heading font-bold text-coffee-800 mb-2">
                                    Map View
                                </h3>
                                <p className="text-coffee-600">
                                    Interactive map will be embedded here
                                </p>
                                <p className="text-sm text-coffee-500 mt-2">
                                    (Google Maps / Leaflet integration)
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VisitUs;
