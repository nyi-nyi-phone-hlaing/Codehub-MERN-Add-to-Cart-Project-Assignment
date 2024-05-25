import { useContext } from "react";
import Cart from "./Cart";
import { ItemContext } from "../store/itemContext";

const CartList = () => {
  const { items } = useContext(ItemContext);
  return (
    <section className='w-full h-calc-full-minus-7.5rem overflow-auto p-3 xs:h-calc-full-minus-6.5rem'>
      {items.length > 0 ? (
        items.map((item) => {
          return <Cart key={item.id} item={item} />;
        })
      ) : (
        <p className='text-sm text-gray-500'>No items in your cart !!</p>
      )}
    </section>
  );
};

export default CartList;
