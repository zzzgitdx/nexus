import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, Hexagon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '产品与方案', path: '/products' },
    { name: '客户案例', path: '/cases' },
    { name: '关于我们', path: '/about' },
    { name: '合作共赢', path: '/contact' },
  ];

  const isSolid = isScrolled || isMobileMenuOpen;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isSolid ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-slate-200/50 dark:border-slate-800/50 shadow-sm py-3' : 'bg-transparent border-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <Hexagon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:rotate-90 transition-transform duration-500" />
          <span className="text-xl font-bold tracking-tight">智联科技 <span className="text-blue-600 dark:text-blue-400">Nexus</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm font-medium transition-colors ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400'}`}
              >
                {link.name}
              </Link>
            );
          })}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle Theme">
            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600 dark:text-slate-300">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden mt-3"
          >
            <div className="px-4 pt-4 pb-2 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
