import { useState } from "react";
import Backdrop from "../components/Backdrop";
import CartContainer from "../components/CartContainer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Banner from "../components/Banner";

function Main() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <div className='relative font-poppins w-full h-screen bg-slate-50 flex justify-center items-center overflow-hidden'>
      <section className='relative w-full h-screen bg-blue-50 overflow-y-scroll xl:w-2/3 '>
        <Navbar showCartHandler={showCartHandler} />
        <Banner />
        <ProductList />
      </section>
      <Backdrop showCart={showCart}>
        <CartContainer hideCartHandler={hideCartHandler} />
      </Backdrop>
    </div>
  );
}

export default Main;
