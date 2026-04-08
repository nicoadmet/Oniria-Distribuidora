import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";

import NavBar from "./components/NavBar";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";

import products from "./data/products"
import WhatsappButton from "./components/WhatsappButton";

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

      < WhatsappButton />
      <Footer />
    </BrowserRouter>
  );
};

export default App;