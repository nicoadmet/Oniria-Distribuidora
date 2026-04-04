import React from 'react';
import { motion } from 'framer-motion'; // 1. Importamos motion
import { MessageCircle, ArrowRight, Package, GlassWater, Repeat } from 'lucide-react'; // Asumiendo Lucide para iconos

// Definimos las variantes para la animación de "revelado" (Fade In Up)
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 }, // Estado inicial: invisible y 30px abajo
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Un cubic-bezier personalizado para una desaceleración suave y elegante
    }
  }
};

// Definimos las variantes para el efecto "cascada" (Stagger Children)
const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Retraso de 0.2s entre la aparición de cada hijo
    }
  }
};

const EventsSection = () => {
  return (
    <section className="bg-[#FCFBF5] text-[#343A40] antialiased overflow-hidden py-16 md:py-24">
      
      {/* --- BLOQUE 1: HERO (REFINADO CON ANIMACIÓN) --- */}
      <motion.div 
        className="p-6 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Se activa cuando el 30% es visible
        variants={fadeInUpVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contenido de Texto */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Badge animado */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#343A40]/10 text-xs font-medium tracking-widest uppercase bg-white/50 backdrop-blur-sm"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Servicio a Consignación
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-serif leading-[1.1] tracking-tighter">
              Tu evento fluye, <br />
              <span className="text-emerald-700 italic">tu presupuesto no.</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 max-w-lg leading-relaxed">
              Comprá las bebidas para tu fiesta y <strong>devolvé lo que no se consuma.</strong> Recuperá tu inversión sin vueltas.
            </p>

            {/* Acciones */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group flex items-center justify-center gap-2 bg-[#12B886] hover:bg-[#0da074] text-white px-8 py-4 rounded-xl font-bold transition-all active:scale-95 shadow-xl shadow-emerald-200/50">
                <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" />
                <span>Cotizar por WhatsApp</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border-2 border-slate-100 px-8 py-4 rounded-xl font-semibold text-slate-600 hover:border-emerald-100 hover:bg-emerald-50/30 transition-all group">
                Ver catálogo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Bloque de Imagen */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={eventsImg} // Asegúrate de tener esta variable definida
                alt="Brindis en evento Oniria" 
                className="w-full h-[350px] lg:h-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- BLOQUE 2: CÓMO FUNCIONA (CON EFECTO CASCADA) --- */}
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-20 md:py-32 bg-white rounded-3xl shadow-sm border border-slate-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Se activa cuando el 20% es visible
        variants={staggerContainerVariants} // Contenedor para el efecto cascada
      >
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
          <motion.p variants={fadeInUpVariants} className="text-emerald-600 font-semibold uppercase tracking-widest text-sm">
            Paso a Paso
          </motion.p>
          <motion.h2 variants={fadeInUpVariants} className="text-4xl md:text-5xl font-serif tracking-tight">
            Así de simple es celebrar con Oniria
          </motion.h2>
          <motion.p variants={fadeInUpVariants} className="text-lg text-slate-600 leading-relaxed">
            Olvidate de calcular cantidades exactas. Nosotros nos encargamos de la logística y el riesgo.
          </motion.p>
        </div>

        {/* Grid de Pasos Asimétrico/Timeline (Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 relative">
          
          {/* Línea conectora (Desktop) */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block z-0"></div>

          {[
            { icon: Package, title: "Pedís tu combo", desc: "Asesoramiento experto para armar tu barra ideal." },
            { icon: GlassWater, title: "Disfrutás la fiesta", desc: "Tus invitados, servidos a gusto y sin límites." },
            { icon: Repeat, title: "Devolvé lo que sobró", desc: "Retiramos el stock y te reembolsamos." }
          ].map((paso, index) => (
            <motion.div 
              key={index}
              className="relative z-10 bg-white p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-50/50 flex flex-col items-center text-center space-y-6 hover:border-emerald-100 hover:shadow-emerald-50 transition-all duration-300 group"
              variants={fadeInUpVariants} // Cada hijo usa la variante individual
              whileHover={{ y: -10 }} // Pequeño efecto de flotación al hover
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center border-4 border-white shadow-inner group-hover:bg-emerald-100 transition-colors">
                <paso.icon size={30} className="text-emerald-700" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-800">
                {paso.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {paso.desc}
              </p>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm border-4 border-white">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default EventsSection;