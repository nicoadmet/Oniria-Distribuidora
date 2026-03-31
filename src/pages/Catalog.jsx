import { Fragment, useState, useMemo } from "react";
import products from "../data/products";
import { CiSearch } from "react-icons/ci";

function Catalog({ cart = {}, setCart }) {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Todas las categorías");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;


  const categories = useMemo(() => {
    return ["Todas las categorías", ...new Set(products.map((p) => p.category))];
  }, []);

  const updateQuantity = (id, type, action) => {
    setCart((prev) => {
      const current = prev[id] || { unit: 0, pack: 0 };
      const newValue = action === "increase" ? current[type] + 1 : current[type] - 1;

      if (newValue < 0) return prev;

      const updatedItem = { ...current, [type]: newValue };

      if (updatedItem.unit === 0 && updatedItem.pack === 0) {
        const updatedCart = { ...prev };
        delete updatedCart[id];
        return updatedCart;
      }

      return { ...prev, [id]: updatedItem };
    });
  };

  // Filtrado lógico
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      categoryFilter === "Todas las categorías" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Paginación
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  // Agrupación por categoría 
  const groupedProducts = currentProducts.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Nuestro Catálogo</h2>

      {/* Buscador y Filtros */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input
            id="search-input"
            type="text"
            placeholder="Buscar por producto..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);         
            }}
            className="w-full border border-gray-300 p-2 pl-10 rounded focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => {
            setCategoryFilter(e.target.value); // Cambia la categoría
            setCurrentPage(1);                 // Resetea la página 
          }}
          className="border border-gray-300 p-2 rounded bg-white outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>


      {/* Tabla de Productos Desktop*/}
      <div className="hidden sm:block overflow-x-auto bg-white rounded shadow-sm border border-gray-200">
        <table className="min-w-full leading-normal">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm uppercase">
              <th className="p-4 text-left font-semibold">Producto</th>
              <th className="p-4 text-center font-semibold">Precio Unit.</th>
              <th className="p-4 text-center font-semibold">Cantidad</th>
              <th className="p-4 text-center font-semibold">Precio Pack</th>
              <th className="p-4 text-center font-semibold">U. por Pack</th>
              <th className="p-4 text-center font-semibold">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(groupedProducts).length > 0 ? (
              Object.keys(groupedProducts).map((category) => (
                <Fragment key={category}>
                  <tr className="bg-blue-50">
                    <td colSpan="6" className="px-4 py-2 font-bold text-blue-700 text-xs uppercase tracking-wider">
                      {category}
                    </td>
                  </tr>
                  {groupedProducts[category].map((product) => {
                    const unitQty = cart[product.id]?.unit || 0;
                    const packQty = cart[product.id]?.pack || 0;

                    return (
                      <tr key={product.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="p-4 text-gray-700 font-medium">{product.name}</td>
                        <td className="p-4 text-center text-gray-600 font-mono">${product.unitPrice}</td>

                        {/* Controles UNIT */}
                        <td className="p-4">
                          <div className="flex items-center justify-center mx-auto w-26 h-10 rounded bg-white shadow-md overflow-hidden border border-gray-300">
                            <button
                              onClick={() => updateQuantity(product.id, "unit", "decrease")}
                              disabled={unitQty === 0}
                              className={`
                                flex-1 py-2 font-black text-lg transition-all
                                ${unitQty === 0 
                                  ? 'text-blue-500 opacity-50 cursor-not-allowed' 
                                  : 'text-blue-500 hover:bg-blue-50 active:scale-95'}
                              `}
                            >
                              –
                            </button>

                            <span className="flex-1 text-center font-semibold text-sm">
                              {unitQty}
                            </span>

                            <button
                              onClick={() => updateQuantity(product.id, "unit", "increase")}
                              className="flex-1 py-2 font-black text-lg text-blue-500 hover:bg-blue-50 active:scale-95 transition-all"
                            >
                              +
                            </button>
                          </div>

                        </td>

                        <td className="p-4 text-center text-gray-600 font-mono">${product.packPrice}</td>

                        <td className="p-4 text-center text-gray-400 font-mono">{product.unitsPerPack}</td>

                        {/* Controles PACK */}
                        <td className="p-4">
                          <div className="flex items-center justify-center mx-auto w-26 h-10 rounded bg-white shadow-md overflow-hidden border border-gray-300">
                            <button
                              onClick={() => updateQuantity(product.id, "pack", "decrease")}
                              disabled={packQty === 0}
                              className={`
                                flex-1 py-2 font-black text-lg transition-all
                                ${unitQty === 0 
                                  ? 'text-blue-500 opacity-50 cursor-not-allowed' 
                                  : 'text-blue-500 hover:bg-blue-50 active:scale-95'}
                              `}
                            >-</button>
                            <span className="flex-1 text-center font-semibold text-sm">{packQty}</span>
                            <button
                              onClick={() => updateQuantity(product.id, "pack", "increase")}
                              className="flex-1 py-2 font-black text-lg text-blue-500 hover:bg-blue-50 active:scale-95 transition-all"
                            >+</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </Fragment>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-10 text-center text-gray-400">
                  No se encontraron productos que coincidan con tu búsqueda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>



      {/* Tabla de Productos Mobile */}
      <div className="sm:hidden overflow-x-auto bg-white rounded shadow-sm border border-gray-200">
        <table className="min-w-full leading-normal">
          <tbody>
            {Object.keys(groupedProducts).length > 0 ? (
              Object.keys(groupedProducts).map((category) => (
                <Fragment key={category}>
                  {/* Fila de Categoría */}
                  <tr className="bg-blue-50">
                    <td colSpan="4" className="px-4 py-2 font-bold text-blue-700 text-xs uppercase tracking-wider">
                      {category}
                    </td>
                  </tr>

                  {groupedProducts[category].map((product) => {
                    const unitQty = cart[product.id]?.unit || 0;
                    const packQty = cart[product.id]?.pack || 0;

                    return (
                      <Fragment key={product.id}>
                        <tr className="border-t border-gray-100 ">
                          <td colSpan={3} className="pl-4 py-1">
                            {product.name}
                          </td>
                        </tr>

                        <tr className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="p-1 text-center text-gray-600 font-mono text-sm">${product.unitPrice}</td>
                          <td className="p-4 text-center text-gray-400 text-xs">Unidad</td>
                          
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-center mx-auto w-26 h-10 rounded bg-white shadow-md overflow-hidden border border-gray-300">
                              <button
                                onClick={() => updateQuantity(product.id, "unit", "decrease")}
                                disabled={unitQty === 0}
                                className={`
                                  flex-1 py-2 font-black text-lg transition-all
                                  ${unitQty === 0 
                                    ? 'text-blue-500 opacity-50 cursor-not-allowed' 
                                    : 'text-blue-500 hover:bg-blue-50 active:scale-95'}
                                `}
                              >
                                –
                              </button>

                              <span className="flex-1 text-center font-semibold text-sm">
                                {unitQty}
                              </span>

                              <button
                                onClick={() => updateQuantity(product.id, "unit", "increase")}
                                className="flex-1 py-2 font-black text-lg text-blue-500 hover:bg-blue-50 active:scale-95 transition-all"
                              >
                                +
                              </button>
                            </div>
                          </td>
                        </tr>
                        

                        {/* FILA 2: Controles PACK */}
                        <tr className="hover:bg-gray-50 transition-colors border-b border-gray-50">
                          <td className="p-4 text-center text-gray-600 font-mono text-sm">${product.packPrice}</td>
                          <td className="p-4 text-center text-gray-400 font-mono text-xs">{product.unitsPerPack} u.</td>
                          
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-center mx-auto w-26 h-10 rounded bg-white shadow-md overflow-hidden border border-gray-300">
                              <button
                                onClick={() => updateQuantity(product.id, "pack", "decrease")}
                                disabled={packQty === 0}
                                className={`
                                  flex-1 py-2 font-black text-lg transition-all
                                  ${unitQty === 0 
                                    ? 'text-blue-500 opacity-50 cursor-not-allowed' 
                                    : 'text-blue-500 hover:bg-blue-50 active:scale-95'}
                                `}
                              >-</button>
                              <span className="flex-1 text-center font-semibold text-sm">{packQty}</span>
                              <button
                                onClick={() => updateQuantity(product.id, "pack", "increase")}
                                className="flex-1 py-2 font-black text-lg text-blue-500 hover:bg-blue-50 active:scale-95 transition-all"
                              >+</button>
                            </div>
                          </td>
                        </tr>
                      </Fragment>
                    );
                  })}
                </Fragment>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-10 text-center text-gray-400">
                  No se encontraron productos que coincidan con tu búsqueda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>


      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-14 w-full">
          <nav className="flex items-center gap-1 bg-white p-1.5 rounded border border-slate-200/60 shadow-sm transition-all hover:shadow-md">
            
            {/* Botón Anterior */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center justify-center w-10 h-10 rounded text-slate-500 transition-all hover:bg-slate-50 hover:text-slate-900 disabled:opacity-20 disabled:hover:bg-transparent cursor-pointer active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>

            {/* Divisor Sutil */}
            <div className="w-[1px] h-6 bg-slate-200 mx-1" />

            {/* Números */}
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((page) => {
                  const range = window.innerWidth < 640 ? 1 : 2;
                  const start = Math.max(1, currentPage - range);
                  const end = Math.min(totalPages, currentPage + range);
                  if (currentPage <= range + 1) return page <= (range * 2 + 1);
                  if (currentPage >= totalPages - range) return page >= totalPages - (range * 2);
                  return page >= start && page <= end;
                })
                .map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`relative w-10 h-10 rounded text-[13px] font-bold transition-all duration-200 flex items-center justify-center ${
                      currentPage === page
                        ? "bg-blue-500 text-white"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {page}
                    {currentPage === page && (
                      <span className="absolute -bottom-1 w-1 h-1 bg-white rounded" />
                    )}
                  </button>
                ))}
            </div>

            {/* Divisor Sutil */}
            <div className="w-[1px] h-6 bg-slate-200 mx-1" />

            {/* Botón Siguiente */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center w-10 h-10 rounded text-slate-500 transition-all hover:bg-slate-50 hover:text-slate-900 disabled:opacity-20 disabled:hover:bg-transparent cursor-pointer active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>

          </nav>
        </div>
      )}
    </div>
  );
}

export default Catalog;