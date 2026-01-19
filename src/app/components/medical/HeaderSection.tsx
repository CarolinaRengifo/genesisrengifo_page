import { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function HeaderSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Inicio', href: '#' },
    { label: 'Servicios', href: '#services' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <img src='../images/Logo.png' className="w-20 h-15 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-900">Dra. Génesis Rengifo</h1>
              <p className="text-xs text-gray-600">Cardiología</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-sky-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Reservar cita
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <nav className="px-6 py-4 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-gray-700 hover:text-sky-600 font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-semibold transition-all mt-4"
              >
                Reservar cita
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
