/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CaseStudyRaiz from './components/CaseStudyRaiz';
import ToneTester from './components/ToneTester';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset scroll to account for header height
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Set active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'caso-raiz', 'validador', 'contacto'];
      const scrollPosition = window.scrollY + 120; // threshold offset

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="portfolio-app" className="bg-stone-950 min-h-screen text-stone-100 selection:bg-emerald-600 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Decorative background grid line accent */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Navigation Header */}
      <Header onNavClick={handleNavClick} activeSection={activeSection} />

      {/* Main Sections */}
      <main className="relative">
        
        {/* HERO / INICIO & SOBRE MI (metrics nested in Hero) */}
        <Hero 
          onExploreClick={() => handleNavClick('caso-raiz')} 
          onContactClick={() => handleNavClick('contacto')} 
        />

        {/* FEATURED CASE STUDY: RAÍZ */}
        <CaseStudyRaiz />

        {/* INTERACTIVE COPYWRITING / TONE TESTER TOOL */}
        <ToneTester />

        {/* PERSUASIVE CONTACT FORM */}
        <ContactForm />

      </main>

      {/* FOOTER */}
      <Footer onScrollToTop={() => handleNavClick('inicio')} />

    </div>
  );
}
