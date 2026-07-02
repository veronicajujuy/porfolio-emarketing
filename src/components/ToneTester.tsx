/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  RotateCcw, 
  ThumbsUp, 
  TrendingUp, 
  MessageSquareQuote,
  Smile,
  ShieldAlert
} from 'lucide-react';

interface AnalysisResult {
  scoreClose: number;
  scoreHonest: number;
  scorePractical: number;
  hasBannedWords: boolean;
  bannedWordsFound: string[];
  hasPositiveWords: boolean;
  positiveWordsFound: string[];
  feedbackList: string[];
  status: 'excelente' | 'regular' | 'no-alineado';
}

export default function ToneTester() {
  const [inputText, setInputText] = useState<string>('');
  const [analysis, setAnalysis] = useState<AnalysisResult>({
    scoreClose: 0,
    scoreHonest: 0,
    scorePractical: 0,
    hasBannedWords: false,
    bannedWordsFound: [],
    hasPositiveWords: false,
    positiveWordsFound: [],
    feedbackList: [],
    status: 'regular'
  });

  const presets = [
    {
      label: '❌ Error: Dieta Fitness Extrema',
      text: '¡Llegó la dieta definitiva para quemar grasa! 🔥 Ponete fit con nuestro plan detox súper proteico, bajo en calorías y Kcal. Resultados milagrosos garantizados. ¡Hacé tu pedido ya y alcanzá el cuerpo de tus sueños para el verano!',
      description: 'Muestra tono fitness extremo, promesas milagrosas y lenguaje corporativo de dieta, violando el principio "No es una marca fitness".'
    },
    {
      label: '⚠️ Advertencia: Corporativo y Frío',
      text: 'Estimado consumidor, nuestra prestigiosa corporación de manufactura alimenticia industrial le provee viandas de máxima calidad bajo estándares internacionales. Optimice el planeamiento alimenticio de su jornada laboral adquiriendo nuestros productos corporativos hoy.',
      description: 'Muestra tono corporativo, frío, industrial y excesivamente formal, violando la voz humana y cercana.'
    },
    {
      label: '✅ Excelente: Comida Real & Alivio',
      text: '¿Cansado de llegar tarde a casa y tener que lavar ollas? 🍲 Nosotros nos ocupamos de cocinar rico y casero. Elegí tus viandas de la semana, organizate y encontrá en la heladera una comida lista cuando volvés de trabajar. Comida real para tener más tiempo para vos en Jujuy.',
      description: 'Muestra empatía real con la rutina de Jujuy, resalta el alivio de tiempo, el sabor casero y un tono humano conversacional.'
    }
  ];

  useEffect(() => {
    analyzeText(inputText);
  }, [inputText]);

  const analyzeText = (text: string) => {
    if (!text.trim()) {
      setAnalysis({
        scoreClose: 0,
        scoreHonest: 0,
        scorePractical: 0,
        hasBannedWords: false,
        bannedWordsFound: [],
        hasPositiveWords: false,
        positiveWordsFound: [],
        feedbackList: ['Empezá a escribir o seleccioná un ejemplo de prueba arriba.'],
        status: 'regular'
      });
      return;
    }

    const lower = text.toLowerCase();

    // Word lists based on Brand Brief constraints
    const bannedWordsMap = [
      { key: 'fitness', match: ['fitness', 'fit', 'músculo', 'proteico'] },
      { key: 'calorías / Kcal', match: ['calorías', 'kcal', 'caloria', 'bajas en calor', 'pérdida de peso'] },
      { key: 'dietas extremas', match: ['dieta', 'detox', 'desintoxicación', 'quemar grasa', 'bajar de peso'] },
      { key: 'promesas milagrosas', match: ['milagro', 'transformación milagrosa', 'garantizado', 'resultados inmediatos', 'cuerpo del verano'] },
      { key: 'tono corporativo', match: ['corporativo', 'prestigiosa', 'consumidor', 'corporación', 'manufactura', 'industrial', 'ultraprocesado', 'empresa líder'] },
      { key: 'agresividad publicitaria', match: ['pedido ya', 'compra ya', 'revolucionario', 'mejor del mundo', 'imperdible', 'llame ya'] }
    ];

    const positiveWordsMap = [
      { key: 'casero', match: ['casero', 'casera', 'hecho en casa', 'como mamá', 'rico'] },
      { key: 'tiempo', match: ['tiempo', 'horas', 'minutos', 'disfrutar', 'tiempo para vos'] },
      { key: 'organización', match: ['organizar', 'organiza', 'semana', 'planeamiento', 'heladera', 'vianda', 'viandas', 'domingo'] },
      { key: 'honestidad / real', match: ['real', 'simple', 'honestidad', 'honestamente', 'tranquilidad', 'alivio', 'sabor', 'fresco'] },
      { key: 'local', match: ['jujuy', 'palpalá', 'norte', 'sabor jujeño'] }
    ];

    const bannedWordsFound: string[] = [];
    bannedWordsMap.forEach(item => {
      const hasMatch = item.match.some(m => lower.includes(m));
      if (hasMatch) {
        bannedWordsFound.push(item.key);
      }
    });

    const positiveWordsFound: string[] = [];
    positiveWordsMap.forEach(item => {
      const hasMatch = item.match.some(m => lower.includes(m));
      if (hasMatch) {
        positiveWordsFound.push(item.key);
      }
    });

    // Score calculations
    let scoreClose = 30; // base score
    let scoreHonest = 40;
    let scorePractical = 20;

    // Adjusting score close (friendly, conversational, everyday)
    if (lower.includes('¿') || lower.includes('?')) scoreClose += 15;
    if (lower.includes('vos') || lower.includes('te') || lower.includes('nosotros')) scoreClose += 15;
    if (positiveWordsFound.includes('casero')) scoreClose += 15;
    if (positiveWordsFound.includes('local')) scoreClose += 15;
    if (bannedWordsFound.includes('tono corporativo')) scoreClose -= 25;

    // Adjusting score honest (trustworthy, non-exaggerated)
    if (bannedWordsFound.includes('promesas milagrosas')) scoreHonest -= 30;
    if (bannedWordsFound.includes('agresividad publicitaria')) scoreHonest -= 20;
    if (bannedWordsFound.includes('dietas extremas')) scoreHonest -= 15;
    if (positiveWordsFound.includes('honestidad / real')) scoreHonest += 20;
    if (lower.length > 80 && lower.length < 250) scoreHonest += 15; // sweet spot length

    // Adjusting score practical (relief, meal prep utility)
    if (positiveWordsFound.includes('organización')) scorePractical += 25;
    if (positiveWordsFound.includes('tiempo')) scorePractical += 25;
    if (lower.includes('list') || lower.includes('heladera') || lower.includes('calentar')) scorePractical += 20;
    if (bannedWordsFound.includes('fitness')) scorePractical -= 10;

    // Cap scores between 0 and 100
    scoreClose = Math.max(0, Math.min(100, scoreClose));
    scoreHonest = Math.max(0, Math.min(100, scoreHonest));
    scorePractical = Math.max(0, Math.min(100, scorePractical));

    // Dynamic advice feedback
    const feedbackList: string[] = [];
    if (bannedWordsFound.length > 0) {
      if (bannedWordsFound.includes('dietas extremas') || bannedWordsFound.includes('fitness') || bannedWordsFound.includes('calorías / Kcal')) {
        feedbackList.push('⚠️ Alerta Fitness: Evitá usar palabras de dieta restrictiva o Kcal. Raíz se enfoca en "Comida Real" y disfrute casero.');
      }
      if (bannedWordsFound.includes('promesas milagrosas')) {
        feedbackList.push('⚠️ Promesa Exagerada: No prometas transformaciones de vida milagrosas. Hablá de alivio real diario.');
      }
      if (bannedWordsFound.includes('tono corporativo')) {
        feedbackList.push('⚠️ Vibe Corporativa: Suena muy frío o distante. Reemplazá vocablos técnicos por palabras que usaría una vecina de Jujuy.');
      }
      if (bannedWordsFound.includes('agresividad publicitaria')) {
        feedbackList.push('⚠️ Copy de Venta Dura: Evitá ganchos publicitarios como "¡Comprá ya!". Es mejor explicar el alivio y dejar el CTA de forma natural.');
      }
    } else {
      feedbackList.push('✨ ¡Excelente! Estás evitando los clichés publicitarios tradicionales y los términos de dietas extremas.');
    }

    if (positiveWordsFound.length === 0) {
      feedbackList.push('💡 Tip: Agregá palabras clave como "casero", "tiempo", "organizar" o "heladera" para conectar más con la propuesta de valor.');
    } else {
      if (positiveWordsFound.includes('local')) {
        feedbackList.push('📍 ¡Bien hecho! Incorporar Jujuy o Palpalá ayuda a generar sentido de cercanía e identidad local.');
      }
      if (positiveWordsFound.includes('organización')) {
        feedbackList.push('📅 ¡Buen pilar! Estás destacando la organización semanal, que es clave para aliviar la mente del consumidor.');
      }
    }

    if (text.length > 400) {
      feedbackList.push('📏 El texto es un poco extenso para redes. Intentá resumirlo para mantener el impacto visual en pantallas móviles.');
    }

    // Determine general status
    let status: 'excelente' | 'regular' | 'no-alineado' = 'regular';
    if (bannedWordsFound.length >= 2) {
      status = 'no-alineado';
    } else if (bannedWordsFound.length === 0 && positiveWordsFound.length >= 2 && scoreClose > 70 && scoreHonest > 70) {
      status = 'excelente';
    }

    setAnalysis({
      scoreClose,
      scoreHonest,
      scorePractical,
      hasBannedWords: bannedWordsFound.length > 0,
      bannedWordsFound,
      hasPositiveWords: positiveWordsFound.length > 0,
      positiveWordsFound,
      feedbackList,
      status
    });
  };

  return (
    <section id="validador" className="py-24 px-6 bg-stone-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title block */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-900 border border-stone-850 rounded-full text-[10px] text-emerald-400 font-mono uppercase tracking-wider mb-3">
            <Sparkles className="h-3 w-3 animate-pulse" />
            Herramienta Interactiva del Portfolio
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Validador de Tono "Raíz"
          </h2>
          <p className="text-stone-400 text-sm max-w-xl mx-auto mt-2">
            La pauta digital exitosa depende del copywriting alineado. Probá redactar un copy para Raíz y nuestro sistema evaluará si cumple con las directrices estratégicas de Verónica.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="mb-8">
          <span className="text-[10px] text-stone-500 uppercase tracking-wider font-mono block text-center mb-3">
            Elegí un texto preestablecido para probar la herramienta:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {presets.map((preset, idx) => (
              <button
                key={idx}
                id={`preset-btn-${idx}`}
                onClick={() => setInputText(preset.text)}
                className={`p-4 rounded-xl text-left border transition-all text-xs flex flex-col justify-between ${
                  inputText === preset.text
                    ? 'bg-stone-900 border-emerald-500 shadow-md'
                    : 'bg-stone-900/30 border-stone-850 hover:bg-stone-900/60 hover:border-stone-800'
                }`}
              >
                <div>
                  <span className="font-bold block mb-1 text-stone-200">{preset.label}</span>
                  <span className="text-stone-400 leading-normal block text-[11px] mb-3">
                    {preset.description}
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono self-end underline mt-auto">Cargar ejemplo →</span>
              </button>
            ))}
          </div>
        </div>

        {/* Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Editor Input Area - Left 7 columns */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-stone-900/60 border border-stone-800 p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-semibold text-stone-200 uppercase tracking-wider font-mono">
                  Editor de Copywriting Persuasivo
                </label>
                <div className="flex items-center gap-2">
                  {inputText && (
                    <button
                      id="clear-tone-text"
                      onClick={() => setInputText('')}
                      className="text-stone-500 hover:text-stone-300 transition-colors flex items-center gap-1 text-[10px]"
                    >
                      <RotateCcw className="h-3 w-3" /> Reiniciar
                    </button>
                  )}
                  <span className="text-[10px] text-stone-500 font-mono">{inputText.length} carácteres</span>
                </div>
              </div>

              <textarea
                id="copy-text-input"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Escribí o pegá un copy promocional para Raíz aquí... (Ej: '¿Buscás una comida rica y rápida para el almuerzo en la oficina? Nosotros nos encargamos de las viandas caseras...')"
                className="w-full h-56 bg-stone-950 border border-stone-850 rounded-xl p-4 text-stone-200 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-sans leading-relaxed resize-none"
              />

              <div className="mt-4 bg-stone-950/40 p-3.5 rounded-lg border border-stone-850 flex items-center gap-3">
                <MessageSquareQuote className="h-5 w-5 text-stone-500 shrink-0" />
                <span className="text-[11px] text-stone-400 leading-relaxed italic">
                  "El validador busca activamente si te desvías de la marca prometiendo dietas extremas, o si usas términos pesados y corporativos."
                </span>
              </div>
            </div>
          </div>

          {/* Real-time Dashboard Analytics - Right 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Tone Scores Card */}
            <div className="bg-stone-900/60 border border-stone-800 p-6 rounded-2xl">
              <h3 className="font-display font-bold text-sm text-stone-100 uppercase tracking-wider font-mono mb-5 border-b border-stone-800 pb-3 flex items-center justify-between">
                <span>Resultados de Tono</span>
                {inputText.trim() && (
                  <span className={`px-2.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wide ${
                    analysis.status === 'excelente' 
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-900/30' 
                      : analysis.status === 'no-alineado'
                      ? 'bg-red-950 text-red-400 border border-red-900/30'
                      : 'bg-stone-800 text-stone-400'
                  }`}>
                    {analysis.status === 'excelente' ? '✅ Óptimo' : analysis.status === 'no-alineado' ? '❌ No Alineado' : '⚠️ Ajustable'}
                  </span>
                )}
              </h3>

              {/* Progress metrics */}
              <div className="space-y-4">
                {/* Close/Conversational Score */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-stone-300 font-medium">Cercanía y Voz Humana</span>
                    <span className={analysis.scoreClose > 70 ? 'text-emerald-400 font-bold' : 'text-stone-400'}>{analysis.scoreClose}%</span>
                  </div>
                  <div className="h-2 w-full bg-stone-950 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${analysis.scoreClose > 70 ? 'bg-emerald-500' : 'bg-stone-700'}`}
                      style={{ width: `${analysis.scoreClose}%` }}
                    />
                  </div>
                </div>

                {/* Honest Score */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-stone-300 font-medium">Honestidad (Sin Clichés)</span>
                    <span className={analysis.scoreHonest > 70 ? 'text-emerald-400 font-bold' : 'text-stone-400'}>{analysis.scoreHonest}%</span>
                  </div>
                  <div className="h-2 w-full bg-stone-950 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${analysis.scoreHonest > 70 ? 'bg-emerald-500' : 'bg-stone-700'}`}
                      style={{ width: `${analysis.scoreHonest}%` }}
                    />
                  </div>
                </div>

                {/* Practical Score */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-stone-300 font-medium">Practicidad y Alivio</span>
                    <span className={analysis.scorePractical > 70 ? 'text-emerald-400 font-bold' : 'text-stone-400'}>{analysis.scorePractical}%</span>
                  </div>
                  <div className="h-2 w-full bg-stone-950 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${analysis.scorePractical > 70 ? 'bg-emerald-500' : 'bg-stone-700'}`}
                      style={{ width: `${analysis.scorePractical}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Tag Detection Highlights */}
              {inputText.trim() && (
                <div className="mt-6 pt-5 border-t border-stone-800 space-y-3.5">
                  {/* Banned detection */}
                  <div>
                    <span className="text-[10px] text-stone-500 font-mono block uppercase tracking-wider mb-1.5">
                      CONCEPTOS EVITADOS (LÍMITES DE MARCA)
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {analysis.hasBannedWords ? (
                        analysis.bannedWordsFound.map((tag, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-1 bg-red-950/40 text-red-400 border border-red-900/20 rounded-md text-[10px] font-mono font-medium">
                            <ShieldAlert className="h-3.5 w-3.5" />
                            {tag}
                          </span>
                        ))
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-950/20 text-emerald-400 border border-emerald-900/10 rounded-md text-[10px] font-mono">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          Límites respetados
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Positive detection */}
                  <div>
                    <span className="text-[10px] text-stone-500 font-mono block uppercase tracking-wider mb-1.5">
                      PILARES DE VOZ DETECTADOS
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {analysis.hasPositiveWords ? (
                        analysis.positiveWordsFound.map((tag, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-950/30 text-emerald-400 border border-emerald-800/20 rounded-md text-[10px] font-mono font-medium">
                            <Smile className="h-3.5 w-3.5" />
                            {tag}
                          </span>
                        ))
                      ) : (
                        <span className="text-stone-500 text-[10px] font-mono italic">No se detectaron pilares específicos.</span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Strategic Advice List Card */}
            <div className="bg-stone-900/60 border border-stone-800 p-6 rounded-2xl flex-1">
              <h3 className="font-display font-bold text-xs text-stone-300 uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                Asesoría de Redacción en Tiempo Real
              </h3>
              
              <div className="space-y-3 max-h-[180px] overflow-y-auto no-scrollbar">
                {analysis.feedbackList.map((feedback, idx) => (
                  <div key={idx} className="text-xs text-stone-300 leading-relaxed bg-stone-950/50 p-3 rounded-lg border border-stone-850 flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                    <span>{feedback}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
