import { IoCloseOutline, IoTrashOutline, IoAdd, IoRemove, IoCartOutline,IoBagHandleOutline } from "react-icons/io5";

const CartDrawer = ({ cart, products, isOpen, setIsCartOpen, setCart }) => {
  const items = Object.entries(cart);

  const getProduct = (id) => {
    return products.find((p) => p.id === Number(id));
  };

  const total = items.reduce((acc, [id, item]) => {
    const product = getProduct(id);
    if (!product) return acc;
    return acc + item.unit * product.unitPrice + item.pack * product.packPrice * product.unitsPerPack;
  }, 0);

  const removeItem = (id) => {
    setCart((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const updateQuantity = (id, type, action) => {
    setCart((prev) => {
      const current = prev[id] || { unit: 0, pack: 0 };
      const newValue = action === "increase" ? current[type] + 1 : current[type] - 1;
      if (newValue < 0) return prev;
      const updatedItem = { ...current, [type]: newValue };

      if (updatedItem.unit === 0 && updatedItem.pack === 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: updatedItem };
    });
  };

  return (
    <>
      {/* Overlay con Blur refinado */}
      <div
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] z-40 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer con bordes más suaves */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-[0_0_40px_rgba(0,0,0,0.1)] transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] z-50 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header con más "aire" */}
        <div className="px-8 py-7 flex justify-between items-center border-b border-slate-100">
          <div>
            <div className="flex">
              <IoBagHandleOutline className="bold size-4"/>
              <h3 className="text-sm pl-2">Carrito de Compras</h3>
            </div>
            <p className="text-[13px] font-medium text-blue-600 bg-blue-50 inline-block px-2 py-0.5 rounded mt-1">
              {items.length} {items.length === 1 ? 'producto' : 'productos'}
            </p>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-slate-50 rounded transition-all group"
          >
            <IoCloseOutline size={24} className="text-slate-400 group-hover:text-slate-900 group-hover:rotate-90 transition-all duration-300" />
          </button>
        </div>

        {/* Listado de Items con scroll invisible */}
        <div className="flex-1 px-6 py-4 space-y-6 overflow-y-auto scrollbar-hide">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-3">
              <div className="text-5xl opacity-20 grayscale"> <IoBagHandleOutline /> </div>
              <p className="text-slate-400 font-medium">Tu carrito de compras está vacío</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-sm font-bold text-blue-600 hover:underline"
              >
                Agregar productos
              </button>
            </div>
          ) : (
            items.map(([id, item]) => {
              const product = getProduct(id);
              if (!product) return null;
              const subtotal = item.unit * product.unitPrice + item.pack * product.packPrice * product.unitsPerPack;

              return (
                <div key={id} className="group relative flex flex-col gap-3 pb-6 border-b border-slate-200 last:border-0">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 pr-4">
                      <h3 className="font-bold text-slate-800 text-[15px] leading-snug group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-[11px] text-slate-400 uppercase tracking-widest mt-0.5">{product.category}</p>
                    </div>
                    <button
                      onClick={() => removeItem(id)}
                      className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded transition-all"
                    >
                      <IoTrashOutline size={18} />
                    </button>
                  </div>

                  {/* Controles de Unidades y Pack en paralelo */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Selector Unidad */}
                    <div className="flex items-center justify-between bg-slate-50 rounded p-1.5 border border-slate-100">
                      <div className="pl-2">
                        <p className="text-[10px] text-slate-400 font-bold uppercase">Unid.</p>
                        <p className="text-[15px] font-bold text-slate-700">${product.unitPrice}</p>
                      </div>
                      <div className="flex items-center bg-white rounded shadow-sm border border-slate-100">
                        <button onClick={() => updateQuantity(id, "unit", "decrease")} className="w-8 h-8 flex items-center justify-center text-blue-500 hover:bg-blue-50 font-bold">-</button>
                        <span className="w-6 text-center text-xs font-black text-slate-900">{item.unit}</span>
                        <button onClick={() => updateQuantity(id, "unit", "increase")} className="w-8 h-8 flex items-center justify-center text-blue-500 hover:bg-blue-50 font-bold">+</button>
                      </div>
                    </div>

                    {/* Selector Pack */}
                    <div className="flex items-center justify-between bg-blue-50/50 rounded p-1.5 border border-blue-100/50">
                      <div className="pl-2">
                        <p className="text-[10px] text-blue-400 font-bold uppercase">Pack x{product.unitsPerPack}</p>
                        <p className="text-[15px] font-bold text-blue-700">${product.packPrice}</p>
                      </div>
                      <div className="flex items-center bg-white rounded shadow-sm border border-blue-100">
                        <button onClick={() => updateQuantity(id, "pack", "decrease")} className="w-8 h-8 flex items-center justify-center text-blue-500 hover:bg-blue-50 font-bold">-</button>
                        <span className="w-6 text-center text-xs font-black text-blue-900">{item.pack}</span>
                        <button onClick={() => updateQuantity(id, "pack", "increase")} className="w-8 h-8 flex items-center justify-center text-blue-500 hover:bg-blue-50 font-bold">+</button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-1">
                    <span className="text-[16px] font-black text-slate-900 italic">
                      ${subtotal.toLocaleString()}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-8 bg-white border-t border-slate-100 shadow-[0_-10px_30px_rgba(0,0,0,0.02)]">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter">Total</p>
              <p className="text-[13px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded mt-1 inline-block">¡Ahorro aplicado en Packs!</p>
            </div>
            <span className="text-3xl font-black text-slate-900 tracking-tight">
              ${total.toLocaleString()}
            </span>
          </div>
          
          <div className="space-y-3">
            <button className="group relative w-full bg-slate-900 hover:bg-green-500 text-white py-4 rounded font-bold transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden">
              <span className="relative z-10">Finalizar pedido por Whatsapp</span>
              
            </button>
            <button 
              onClick={() => setCart({})}
              className="w-full text-slate-400 hover:text-red-500 font-bold text-xs uppercase tracking-widest py-2 transition-colors"
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;