/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { marketerProfile } from '../data';
import { MapPin, ArrowDown, ChevronRight, GraduationCap, Award, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onExploreClick, onContactClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 px-6 bg-stone-950 flex items-center overflow-hidden"
    >
      {/* Background Ambient Gradients */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-stone-900/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-emerald-950/50 border border-emerald-800/40 text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 w-fit"
            >
              <Award className="h-3.5 w-3.5" />
              Especialista en Growth Gastronómico y Negocios Locales
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-6"
            >
              Marketing con <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Raíces</span>.<br />
              Resultados con <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-amber-200">Verdad</span>.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-stone-300 text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-xl"
            >
              Hola, soy <strong className="text-white font-medium">{marketerProfile.name}</strong>. {marketerProfile.bio}
            </motion.p>

            <motion.div variants={itemVariants} className="flex items-center gap-2.5 text-stone-400 text-sm font-mono mb-8 bg-stone-900/50 p-2.5 rounded-lg border border-stone-800/60 w-fit">
              <MapPin className="h-4 w-4 text-emerald-500 animate-pulse" />
              <span>San Salvador de Jujuy, Argentina</span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
              <button
                id="hero-cta-raiz"
                onClick={onExploreClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-stone-100 font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-950/60"
              >
                Ver Caso de Estudio: Raíz
                <ChevronRight className="h-4 w-4" />
              </button>
              <button
                id="hero-cta-contacto"
                onClick={onContactClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-stone-900/80 text-stone-200 border border-stone-800 px-6 py-3.5 rounded-xl transition-all"
              >
                Charlemos de tu negocio
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Beautiful Profile & Stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="lg:col-span-5 flex flex-col justify-center relative"
          >
            {/* Main Card */}
            <div className="bg-stone-900/80 backdrop-blur-md rounded-2xl p-6 border border-stone-800/80 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-1.5 w-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              
              {/* Profile Image & Identification */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/src/assets/images/veronica_profile_new_1783019107024.jpg"
                  alt="Verónica - Digital Marketer"
                  className="h-16 w-16 rounded-full object-cover border-2 border-emerald-500/30"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback avatar if error
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80";
                  }}
                />
                <div>
                  <h3 className="font-display font-bold text-lg text-white leading-tight">
                    {marketerProfile.name}
                  </h3>
                  <p className="text-xs text-stone-400 font-mono">
                    {marketerProfile.title}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[10px] text-emerald-400 font-medium uppercase tracking-wider">
                      Disponible para asesorías en Jujuy y Remoto
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Bio statement */}
              <p className="text-stone-300 text-xs leading-relaxed bg-stone-950/60 p-4 rounded-xl border border-stone-800/40 mb-6 font-sans">
                "No creo en fórmulas de marketing de plantillas o en copiar lo que hacen en Buenos Aires o el exterior. Para vender viandas, servicios o productos en Jujuy, hay que entender las dinámicas familiares, el cansancio diario de los profesionales locales y generar lazos genuinos."
              </p>

              {/* Professional Values Checklist */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-stone-300 text-xs bg-stone-950/30 p-2 rounded-lg border border-stone-800/30">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Sin Humo ni Clichés</span>
                </div>
                <div className="flex items-center gap-2 text-stone-300 text-xs bg-stone-950/30 p-2 rounded-lg border border-stone-800/30">
                  <GraduationCap className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Enfoque Local NOA</span>
                </div>
              </div>

              {/* Small Banner decoration */}
              <div className="border-t border-stone-800/60 pt-4 text-center">
                <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono">
                  Casos de Éxito • Campañas Activas 2026
                </span>
              </div>
            </div>

            {/* Floating micro indicators (nice visual cues) */}
            <div className="absolute -bottom-6 -left-6 bg-stone-900 border border-stone-800 text-stone-300 text-xs px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              <span>Proyecto Estrella: <strong>Raíz Meal Prep</strong></span>
            </div>
          </motion.div>
        </div>

        {/* Metrics Grid Section */}
        <div id="sobre-mi" className="mt-24 pt-16 border-t border-stone-900">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-2xl text-white">
              Estrategia y Métricas Clave
            </h2>
            <p className="text-stone-400 text-sm max-w-lg mx-auto mt-2">
              El buen marketing se mide en alivio para el cliente y retorno para el negocio.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketerProfile.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-stone-900/40 p-6 rounded-xl border border-stone-800/60 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] text-emerald-500 font-mono tracking-wider uppercase block mb-1">
                    {metric.label}
                  </span>
                  <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight block">
                    {metric.value}
                  </span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed mt-3 pt-3 border-t border-stone-800/30">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dynamic down indicator */}
        <div className="flex justify-center mt-12 animate-bounce">
          <button
            onClick={onExploreClick}
            className="text-stone-500 hover:text-stone-300 flex flex-col items-center gap-1"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest">Explorar Campaña</span>
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
