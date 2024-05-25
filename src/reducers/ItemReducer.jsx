import { initialState } from "../utils/initialState";

const ItemReducer = (state, action) => {
  if (action.type === "ADD") {
    let updateTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    let existItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    let existedItem = state.items[existItemIndex];
    let updatedItems;

    if (existedItem) {
      const updatedItem = {
        ...existedItem,
        amount: existedItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    let existItemIndex = state.items.findIndex((item) => item.id === action.id);
    let existedItem = state.items[existItemIndex];
    let updateTotalAmount = state.totalAmount - existedItem.price;
    let updatedItems;
    if (existedItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existedItem,
        amount: existedItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  } else if (action.type === "REMOVE_ALL") {
    return initialState;
  }
  return initialState;
};

export default ItemReducer;
