/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  MessageSquare, 
  MapPin, 
  ArrowRight,
  ExternalLink,
  Briefcase
} from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    location: 'San Salvador de Jujuy',
    type: 'Gastronomía',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://hook.us2.make.com/tqo8em1z0iofdip4zebqp45jvb2ydovu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.name,
          email: formData.email,
          emprendimiento: formData.business || 'No especificado',
          ubicacion: formData.location,
          rubro: formData.type,
          mensaje: formData.message,
          fecha: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Hubo un problema al enviar el formulario. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Ocurrió un error al enviar el formulario. Por favor, intentá nuevamente o contactame directamente por WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      business: '',
      location: 'San Salvador de Jujuy',
      type: 'Gastronomía',
      message: ''
    });
    setIsSubmitted(false);
    setSubmitError(null);
  };

  // Create pre-filled WhatsApp message based on form values
  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hola Verónica, soy ${formData.name}${formData.business ? ` de ${formData.business}` : ''}. Te contacto desde tu portfolio por mi negocio de ${formData.type} en ${formData.location}. Mi correo es ${formData.email}. Mi consulta: ${formData.message}`
    );
    return `https://wa.me/5493881234567?text=${text}`; // Dummy local Jujuy number
  };

  return (
    <section id="contacto" className="py-24 px-6 bg-stone-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-950/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-900 border border-stone-850 rounded-full text-[10px] text-emerald-400 font-mono uppercase tracking-wider mb-3">
            <Mail className="h-3.5 w-3.5" />
            ¿Tenés un proyecto en el NOA?
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Hagamos Crecer Tu Marca Juntos
          </h2>
          <p className="text-stone-400 text-sm max-w-lg mx-auto mt-2">
            Escribime para armar una estrategia honesta, libre de clichés corporativos y diseñada a la medida de tu público local.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider font-mono block mb-2">
                    Tu Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej: Verónica Ramos"
                    className="w-full bg-stone-950 border border-stone-850 rounded-xl px-4 py-3 text-stone-200 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-sans"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider font-mono block mb-2">
                    Tu Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Ej: veronica@ejemplo.com"
                    className="w-full bg-stone-950 border border-stone-850 rounded-xl px-4 py-3 text-stone-200 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Business Name */}
                <div>
                  <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider font-mono block mb-2">
                    Emprendimiento / Marca
                  </label>
                  <input
                    type="text"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    placeholder="Ej: Sabores del Norte"
                    className="w-full bg-stone-950 border border-stone-850 rounded-xl px-4 py-3 text-stone-200 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-sans"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider font-mono block mb-2">
                    Ubicación
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-850 rounded-xl px-4 py-3 text-stone-300 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-sans"
                  >
                    <option value="San Salvador de Jujuy">San Salvador de Jujuy, AR</option>
                    <option value="Palpalá">Palpalá, AR</option>
                    <option value="San Pedro de Jujuy">San Pedro de Jujuy, AR</option>
                    <option value="Salta">Salta, AR</option>
                    <option value="Remoto / Otro">Otro / Remoto</option>
                  </select>
                </div>

                {/* Business Type */}
                <div>
                  <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider font-mono block mb-2">
                    Rubro de Negocio
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-850 rounded-xl px-4 py-3 text-stone-300 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-sans"
                  >
                    <option value="Gastronomía">Gastronomía</option>
                    <option value="Alimentos Saludables">Alimentos Saludables</option>
                    <option value="Servicios Profesionales">Servicios Profesionales</option>
                    <option value="Indumentaria / Comercio">Indumentaria o Comercio</option>
                    <option value="Otro">Otro Emprendimiento</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider font-mono block mb-2">
                  ¿En qué te gustaría que te ayude? *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Contame brevemente sobre tu negocio, qué canales usas actualmente y cuáles son tus principales dolores de crecimiento..."
                  className="w-full h-36 bg-stone-950 border border-stone-850 rounded-xl p-4 text-stone-200 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-sans leading-relaxed resize-none"
                />
              </div>

              {submitError && (
                <div className="text-xs font-medium text-rose-400 bg-rose-950/20 border border-rose-900/50 rounded-xl p-4 font-sans">
                  {submitError}
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                id="submit-contact-form"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm py-4 rounded-xl transition-all shadow-lg shadow-emerald-950/60 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando consulta...' : 'Enviar Consulta Estratégica'}
                <Send className="h-4 w-4" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 flex flex-col items-center"
            >
              <div className="h-16 w-16 bg-emerald-950/60 rounded-full border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <CheckCircle className="h-10 w-10 animate-bounce" />
              </div>
              
              <h3 className="font-display font-extrabold text-2xl text-white mb-2">
                ¡Gracias por tu mensaje, {formData.name}!
              </h3>
              <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed mb-8">
                Tu consulta sobre {formData.business || 'tu proyecto'} fue enviada con éxito. Me pondré en contacto con vos al correo <strong>{formData.email}</strong> a la brevedad.
              </p>

              {/* Live Direct Contact CTA Options */}
              <div className="w-full max-w-md bg-stone-950 border border-stone-850 rounded-2xl p-6 mb-8 text-left">
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider font-mono mb-4">
                  🚀 ¿Querés acelerar el contacto directo?
                </h4>
                <p className="text-stone-300 text-xs leading-relaxed mb-5">
                  Podés enviarle esta misma información redactada directamente a su WhatsApp haciendo clic en el botón de abajo:
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    id="contact-whatsapp-link"
                    className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-stone-100 font-bold text-xs py-3.5 rounded-xl transition-all"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Enviar por WhatsApp
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <button
                    id="reset-form-btn"
                    onClick={resetForm}
                    className="px-5 py-3.5 bg-stone-900 border border-stone-800 text-stone-300 rounded-xl text-xs font-semibold hover:bg-stone-850 hover:text-stone-100 transition-all"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>

              <div className="text-stone-500 text-[10px] font-mono">
                Email Profesional: veronica.jujuy@gmail.com
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
