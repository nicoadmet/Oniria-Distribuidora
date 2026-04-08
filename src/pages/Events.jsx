import eventsImg from '../assets/eventos.jpg';
import { MessageCircle, ArrowRight } from 'lucide-react'; 
import { Link as ScrollLink } from 'react-scroll';
import Reveal from '../components/Reveal';

const Events = () => {
  return (
    <section className="text-gray-800 antialiased overflow-hidden">
      <div className="p-6 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center">
        
        {/* --- HERO BLOCK --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contenido de Texto */}
        <Reveal>
          
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#343A40]/20 text-xs font-medium tracking-widest uppercase bg-white/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Servicio a Consignación
            </div>

            <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tight">
              Tu evento fluye, <br />
              <span className="text-blue-600 italic">tu presupuesto no.</span>
            </h2>

            <p className="text-lg lg:text-xl text-slate-600 max-w-lg leading-relaxed">
              Comprá las bebidas para tu evento y <strong>devolvé lo que no se consuma. </strong> 
              Recuperá tu inversión sin vueltas ni complicaciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center w-full sm:w-auto gap-2 bg-emerald-500 hover:bg-em-500 text-white px-8 py-4 rounded font-bold transition-all transform hover:scale-103 shadow-lg shadow-emerald-200">
                <MessageCircle size={20} />
                Pedir Información
              </button>
              <ScrollLink 
                to="catalog"
                smooth={true}
                duration={400}
                spy={true}
              >
                <button className="flex items-center justify-center w-full sm:w-auto gap-2 bg-white border border-slate-200 px-8 py-4 rounded font-semibold hover:bg-slate-50 transition-colors">
                    Ver catálogo
                  <ArrowRight size={18} />
                </button>
              </ScrollLink>
            </div>
          </div>
        </Reveal>

          {/* Bloque de Imagen con Glassmorphism */}
          <Reveal delay={0.3}>

            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={eventsImg} 
                  alt="bebidas a consignación para eventos" 
                  className="w-full h-[400px] lg:h-[600px] object-cover"
                />
              </div>
              {/* Elemento Decorativo: "Glass Card" */}
              <div className="absolute -bottom-6 -left-6 z-20 hidden sm:block p-6 bg-white/80 backdrop-blur-md border border-white/20 rounded-xl shadow-xl max-w-[200px]">
                <p className="text-sm font-serif italic text-blue-800">
                  "Nos sobraron 4 cajones de cerveza y Oniria nos devolvió el dinero sin complicaciones."
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-tighter">— Analia l.</p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

export default Events