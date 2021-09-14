import { ADD_BOOK_TO_CART, REMOVE_BOOK_FROM_CART } from "../actions/types";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK_TO_CART:
      return [...state, action.payload];
    case REMOVE_BOOK_FROM_CART:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default cartReducer;
