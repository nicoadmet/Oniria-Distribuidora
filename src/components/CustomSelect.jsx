import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

// Ahora recibe props: options (la lista), value (el seleccionado), y onChange (la función)
export default function CustomSelect({ options, value, onChange, placeholder = "Selecciona..." }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Buscamos el objeto opción que coincide con el value que viene del padre
  const selectedOption = options.find(opt => opt.id === value || opt.name === value);

  return (
    <div className="relative md:w-72 font-sans bg-stone-50" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex w-full h-11 items-center justify-between rounded border px-4  
          text-left shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 
          ${isOpen ? 'border-blue-600 ring-blue-600' : 'border-gray-300'}
        `}
      >
        <span className={`block truncate ${!selectedOption ? 'text-gray-400' : 'text-gray-900 font-medium'}`}>
          {selectedOption ? selectedOption.name : placeholder}
        </span>
        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <ul className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded bg-white p-1 text-base shadow-2xl ring-1 ring-black ring-opacity-5 animate-in fade-in zoom-in-95 duration-100">
          {options.map((option) => (
            <li
              key={option.id || option.name}
              onClick={() => {
                onChange(option.name); 
                setIsOpen(false);
              }}
              className={`
                group relative cursor-pointer select-none rounded py-2.5 pl-3 pr-9 transition-colors
                ${selectedOption?.name === option.name ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}
              `}
            >
              <span className={`block truncate ${selectedOption?.name === option.name ? 'font-semibold' : 'font-normal'}`}>
                {option.name}
              </span>
              {selectedOption?.name === option.name && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-600">
                  <Check className="h-4 w-4" />
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}