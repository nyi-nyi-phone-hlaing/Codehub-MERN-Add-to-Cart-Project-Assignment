import PropTypes from "prop-types";
import { useContext } from "react";
import { ItemContext } from "../store/itemContext";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = ({ showCartHandler }) => {
  const { items } = useContext(ItemContext);
  const totalCart = items.reduce((currentVal, item) => {
    return currentVal + item.amount;
  }, 0);
  return (
    <div className='w-full h-12 bg-blue-100 flex justify-between items-center px-5'>
      <h1 className='font-bold text-blue-500'>SHOP.IO</h1>
      <button
        className='bg-blue-500 text-white px-2 py-1 rounded-sm text-sm hover:bg-blue-700 flex items-center gap-1'
        onClick={showCartHandler}>
        {" "}
        <FaCartShopping />
        Cart (<span className='font-bold'>{totalCart}</span>)
      </button>
    </div>
  );
};

Navbar.propTypes = {
  showCartHandler: PropTypes.func,
};

export default Navbar;
