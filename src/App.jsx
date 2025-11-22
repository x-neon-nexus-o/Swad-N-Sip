import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
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

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

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

  return (
    <div className="App">
      <PromoBanner />
      <Navbar />
      <Hero />
      <Menu />
      <Specials />
      <Gallery />
      <About />
      <Reviews />
      <VisitUs />
      <ContactForm />
      <Footer />

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
