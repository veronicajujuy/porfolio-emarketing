/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { raizBrief, raizCampaignCopies, imageAssets } from '../data';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronRight, 
  Sparkles, 
  FileText, 
  Volume2, 
  Instagram, 
  Facebook, 
  Eye, 
  ShoppingBag,
  Info
} from 'lucide-react';

export default function CaseStudyRaiz() {
  const [activeTab, setActiveTab] = useState<'estrategia' | 'tono' | 'social' | 'identidad'>('estrategia');
  const [selectedCopyId, setSelectedCopyId] = useState<string>('copy-1');
  const [enableCTA, setEnableCTA] = useState<boolean>(false);
  const [socialMockPlatform, setSocialMockPlatform] = useState<'instagram' | 'facebook'>('instagram');

  const selectedCopy = raizCampaignCopies.find(c => c.id === selectedCopyId) || raizCampaignCopies[0];

  const tabs = [
    { id: 'estrategia', label: 'Estrategia & Brief', icon: FileText },
    { id: 'tono', label: 'Tono & Límites', icon: Volume2 },
    { id: 'social', label: 'Copys en Acción (Mockups)', icon: Eye },
    { id: 'identidad', label: 'Paleta & Identidad', icon: Sparkles },
  ] as const;

  // Enhance copy text with call to action based on Verónica's suggestion in the Notion file!
  const getEnhancedCopyText = (text: string) => {
    if (!enableCTA) return text;
    
    if (selectedCopyId === 'copy-1') {
      return text + '\n\n---\n\n📱 *¿Querés olvidarte de cocinar?* Hacé tus consultas o pedidos de la semana por WhatsApp haciendo clic en el link de nuestra biografía.\n\n📦 *¡Entregamos en San Salvador de Jujuy y Palpalá!*';
    } else {
      return text + '\n\n---\n\n📅 *¡Hacé tu pedido hoy!* Tomamos pedidos hasta los jueves para que arranques tu lunes organizado. Mandanos un WhatsApp al link de la bio y te pasamos el menú casero de esta semana.';
    }
  };

  return (
    <section id="caso-raiz" className="py-24 px-6 bg-stone-900 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-stone-950 to-stone-900 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        
        {/* Case Study Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div>
            <span className="text-xs text-emerald-400 font-mono tracking-widest uppercase block mb-2">
              Proyecto Estrella — Caso de Lanzamiento
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-100 tracking-tight">
              Campañas Raíz: Comida Real, Semana Organizada
            </h2>
            <p className="text-stone-400 text-sm max-w-2xl mt-2">
              Branding estratégico, copywriting y planificación de contenidos para una marca jujeña de viandas saludables y meal prep casero.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-stone-950/60 border border-stone-800 p-2.5 rounded-xl font-mono text-[11px] text-stone-400">
            <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 rounded-md font-semibold">Cliente: Raíz Meal Prep</span>
            <span>|</span>
            <span>Ubicación: Jujuy, AR</span>
          </div>
        </div>

        {/* Brand Banner Card */}
        <div className="relative rounded-2xl overflow-hidden mb-12 border border-stone-800 shadow-xl bg-stone-950">
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent z-10" />
          <img
            src="/src/assets/images/raiz_brand_cover_1782999167651.jpg"
            alt="Raiz Meal Prep Banner"
            className="absolute right-0 top-0 w-full lg:w-3/5 h-full object-cover opacity-60 lg:opacity-100 transition-opacity"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000&auto=format&fit=crop&q=80";
            }}
          />
          
          <div className="relative z-20 p-8 sm:p-12 lg:w-1/2 flex flex-col justify-center min-h-[300px]">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs mb-3">
              <span>MEAL PREP & VIANDAS CASERAS</span>
            </div>
            <h3 className="font-display font-extrabold text-4xl text-white tracking-tight mb-2">
              Raíz
            </h3>
            <p className="font-display italic text-amber-100/90 text-lg mb-6 tracking-wide">
              "{raizBrief.tagline}"
            </p>
            <p className="text-stone-300 text-sm leading-relaxed mb-6 max-w-md">
              <strong>La Propuesta de Valor:</strong> {raizBrief.valueProposition}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {raizBrief.channels.map(channel => (
                <span key={channel} className="px-3 py-1 bg-stone-900 border border-stone-800 rounded-md text-xs text-stone-300 font-medium flex items-center gap-1.5">
                  {channel === 'Instagram' ? <Instagram className="h-3.5 w-3.5 text-rose-400" /> : <Facebook className="h-3.5 w-3.5 text-blue-400" />}
                  {channel}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex overflow-x-auto pb-3 mb-8 gap-2 border-b border-stone-800 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all shrink-0 border ${
                  activeTab === tab.id
                    ? 'bg-stone-100 text-stone-900 border-stone-100 shadow-md'
                    : 'bg-stone-950/40 text-stone-400 border-stone-850 hover:text-stone-200 hover:bg-stone-950/80'
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="min-h-[450px]">
          
          {/* TAB 1: Estrategia & Brief */}
          {activeTab === 'estrategia' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="bg-stone-950/60 border border-stone-800/80 p-8 rounded-2xl">
                <h4 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Público Objetivo Detallado
                </h4>
                <p className="text-stone-300 text-sm leading-relaxed mb-6 bg-stone-900/50 p-4 rounded-xl border border-stone-850">
                  {raizBrief.targetAudience.description}
                </p>
                
                <h5 className="text-xs text-stone-500 uppercase tracking-wider font-mono mb-3">
                  Puntos de dolor y motivaciones
                </h5>
                <ul className="space-y-3.5">
                  {raizBrief.targetAudience.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3 text-stone-300 text-xs leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-stone-950/60 border border-stone-800/80 p-8 rounded-2xl flex-1">
                  <h4 className="font-display font-bold text-xl text-white mb-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    El Desafío Jujeño
                  </h4>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    "En Jujuy, las opciones listas para comer solían polarizarse: rotiserías con comida aceitosa y pesada, o dietéticas caras de 'comida de pajarito'. La persona que trabaja de corrido (ej. tribunales, hospitales, comercios del centro) no quiere una lechuga insípida, pero tampoco un sándwich grasoso. Busca el confort de la comida de mamá, pero lista en 3 minutos. Raíz llena ese vacío con un producto honesto y un delivery organizado."
                  </p>
                </div>
                
                <div className="bg-emerald-950/20 border border-emerald-900/30 p-6 rounded-2xl flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-emerald-950 flex items-center justify-center border border-emerald-800/40 text-emerald-400 shrink-0">
                    <Info className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-sm text-stone-100">Enfoque Anti-Fórmulas Vacías</h5>
                    <p className="text-stone-400 text-xs leading-relaxed mt-1">
                      Construimos la propuesta sobre la "solución de tiempo y alivio", eliminando palabras de culpa ("no comas harinas", "bajá de peso para el verano") típicas de marcas ultra-estresantes.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: Tono & Directrices */}
          {activeTab === 'tono' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="bg-stone-950/60 border border-stone-800/80 p-8 rounded-2xl">
                <h4 className="font-display font-bold text-xl text-white mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Tono de Comunicación
                </h4>
                <p className="text-stone-400 text-xs font-mono mb-6">
                  {raizBrief.communicationTone.voice}
                </p>
                <p className="text-stone-300 text-sm leading-relaxed mb-6">
                  {raizBrief.communicationTone.description}
                </p>

                <div className="border-t border-stone-850 pt-6">
                  <h5 className="text-xs text-emerald-400 font-mono tracking-wider uppercase mb-4 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4" /> Lo que SÍ hacemos (Pilares de Voz)
                  </h5>
                  <ul className="space-y-3">
                    {raizBrief.communicationTone.dos.map((p, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-stone-300 text-xs leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-red-950/10 border border-red-900/20 p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-bold text-xl text-stone-100 mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                    Lo que NO es esta marca
                  </h4>
                  <p className="text-stone-400 text-xs font-mono mb-6">
                    Límites definidos para mantener la autenticidad y evitar el "AI-slop" de salud artificial.
                  </p>
                  
                  <ul className="space-y-4">
                    {raizBrief.communicationTone.donts.map((dont, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-300 text-xs leading-relaxed">
                        <span className="px-2 py-0.5 rounded bg-red-950 text-red-400 font-mono text-[10px] font-bold shrink-0 mt-0.5">NO</span>
                        <span>{dont}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-red-900/20 text-stone-400 text-xs leading-relaxed">
                  <strong>Nota de la Redactora:</strong> En mercados locales medianos como Jujuy, exagerar con terminología técnica fitness o corporativa genera <strong>desconfianza inmediata</strong>. Las personas le compran a vecinos que cocinan rico, no a corporaciones de batidos falsos.
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: Copys Creativos en Acción */}
          {activeTab === 'social' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Copy selector & critique details - Left 7 columns */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                
                {/* Copy selector button grid */}
                <div className="bg-stone-950/40 p-1.5 rounded-xl border border-stone-850 flex gap-2">
                  {raizCampaignCopies.map((c) => (
                    <button
                      key={c.id}
                      id={`copy-btn-${c.id}`}
                      onClick={() => setSelectedCopyId(c.id)}
                      className={`flex-1 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                        selectedCopyId === c.id
                          ? 'bg-stone-800 text-white border-b-2 border-emerald-500'
                          : 'text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      {c.title}
                    </button>
                  ))}
                </div>

                {/* Analysis detail */}
                <div className="bg-stone-950/60 border border-stone-800/80 p-6 rounded-2xl">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-900 border border-stone-850 text-stone-400 font-mono text-[10px] mb-4">
                    <Info className="h-3.5 w-3.5 text-emerald-400" />
                    <span>ANÁLISIS ESTRATÉGICO DE REDACCIÓN</span>
                  </div>

                  <h5 className="font-display font-bold text-sm text-stone-200 mb-2">
                    ¿Por qué representa a la marca?
                  </h5>
                  <p className="text-stone-300 text-xs leading-relaxed bg-stone-900/30 p-3.5 rounded-xl border border-stone-850/60 mb-6">
                    {selectedCopy.justification}
                  </p>

                  <h5 className="font-display font-bold text-sm text-stone-200 mb-2 flex items-center gap-2">
                    <span>Alternativa & Sugerencia de Verónica (Optimización)</span>
                  </h5>
                  <p className="text-stone-300 text-xs leading-relaxed bg-amber-950/10 p-3.5 rounded-xl border border-amber-900/20">
                    {selectedCopy.alternativeSuggestion}
                  </p>

                  {/* Interactive CTA Injector controls */}
                  <div className="mt-6 pt-5 border-t border-stone-850 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold text-stone-200 block">Optimización de Conversión</span>
                      <span className="text-[10px] text-stone-400 block mt-0.5">Aplica la sugerencia de Verónica en tiempo real en la vista previa del mockup.</span>
                    </div>
                    <button
                      id="cta-optimize-toggle"
                      onClick={() => setEnableCTA(!enableCTA)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        enableCTA
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md'
                          : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                      }`}
                    >
                      {enableCTA ? '🟢 CTA Activada' : '🔴 Activar CTA/Ventas'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Instagram/Facebook Phone Mockup - Right 5 columns */}
              <div className="lg:col-span-5 flex flex-col items-center">
                {/* Platform selector */}
                <div className="flex gap-2 mb-4 bg-stone-950/60 p-1 rounded-full border border-stone-800 w-fit">
                  <button
                    id="mock-ig-toggle"
                    onClick={() => setSocialMockPlatform('instagram')}
                    className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all ${
                      socialMockPlatform === 'instagram'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <Instagram className="h-3 w-3" />
                    Instagram
                  </button>
                  <button
                    id="mock-fb-toggle"
                    onClick={() => setSocialMockPlatform('facebook')}
                    className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all ${
                      socialMockPlatform === 'facebook'
                        ? 'bg-blue-600 text-white'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <Facebook className="h-3 w-3" />
                    Facebook
                  </button>
                </div>

                {/* Simulated Phone Shell */}
                <div className="w-full max-w-[340px] bg-stone-950 border-[6px] border-stone-800 rounded-[32px] overflow-hidden shadow-2xl relative">
                  
                  {/* Camera hole / notch */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 h-4 w-20 bg-stone-800 rounded-full z-30" />

                  {/* App Header */}
                  <div className="bg-stone-950 border-b border-stone-900 pt-8 pb-3 px-4 flex items-center justify-between text-white">
                    <span className="font-display font-bold text-xs tracking-tight">
                      {socialMockPlatform === 'instagram' ? 'Instagram' : 'Facebook'}
                    </span>
                    <span className="text-[10px] text-stone-500 font-mono">10:42 AM</span>
                  </div>

                  {/* Post Header */}
                  <div className="p-3 flex items-center justify-between bg-stone-950">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-xs text-white border border-emerald-600/30">
                        R
                      </div>
                      <div>
                        <span className="font-semibold text-xs text-stone-200 block leading-none">raiz.comidareal</span>
                        <span className="text-[9px] text-stone-500">San Salvador de Jujuy</span>
                      </div>
                    </div>
                    <span className="text-stone-400 text-xs font-bold font-mono">•••</span>
                  </div>

                  {/* Social Post Image */}
                  <div className="aspect-square bg-stone-900 relative overflow-hidden flex items-center justify-center">
                    <img
                      src="/src/assets/images/raiz_social_tile_1782999193330.jpg"
                      alt="Raiz social mockup tile"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop&q=80";
                      }}
                    />
                    
                    {/* Brand overlay sticker inside the post - representing Veronica's clean branding */}
                    <div className="absolute bottom-3 left-3 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-stone-800 flex flex-col">
                      <span className="text-[9px] font-sans font-extrabold text-stone-100 tracking-wider uppercase leading-tight">Raíz</span>
                      <span className="text-[7px] text-emerald-400 font-mono tracking-tight leading-none">Comida casera lista</span>
                    </div>
                  </div>

                  {/* Actions bar */}
                  <div className="p-3 flex items-center justify-between bg-stone-950 border-b border-stone-900">
                    <div className="flex items-center gap-3 text-stone-300">
                      <button className="hover:text-red-500 transition-colors">
                        <Heart className="h-5 w-5" />
                      </button>
                      <button>
                        <MessageCircle className="h-5 w-5" />
                      </button>
                      <button>
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                    <span className="text-[9px] text-emerald-400 font-mono tracking-wider">★ ALTA INTERACCIÓN</span>
                  </div>

                  {/* Text caption content */}
                  <div className="p-3 bg-stone-950 max-h-[160px] overflow-y-auto no-scrollbar">
                    <p className="text-[10px] text-stone-400 leading-normal">
                      <strong className="text-stone-200 mr-1.5">raiz.comidareal</strong>
                      <span className="whitespace-pre-wrap">{getEnhancedCopyText(selectedCopy.copyText)}</span>
                    </p>
                    <div className="mt-3 text-[9px] text-stone-500 font-mono flex items-center justify-between">
                      <span>Ver los 18 comentarios</span>
                      <span>HACE 2 HORAS</span>
                    </div>
                  </div>
                </div>

                <span className="text-stone-500 text-[10px] mt-2 font-mono italic">
                  Simulación de post orgánico para Jujuy
                </span>
              </div>
            </motion.div>
          )}

          {/* TAB 4: Paleta de Colores & Identidad */}
          {activeTab === 'identidad' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="bg-stone-950/60 border border-stone-800/80 p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-bold text-xl text-white mb-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Concepto de Identidad Visual
                  </h4>
                  <p className="text-stone-300 text-sm leading-relaxed mb-6">
                    Diseñé una paleta cromática y dirección visual basada en <strong>"La Verdad de la Tierra"</strong>. En lugar de colores neón, fucsia o grises metálicos de los gimnasios, elegimos tonos cálidos, terrenales, reconfortantes y hogareños. Esto evoca el origen natural de los alimentos y el alivio emocional de abrir la heladera y encontrar comida fresca y lista.
                  </p>
                </div>

                <div className="bg-stone-900/50 p-4 rounded-xl border border-stone-850/60">
                  <span className="text-[10px] text-emerald-400 font-mono uppercase tracking-wider block mb-1">Tipografías Elegidas</span>
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="text-xs text-stone-400 font-mono block">Títulos</span>
                      <span className="text-sm font-display font-extrabold text-stone-200">Outfit (Moderna & Redonda)</span>
                    </div>
                    <div className="h-8 w-[1px] bg-stone-800" />
                    <div>
                      <span className="text-xs text-stone-400 font-mono block">Cuerpo</span>
                      <span className="text-sm font-sans text-stone-200">Inter (Cómoda & Legible)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Color swatches */}
              <div className="grid grid-cols-2 gap-4">
                {/* Olive Green */}
                <div className="bg-stone-950/60 border border-stone-800 p-4 rounded-xl flex flex-col gap-4">
                  <div className="h-20 w-full rounded-lg bg-[#5A7351] shadow-inner flex items-end justify-between p-2 text-white font-mono text-[10px]">
                    <span className="font-bold">#5A7351</span>
                    <span className="bg-stone-950/40 px-1 py-0.5 rounded">HUERTA</span>
                  </div>
                  <div>
                    <span className="text-xs text-stone-200 font-semibold block">Verde Huerta</span>
                    <span className="text-[10px] text-stone-400 leading-tight block mt-1">
                      Inspira frescura, ingredientes limpios, vegetales frescos y calma mental.
                    </span>
                  </div>
                </div>

                {/* Terracotta */}
                <div className="bg-stone-950/60 border border-stone-800 p-4 rounded-xl flex flex-col gap-4">
                  <div className="h-20 w-full rounded-lg bg-[#D96B43] shadow-inner flex items-end justify-between p-2 text-white font-mono text-[10px]">
                    <span className="font-bold">#D96B43</span>
                    <span className="bg-stone-950/40 px-1 py-0.5 rounded">RAÍZ</span>
                  </div>
                  <div>
                    <span className="text-xs text-stone-200 font-semibold block">Terracota</span>
                    <span className="text-[10px] text-stone-400 leading-tight block mt-1">
                      El calor del hogar, del barro jujeño, la cocción a fuego lento y el sabor tradicional.
                    </span>
                  </div>
                </div>

                {/* Soft Cream */}
                <div className="bg-stone-950/60 border border-stone-800 p-4 rounded-xl flex flex-col gap-4">
                  <div className="h-20 w-full rounded-lg bg-[#F4EFE6] shadow-inner flex items-end justify-between p-2 text-stone-900 font-mono text-[10px]">
                    <span className="font-bold">#F4EFE6</span>
                    <span className="bg-white/60 px-1 py-0.5 rounded">HOGAR</span>
                  </div>
                  <div>
                    <span className="text-xs text-stone-200 font-semibold block">Crema Suave</span>
                    <span className="text-[10px] text-stone-400 leading-tight block mt-1">
                      El lienzo limpio, paz, organización de la heladera, higiene y empaque amigable.
                    </span>
                  </div>
                </div>

                {/* Organic Charcoal */}
                <div className="bg-stone-950/60 border border-stone-800 p-4 rounded-xl flex flex-col gap-4">
                  <div className="h-20 w-full rounded-lg bg-[#242424] shadow-inner flex items-end justify-between p-2 text-stone-300 font-mono text-[10px]">
                    <span className="font-bold">#242424</span>
                    <span className="bg-stone-950/40 px-1 py-0.5 rounded">PREMIUM</span>
                  </div>
                  <div>
                    <span className="text-xs text-stone-200 font-semibold block">Carbón Orgánico</span>
                    <span className="text-[10px] text-stone-400 leading-tight block mt-1">
                      Soporte de contraste, profesionalismo, sofisticación del servicio express.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
