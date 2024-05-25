import PropTypes from "prop-types";
import { useContext } from "react";
import { ItemContext } from "../store/itemContext";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa6";
const Cart = ({ item }) => {
  const { id, title, image, category, rating, amount, price } = item;
  const { addItem, removeItem } = useContext(ItemContext);

  const addItemHandler = () => {
    addItem({ ...item, amount: 1 });
  };
  const removeItemHandler = () => {
    removeItem(id);
  };
  return (
    <div className='h-28 flex items-center justify-start gap-3 p-2 bg-white shadow-md rounded-md mb-2'>
      <img
        src={image}
        alt={title}
        className='w-20 h-full bg-slate-900 rounded-md'
      />
      <div className='h-full'>
        <h1 className='text-sm font-bold text-blue-500 mb-1'>{title}</h1>
        <ul className='mb-2 flex overflow-hidden items-center'>
          <li className='text-xs text-gray-300 text-nowrap mr-2'>
            <span className='text-slate-700 font-bold '>{category}</span>
          </li>
          <li className='text-xs text-gray-500 flex  mr-2'>
            {" | "}
            <span className='text-orange-500 font-bold flex items-center gap-1'>
              <FaStar className='size-3' /> {rating}
            </span>
          </li>
          <li className='text-xs text-gray-500'>
            {" | "} <span className='text-blue-500 font-bold'>${price}</span>
          </li>
        </ul>
        <div className='flex justify-start items-center gap-2'>
          <button
            className='flex items-center justify-center bg-blue-200 size-7 text-blue-700 border duration-200 border-blue-700 rounded-sm active:bg-blue-400 active:border-slate-900 active:text-slate-900'
            onClick={removeItemHandler}>
            <FaMinus />
          </button>
          <p className='w-20 text-center text-indigo-700 text-base font-bold'>
            {amount}
          </p>
          <button
            className=' flex items-center justify-center bg-blue-200 size-7 text-blue-700 border duration-200 border-blue-700 rounded-sm active:bg-blue-400 active:border-slate-900 active:text-slate-900'
            onClick={addItemHandler}>
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  item: PropTypes.object,
};

export default Cart;
