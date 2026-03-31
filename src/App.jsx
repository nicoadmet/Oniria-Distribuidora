import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Events from "./pages/Events";
import Wholesale from "./pages/wholesale";

import NavBar from "./components/NavBar";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";

import products from "./data/products"

const App = () => {
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <NavBar cart={cart} setIsCartOpen={setIsCartOpen} />
      <CartDrawer cart={cart} isOpen={isCartOpen} setIsCartOpen={setIsCartOpen} setCart={setCart} products={products} />

      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;