import { Fragment, useState, useMemo } from "react";
import products from "../data/products";
import { CiSearch } from "react-icons/ci";

function Catalog({ cart = {}, setCart }) {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Todas las categorías");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  // 1. Optimización: Memorizar las categorías para no recalcular en cada render
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

  // 2. Filtrado lógico
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      categoryFilter === "Todas las categorías" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // 3. Paginación
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  // 4. Agrupación por categoría (solo de los productos visibles)
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
            type="text"
            placeholder="Buscar por producto..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);         
            }}
            className="w-full border border-gray-300 p-2 pl-10 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => {
            setCategoryFilter(e.target.value); // Cambia la categoría
            setCurrentPage(1);                 // Resetea la página aquí mismo
          }}
          className="border border-gray-300 p-2 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Tabla de Productos */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
        <table className="min-w-full leading-normal">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm uppercase">
              <th className="p-4 text-left font-semibold">Producto</th>
              <th className="p-4 text-center font-semibold">Precio Unit.</th>
              <th className="p-4 text-center font-semibold">Cantidad</th>
              <th className="p-4 text-center font-semibold">Precio Pack</th>
              <th className="p-4 text-center font-semibold">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(groupedProducts).length > 0 ? (
              Object.keys(groupedProducts).map((category) => (
                <Fragment key={category}>
                  <tr className="bg-blue-50/50">
                    <td colSpan="5" className="px-4 py-2 font-bold text-blue-700 text-xs uppercase tracking-wider">
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
                          <div className="flex items-center justify-center border rounded-lg w-24 mx-auto overflow-hidden">
                            <button
                              onClick={() => updateQuantity(product.id, "unit", "decrease")}
                              disabled={unitQty === 0}
                              className={`flex-1 py-1 hover:bg-gray-100 transition-colors ${unitQty === 0 ? 'text-gray-300' : 'text-red-500 font-bold'}`}
                            >-</button>
                            <span className="flex-1 text-center font-semibold text-sm">{unitQty}</span>
                            <button
                              onClick={() => updateQuantity(product.id, "unit", "increase")}
                              className="flex-1 py-1 hover:bg-gray-100 text-green-600 font-bold transition-colors"
                            >+</button>
                          </div>
                        </td>

                        <td className="p-4 text-center text-gray-600 font-mono">${product.packPrice}</td>

                        {/* Controles PACK */}
                        <td className="p-4">
                          <div className="flex items-center justify-center border rounded-lg w-24 mx-auto overflow-hidden">
                            <button
                              onClick={() => updateQuantity(product.id, "pack", "decrease")}
                              disabled={packQty === 0}
                              className={`flex-1 py-1 hover:bg-gray-100 transition-colors ${packQty === 0 ? 'text-gray-300' : 'text-red-500 font-bold'}`}
                            >-</button>
                            <span className="flex-1 text-center font-semibold text-sm">{packQty}</span>
                            <button
                              onClick={() => updateQuantity(product.id, "pack", "increase")}
                              className="flex-1 py-1 hover:bg-gray-100 text-green-600 font-bold transition-colors"
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-lg disabled:opacity-30 hover:bg-gray-50 transition-all font-medium text-sm"
          >
            Anterior
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((page) => {
                // Definimos el rango: 2 a la izquierda y 2 a la derecha
                const start = Math.max(1, currentPage - 2);
                const end = Math.min(totalPages, currentPage + 2);
                
                // Ajuste para que siempre muestre 5 si es posible al principio o al final
                if (currentPage <= 3) return page <= 5;
                if (currentPage >= totalPages - 2) return page >= totalPages - 4;

                return page >= start && page <= end;
              })
              .map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg border font-semibold text-sm transition-all ${
                    currentPage === page
                      ? "bg-blue-600 text-white border-blue-600 shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-50 shadow-sm"
                  }`}
                >
                  {page}
                </button>
              ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-lg disabled:opacity-30 hover:bg-gray-50 transition-all font-medium text-sm"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}

export default Catalog;