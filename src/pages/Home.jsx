import Catalog from "./Catalog";
import Events from "./Events";
import Wholesale from "./wholesale";

const Home = ({ cart, setCart }) => {
  return (
    <div className="flex flex-col">
      <section id="catalog" className="py-10 bg-white">
        <Catalog cart={cart} setCart={setCart} />
      </section>

      <section id="events" className="py-20 bg-slate-50">
        <Events />
      </section>

      <section id="wholesale" className="py-20 bg-white">
        <Wholesale />
      </section>
    </div>
  )
}

export default Home