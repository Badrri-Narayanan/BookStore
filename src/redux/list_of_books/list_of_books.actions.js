import BooksListActionTypes from "./list_of_books.types";

export const setListOfBooks = (booksList) => ({
    type : BooksListActionTypes.SET_LIST_OF_BOOKS,
    payload : booksList,
});
