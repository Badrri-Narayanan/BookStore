import BooksListActionTypes from "./list_of_books.types";

export const setListOfBooks = (booksList) => ({
    type : BooksListActionTypes.SET_LIST_OF_BOOKS,
    payload : booksList,
});

export const setBookSearchQuery = (query) => ({
    type : BooksListActionTypes.SET_BOOK_SEARCH_QUERY,
    payload : query,
})

export const setSelectedAuthorId = (id) => ({
    type : BooksListActionTypes.SET_SELECTED_AUTHOR_ID,
    payload : id,
})
