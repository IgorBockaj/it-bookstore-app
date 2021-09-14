import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  books: booksReducer,
});

export default rootReducer;
