/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Menu, X, Sparkles, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavClick, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'caso-raiz', label: 'Caso: Raíz' },
    { id: 'validador', label: 'Validador de Tono' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-900/90 backdrop-blur-md py-4 border-b border-stone-800 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-display font-bold text-lg shadow-md shadow-emerald-900/30">
            V
          </div>
          <div>
            <span className="font-display font-bold text-lg text-stone-100 tracking-tight block leading-none">
              Verónica
            </span>
            <span className="text-[10px] text-emerald-400 font-mono tracking-wider uppercase">
              Digital Marketing
            </span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-stone-950/40 p-1 rounded-full border border-stone-800/60">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-btn-${item.id}`}
              onClick={() => onNavClick(item.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                activeSection === item.id
                  ? 'bg-emerald-600 text-stone-100 shadow-sm'
                  : 'text-stone-400 hover:text-stone-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="header-cta"
            onClick={() => onNavClick('contacto')}
            className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium text-xs px-4 py-2.5 rounded-full transition-all shadow-md shadow-emerald-950/50"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Trabajemos Juntos
            <ArrowUpRight className="h-3.5 w-3.5" />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-stone-300 hover:text-stone-100 p-1"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-stone-950 border-b border-stone-800 py-6 px-6 flex flex-col gap-4 shadow-xl"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-btn-${item.id}`}
              onClick={() => {
                onNavClick(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`text-left py-2 border-b border-stone-900 text-sm font-medium transition-all ${
                activeSection === item.id ? 'text-emerald-400 pl-2' : 'text-stone-400'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            id="mobile-header-cta"
            onClick={() => {
              onNavClick('contacto');
              setIsMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm py-3 rounded-xl mt-2 transition-all"
          >
            <MessageSquare className="h-4 w-4" />
            Trabajemos Juntos
          </button>
        </motion.div>
      )}
    </header>
  );
}
