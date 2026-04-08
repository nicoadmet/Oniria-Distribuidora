import Catalog from "./Catalog";
import Events from "./Events";

const Home = ({ cart, setCart }) => {
  return (
    <div className="flex flex-col">
      <section id="catalog" className="py-10 bg-stone-50 min-h-screen">
        <Catalog cart={cart} setCart={setCart} /> 
      </section>
      
      <section id="events" className="py-20 bg-stone-50">
        <Events />
      </section>
    </div>
  )
}

export default Home