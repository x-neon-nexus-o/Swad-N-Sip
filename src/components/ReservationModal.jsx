import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCalendar, FiClock, FiUsers, FiCheckCircle } from 'react-icons/fi';

const ReservationModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2'
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
            setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2' });
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-coffee-600 to-coffee-700 text-white p-6 rounded-t-3xl relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 hover:bg-white/20 p-2 rounded-full transition-colors"
                                >
                                    <FiX className="text-2xl" />
                                </button>
                                <h2 className="text-3xl font-heading font-bold mb-2">Reserve a Table</h2>
                                <p className="text-cream-200">Book your spot at Swad N Sip</p>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="text-center py-12"
                                    >
                                        <FiCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                                        <h3 className="text-2xl font-heading font-bold text-coffee-800 mb-2">
                                            Reservation Confirmed!
                                        </h3>
                                        <p className="text-coffee-600">
                                            We've sent a confirmation to your email.
                                        </p>
                                        <p className="text-coffee-600 mt-2">
                                            See you soon! ☕
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name */}
                                        <div>
                                            <label className="block text-coffee-800 font-semibold mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border-2 border-coffee-200 focus:border-coffee-600 focus:outline-none transition-colors"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        {/* Email & Phone */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-coffee-800 font-semibold mb-2">
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-coffee-200 focus:border-coffee-600 focus:outline-none transition-colors"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-coffee-800 font-semibold mb-2">
                                                    Phone *
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-coffee-200 focus:border-coffee-600 focus:outline-none transition-colors"
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>
                                        </div>

                                        {/* Date & Time */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-coffee-800 font-semibold mb-2 flex items-center gap-2">
                                                    <FiCalendar /> Date *
                                                </label>
                                                <input
                                                    type="date"
                                                    name="date"
                                                    value={formData.date}
                                                    onChange={handleChange}
                                                    required
                                                    min={new Date().toISOString().split('T')[0]}
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-coffee-200 focus:border-coffee-600 focus:outline-none transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-coffee-800 font-semibold mb-2 flex items-center gap-2">
                                                    <FiClock /> Time *
                                                </label>
                                                <input
                                                    type="time"
                                                    name="time"
                                                    value={formData.time}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-coffee-200 focus:border-coffee-600 focus:outline-none transition-colors"
                                                />
                                            </div>
                                        </div>

                                        {/* Number of Guests */}
                                        <div>
                                            <label className="block text-coffee-800 font-semibold mb-2 flex items-center gap-2">
                                                <FiUsers /> Number of Guests *
                                            </label>
                                            <select
                                                name="guests"
                                                value={formData.guests}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border-2 border-coffee-200 focus:border-coffee-600 focus:outline-none transition-colors"
                                            >
                                                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                                    <option key={num} value={num}>
                                                        {num} {num === 1 ? 'Guest' : 'Guests'}
                                                    </option>
                                                ))}
                                                <option value="9+">9+ Guests</option>
                                            </select>
                                        </div>

                                        {/* Submit Button */}
                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full bg-gradient-to-r from-coffee-600 to-coffee-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                                        >
                                            Confirm Reservation
                                        </motion.button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ReservationModal;
