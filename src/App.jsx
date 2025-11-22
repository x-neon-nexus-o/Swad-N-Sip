import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp, FiCalendar } from 'react-icons/fi';
import PromoBanner from './components/PromoBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Specials from './components/Specials';
import Gallery from './components/Gallery';
import About from './components/About';
import Reviews from './components/Reviews';
import VisitUs from './components/VisitUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';
import ReservationModal from './components/ReservationModal';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [cart, setCart] = useState([]);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      // Increase quantity if item exists
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      // Add new item with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="App">
      <PromoBanner />
      <Navbar />
      <Hero />
      <Menu onAddToCart={addToCart} />
      <Specials />
      <Gallery />
      <About />
      <Reviews />
      <VisitUs />
      <ContactForm />
      <Footer />

      {/* Shopping Cart */}
      <ShoppingCart cart={cart} setCart={setCart} />

      {/* Reservation Button */}
      <motion.button
        onClick={() => setIsReservationOpen(true)}
        className="fixed bottom-24 left-8 bg-accent-peach text-coffee-900 p-4 rounded-full shadow-2xl hover:bg-accent-pink transition-colors z-40 hidden md:flex items-center gap-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiCalendar className="text-2xl" />
        <span className="font-semibold pr-2">Reserve</span>
      </motion.button>

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-coffee-600 text-white p-4 rounded-full shadow-2xl hover:bg-coffee-700 transition-colors z-40"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowUp className="text-2xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
