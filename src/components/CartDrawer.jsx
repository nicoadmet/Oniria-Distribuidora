
const CartDrawer = ( {cart, products, isOpen, setIsCartOpen, setCart} ) => {
  const items = Object.entries(cart); //convierete en array 

  const getProduct = (id) => {
    return products.find((p) => p.id === Number(id))
  }

  const total = items.reduce((acc, [id, item]) => {
    const product = getProduct(id);
    if (!product) return acc;

    return (
      acc +
      item.unit * product.unitPrice +
      item.pack * product.packPrice 
    )
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

      const newValue =
        action === "increase"
          ? current[type] + 1
          : current[type] - 1;

      if (newValue < 0) return prev;

      const updatedItem = {
        ...current,
        [type]: newValue
      };

      if (updatedItem.unit === 0 && updatedItem.pack === 0) {
        const updatedCart = { ...prev };
        delete updatedCart[id];
        return updatedCart;
      }

      return {
        ...prev,
        [id]: updatedItem
      };
    });
  };

  const clearCart = () => {
    setCart({});
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-90 bg-white shadow-lg transform transition-all duration-300 ease-in-out z-50 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold">Carrito</h2>
              <button onClick={() => setIsCartOpen(false)}>X</button>
          </div>

          {/* Items */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto">
          {items.length === 0 ? (
            <p>Carrito vacío</p>
          ) : (
            items.map(([id, item]) => {
              const product = getProduct(id);
              if (!product) return null;

              const subtotal =
                item.unit * product.unitPrice +
                item.pack * product.packPrice;

              return (
                <div key={id} className="border p-2 rounded">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{product.name}</p>

                    <button
                      onClick={() => removeItem(id)}
                      className="text-red-500 font-bold"
                    >
                      ✕
                    </button>
                  </div>

                <div className="flex items-center justify-between text-sm mb-1">
                  <span>por unidad: ${product.unitPrice}</span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(id, "unit", "decrease")}
                      className="px-2 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <span>{item.unit}</span>

                    <button
                      onClick={() => updateQuantity(id, "unit", "increase")}
                      className="px-2 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span>por pack: ${product.packPrice}</span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(id, "pack", "decrease")}
                      className="px-2 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <span>{item.pack}</span>

                    <button
                      onClick={() => updateQuantity(id, "pack", "increase")}
                      className="px-2 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                  <p className="font-bold text-right">
                    ${subtotal}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Total */}
        <div className="p-4 border-t bg-white">
          <p className="font-bold text-lg">Total: ${total}</p>

          <button className="w-full bg-blue-500 text-white py-2 mt-2 rounded">
            Finalizar compra  
          </button>
          <button 
            className="w-full bg-red-500 text-white py-2 mt-2 rounded"
            onClick={() => clearCart()}  
          >
            Vaciar Carrito
          </button>        
        </div>
      </div>
    </>
  )
}

export default CartDrawer