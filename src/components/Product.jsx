import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { ItemContext } from "../store/itemContext";
import { FaCoins, FaMinus, FaPlus, FaShapes, FaStar } from "react-icons/fa6";
const Product = ({ product }) => {
  const [count, setCount] = useState(0);
  const { addItem } = useContext(ItemContext);
  const { id, title, image, category, price, rating } = product;
  const decreaseHandler = () => {
    if (count <= 0) {
      return alert("Invalide item amount");
    }
    setCount((prev) => prev - 1);
  };
  const increaseHandler = () => {
    setCount((prev) => prev + 1);
  };

  const addToCartHandler = () => {
    if (count <= 0) {
      return alert("Add item count is at least 1 or more");
    }
    addItem({
      id,
      title,
      image,
      category,
      price,
      rating,
      amount: count,
    });
    setCount(0);
  };

  return (
    <div className='w-full bg-white shadow-md duration-200 rounded-md border-2 border-gray-400 hover:bg-gray-100  hover:border-blue-500 hover:shadow-xl '>
      <div className='w-full bg-white rounded-md aspect-[2/1]'>
        <img src={image} alt={title} className='w-full h-full object-cover' />
      </div>
      <div className='p-3'>
        <h1 className='text-sm text-blue-500 mb-2'>
          {title.length > 25 ? title.substring(0, 25) + "..." : title}
        </h1>
        <ul className='mb-2 overflow-hidden'>
          <li className='text-xs text-gray-500 mb-1 text-nowrap flex items-center gap-2'>
            <FaShapes /> -
            <span className='text-slate-700 font-bold '>{category}</span>
          </li>
          <li className='text-xs text-gray-500 mb-1 flex items-center gap-2'>
            <FaStar /> -{" "}
            <span className='text-orange-500 font-bold'>{rating}</span>
          </li>
          <li className='text-xs text-gray-500 mb-1 flex items-center gap-2'>
            <FaCoins /> -{" "}
            <span className='text-blue-500 font-bold'>{price}</span> USD
          </li>
        </ul>

        <div className='mb-3 flex justify-start items-center gap-2 '>
          <button
            className={`bg-blue-200 size-7 text-blue-700 border duration-200 flex items-center justify-center border-blue-700 rounded-sm active:bg-blue-400 active:border-slate-900 active:text-slate-900 ${
              count <= 0 && "opacity-50 pointer-events-none"
            }`}
            onClick={decreaseHandler}>
            <FaMinus />
          </button>

          <p className='w-20 text-center text-indigo-700 text-base font-bold'>
            {count}
          </p>
          <button
            className='bg-blue-200 size-7 text-blue-700 border duration-200 border-blue-700 rounded-sm flex items-center justify-center active:bg-blue-400 active:border-slate-900 active:text-slate-900'
            onClick={increaseHandler}>
            <FaPlus />
          </button>
        </div>
        <button
          className='w-full bg-blue-500 text-white px-2 py-1 rounded-sm text-sm  hover:bg-blue-700'
          onClick={addToCartHandler}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
