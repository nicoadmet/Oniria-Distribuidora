import logo from '../assets/logo-full-zoom.png';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";




const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white text-gray-900 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
        
        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          
          {/* Section 1: Brand / Logo */}
          <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
            <div className="flex items-center space-x-2">
              <img 
                src={logo} 
                alt="Oniria Distribuidora Logo" 
                className="h-15 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[240px]">
              Comprometidos en la calidad y atención al cliente.
            </p>
          </div>

          {/* Section 2: Info / Contact */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-500">Información</h3>
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center space-x-3 text-gray-600 group">
                <IoLocationOutline  />
                <span className="text-sm font-medium">Rosario, Santa Fe</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-600 group">
                <IoMdTime />
                <span className="text-sm font-medium">Lun a Sáb: 9 a 18hs</span>
              </div>
            </div>
          </div>

          {/* Section 3: Social Media */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-500">Contacto</h3>
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="group flex items-center justify-center w-10 h-10 rounded-full border border-gray-100 hover:border-blue-500 hover:bg-blue-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={18} className="text-gray-600 group-hover:text-white transition-colors" /> 
              </a>
              <a 
                href="#" 
                className="group flex items-center justify-center w-10 h-10 rounded-full border border-gray-100 hover:border-blue-500 hover:bg-blue-500 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={18} className="text-gray-600 group-hover:text-white transition-colors" /> 
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[11px] tracking-tight text-gray-400 font-medium">
            <p className='text-center'>
              © {currentYear} ONIRIA DISTRIBUIDORA. TODOS LOS DERECHOS RESERVADOS.
            </p>
            <p className="text-gray-400 text-[10px] uppercase tracking-widest">
              Desarrollado por <span className="text-gray-600 font-semibold hover:text-black transition-colors">Nicolás Admet</span>
            </p>
            
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;