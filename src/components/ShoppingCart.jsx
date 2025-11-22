import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiX, FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';

const ShoppingCart = ({ cart, setCart }) => {
    const [isOpen, setIsOpen] = useState(false);

    const getTotalItems = () => {
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((sum, item) => {
            const price = parseInt(item.price.replace('₹', ''));
            return sum + (price * item.quantity);
        }, 0);
    };

    const updateQuantity = (itemId, change) => {
        setCart(cart.map(item => {
            if (item.id === itemId) {
                const newQuantity = item.quantity + change;
                return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
            }
            return item;
        }));
    };

    const removeItem = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <>
            {/* Floating Cart Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-24 right-8 bg-coffee-600 text-white p-4 rounded-full shadow-2xl hover:bg-coffee-700 transition-colors z-40"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FiShoppingCart className="text-2xl" />
                {getTotalItems() > 0 && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    >
                        {getTotalItems()}
                    </motion.span>
                )}
            </motion.button>

            {/* Cart Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-50"
                        />

                        {/* Cart Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 overflow-hidden flex flex-col"
                        >
                            {/* Header */}
                            <div className="bg-coffee-600 text-white p-6 flex justify-between items-center">
                                <h2 className="text-2xl font-heading font-bold">Your Cart</h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="hover:bg-white/20 p-2 rounded-full transition-colors"
                                >
                                    <FiX className="text-2xl" />
                                </button>
                            </div>

                            {/* Cart Items */}
                            <div className="flex-1 overflow-y-auto p-6">
                                {cart.length === 0 ? (
                                    <div className="text-center py-12">
                                        <FiShoppingCart className="text-6xl text-coffee-300 mx-auto mb-4" />
                                        <p className="text-coffee-600 text-lg">Your cart is empty</p>
                                        <p className="text-coffee-500 text-sm mt-2">Add some delicious items!</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {cart.map((item) => (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, x: -100 }}
                                                className="bg-cream-50 rounded-xl p-4 flex gap-4"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-20 h-20 object-cover rounded-lg"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="font-heading font-bold text-coffee-800 mb-1">
                                                        {item.name}
                                                    </h3>
                                                    <p className="text-coffee-600 font-semibold mb-2">
                                                        {item.price}
                                                    </p>
                                                    <div className="flex items-center gap-3">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, -1)}
                                                            className="bg-coffee-600 text-white w-7 h-7 rounded-full flex items-center justify-center hover:bg-coffee-700"
                                                        >
                                                            <FiMinus className="text-sm" />
                                                        </button>
                                                        <span className="font-semibold text-coffee-800 w-6 text-center">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, 1)}
                                                            className="bg-coffee-600 text-white w-7 h-7 rounded-full flex items-center justify-center hover:bg-coffee-700"
                                                        >
                                                            <FiPlus className="text-sm" />
                                                        </button>
                                                        <button
                                                            onClick={() => removeItem(item.id)}
                                                            className="ml-auto text-red-500 hover:text-red-700 p-2"
                                                        >
                                                            <FiTrash2 />
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            {cart.length > 0 && (
                                <div className="border-t border-coffee-200 p-6 bg-cream-50">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-semibold text-coffee-800">Total:</span>
                                        <span className="text-2xl font-bold text-coffee-700">
                                            ₹{getTotalPrice()}
                                        </span>
                                    </div>
                                    <button className="w-full bg-coffee-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-coffee-700 transition-colors mb-3">
                                        Proceed to Checkout
                                    </button>
                                    <button
                                        onClick={clearCart}
                                        className="w-full bg-white border-2 border-coffee-600 text-coffee-600 py-3 rounded-xl font-semibold hover:bg-coffee-50 transition-colors"
                                    >
                                        Clear Cart
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default ShoppingCart;
