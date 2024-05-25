import { useContext } from "react";
import CartList from "./CartList";
import PropTypes from "prop-types";
import { ItemContext } from "../store/itemContext";
import { FaXmark } from "react-icons/fa6";

const CartContainer = ({ hideCartHandler }) => {
  const { items, removeAllItem, totalAmount } = useContext(ItemContext);
  const totalCart = items.reduce((currentVal, item) => {
    return currentVal + item.amount;
  }, 0);

  const orderHandler = () => {
    alert("Ordering...");
  };

  const removeAllItemHandler = () => {
    removeAllItem({ type: "REMOVE_ALL" });
  };

  return (
    <div className='absolute w-full h-screen rounded-md overflow-hidden shadow-lg top-1/2 left-1/2 translate-x -translate-x-1/2 -translate-y-1/2 bg-blue-50 lg:w-1/2 md:w-2/3 sm:max-h-96 sm:w-3/4'>
      <header className='h-14 flex items-center justify-between px-3 py-2 bg-blue-100'>
        <div>
          <h1 className='text-blue-500 font-bold text-base'>Shopping Cart</h1>
          <p className='text-slate-700 text-xs'>
            Cart items :{" "}
            <span className='text-indigo-600 font-bold'>{totalCart}</span> pcs
          </p>
        </div>
        <button
          className=' flex items-center justify-center bg-indigo-500 text-white text-xs px-2 py-1 rounded-md shadow-inner'
          onClick={hideCartHandler}>
          <FaXmark />
        </button>
      </header>
      <CartList />
      <footer className='h-16 flex items-end flex-col justify-between px-3 py-2 bg-blue-100 xs:h-12 xs:flex-row'>
        <h1 className='font-bold text-sm text-gray-700'>
          Total -{" "}
          <span className='font-semibold text-indigo-600'>
            ${totalAmount.toFixed(2)}
          </span>
        </h1>
        <div className='flex gap-2'>
          {items.length > 0 && (
            <button
              className='min-w-24 bg-rose-500 text-white text-xs py-1 rounded-md shadow-inner hover:bg-rose-600'
              onClick={removeAllItemHandler}>
              Remove All
            </button>
          )}

          <button
            className='min-w-32 bg-indigo-500 text-white text-xs py-1 rounded-md shadow-inner hover:bg-indigo-600'
            onClick={items.length > 0 ? orderHandler : hideCartHandler}>
            {items.length > 0 ? "Order Now" : "Find something"}
          </button>
        </div>
      </footer>
    </div>
  );
};

CartContainer.propTypes = {
  hideCartHandler: PropTypes.func,
};

export default CartContainer;
