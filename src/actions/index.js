import { ADD_BOOK_TO_CART, FETCH_BOOKS, REMOVE_BOOK_FROM_CART } from "./types";

export const addBookToCart = (book) => {
  return {
    type: ADD_BOOK_TO_CART,
    payload: {
      title: book.title,
      price: book.price,
      id: book.isbn13,
    },
  };
};

export const removeBookFromCart = (book) => {
  return {
    type: REMOVE_BOOK_FROM_CART,
    payload: { id: book.isbn13 },
  };
};

export const fetchBooks = (book, page) => async (dispatch) => {
  const response = await fetch(
    `https://api.itbook.store/1.0/search/${book}/${page}`
  ).then((res) => res.json());

  dispatch({
    type: FETCH_BOOKS,
    payload: response.books,
  });
};
