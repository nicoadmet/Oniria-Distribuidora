import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Events from "./pages/Events";
import Whosale from "./pages/Whosale";

import NavBar from "./components/NavBar";
import CartDrawer from "./components/CartDrawer";

import products from "./data/products"

const App = () => {
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <NavBar cart={cart} setIsCartOpen={setIsCartOpen} />
      <CartDrawer cart={cart} isOpen={isCartOpen} setIsCartOpen={setIsCartOpen} setCart={setCart} products={products} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/catalog"
          element={<Catalog cart={cart} setCart={setCart} />}
        />
        <Route path="/events" element={<Events />} />
        <Route path="/whosale" element={<Whosale />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;