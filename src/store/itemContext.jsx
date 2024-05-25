import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import ItemReducer from "../reducers/ItemReducer";
import { initialState } from "../utils/initialState";

export const ItemContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  removeAllItem: () => {},
});

const ItemContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ItemReducer, initialState);
  const addItemHandler = (item) => {
    dispatch({ type: "ADD", item });
  };
  const removeItemHandler = (id) => {
    dispatch({ type: "REMOVE", id });
  };
  const removeAllItemHandler = () => {
    dispatch({ type: "REMOVE_ALL" });
  };

  const itemControl = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    removeAllItem: removeAllItemHandler,
  };
  return (
    <ItemContext.Provider value={itemControl}>{children}</ItemContext.Provider>
  );
};

ItemContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemContextProvider;
