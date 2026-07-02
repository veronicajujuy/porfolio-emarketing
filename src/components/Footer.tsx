/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Instagram, Facebook, ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  const currentYear = 2026;

  return (
    <footer className="bg-stone-950 border-t border-stone-900 py-12 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Profile identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-6 w-6 rounded-full bg-emerald-600 flex items-center justify-center text-white font-display font-bold text-xs">
              V
            </div>
            <span className="font-display font-bold text-sm text-stone-100 tracking-tight">
              Verónica Ramos
            </span>
          </div>
          <p className="text-[11px] text-stone-500 font-mono">
            Especialista en Marketing Digital y Copywriting para el NOA
          </p>
        </div>

        {/* Middle quick stats / links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-stone-400">
          <span className="hover:text-stone-200 transition-colors">Estrategia</span>
          <span>•</span>
          <span className="hover:text-stone-200 transition-colors">Copywriting Humano</span>
          <span>•</span>
          <span className="hover:text-stone-200 transition-colors">Meta Ads Local</span>
        </div>

        {/* Social channels / actions */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:veronica.jujuy@gmail.com"
            title="Enviar mail a Verónica"
            className="h-9 w-9 rounded-full bg-stone-900 hover:bg-stone-850 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-emerald-400 transition-all"
          >
            <Mail className="h-4 w-4" />
          </a>
          
          <button
            id="footer-scroll-to-top"
            onClick={onScrollToTop}
            title="Volver arriba"
            className="h-9 w-9 rounded-full bg-stone-900 hover:bg-stone-850 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-emerald-400 transition-all"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

      </div>

      {/* Under copyright */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-stone-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[10px] text-stone-600 font-mono text-center sm:text-left">
          &copy; {currentYear} Verónica Ramos. Todos los derechos reservados. Jujuy, Argentina.
        </span>
        <span className="text-[10px] text-stone-600 flex items-center gap-1">
          Hecho con <Heart className="h-3 w-3 text-red-500 fill-current animate-pulse" /> para marcas con Raíces reales.
        </span>
      </div>
    </footer>
  );
}
