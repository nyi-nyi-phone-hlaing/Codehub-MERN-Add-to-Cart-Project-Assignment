import PropTypes from "prop-types";

const Backdrop = ({ children, showCart }) => {
  return (
    <section
      className={`absolute w-full h-screen bg-slate-900 bg-opacity-50 overflow-hidden xl:w-2/3 duration-300 ${
        showCart
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}>
      {children}
    </section>
  );
};

Backdrop.propTypes = {
  children: PropTypes.node,
  showCart: PropTypes.bool.isRequired,
};

export default Backdrop;
