import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu as MenuIcon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ml' ? 'en' : 'ml');
  };

  const links = [
    { href: '/', id: 'home' },
    { href: '/iron-steel', id: 'ironSteel' },
    { href: '/automotive', id: 'heavyVehicles' },
    { href: '/portfolio', id: 'gallery' },
    { href: '/about', id: 'aboutUs' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-gunmetal/95 backdrop-blur-md shadow-lg py-2' : 'bg-gunmetal py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 shrink-0">
            <img src="/logo.png" alt="Accurate Automation Logo" className="h-12 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold text-white leading-none tracking-wider uppercase">Accurate</span>
              <span className="font-heading text-sm text-safety-orange font-semibold uppercase tracking-[0.2em] leading-none">Automation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={clsx(
                  'text-sm font-semibold uppercase tracking-wider transition-colors duration-200 hover:text-safety-orange',
                  location.pathname === link.href ? 'text-safety-orange' : 'text-gray-300'
                )}
              >
                {t(`nav.${link.id}`)}
              </Link>
            ))}
            
            <button onClick={toggleLang} className="flex items-center text-xs font-bold uppercase tracking-widest bg-gray-800 hover:bg-gray-700 text-white px-3 py-1.5 rounded transition-colors border border-gray-700 hover:border-safety-orange">
              <Globe className="w-4 h-4 mr-2 text-safety-orange" />
              {i18n.language.startsWith('ml') ? 'English' : 'മലയാളം'}
            </button>

            <Link to="/contact" className="btn-primary py-2 px-6 ml-4 text-sm">
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-gunmetal/95 backdrop-blur-md shadow-xl border-t border-gray-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={clsx(
                    'block px-3 py-4 text-base font-bold uppercase tracking-wider border-b border-gray-800',
                    location.pathname === link.href ? 'text-safety-orange' : 'text-gray-300'
                  )}
                >
                  {t(`nav.${link.id}`)}
                </Link>
              ))}
              
              <button onClick={toggleLang} className="w-full flex items-center justify-center text-sm font-bold uppercase tracking-widest bg-gray-800 text-white px-3 py-4 border-b border-gray-700 hover:bg-gray-700 transition-colors">
                <Globe className="w-5 h-5 mr-3 text-safety-orange" />
                {i18n.language.startsWith('ml') ? 'Switch to English' : 'മലയാളത്തിലേക്ക് മാറ്റുക'}
              </button>

              <div className="pt-6">
                <Link to="/contact" className="btn-primary w-full py-3 block text-center">
                  {t('nav.contact')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
