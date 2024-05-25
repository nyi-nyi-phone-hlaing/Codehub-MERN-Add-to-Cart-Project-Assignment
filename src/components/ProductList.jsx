import Product from "./Product";
import products from "../products";

const ProductList = () => {
  return (
    <section className='w-full h-screen bg-blue-50 overflow-y-scroll grid gap-2 p-2 grid-cols-2 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2'>
      {products.length > 0 &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </section>
  );
};

export default ProductList;
