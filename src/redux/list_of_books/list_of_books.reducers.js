import BooksListActionTypes from "./list_of_books.types";

const INITIAL_STATE = {
    listOfBooks : [],
    searchQuery : '',
    selectedAuthorId : '',
}

const bookListReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case BooksListActionTypes.SET_LIST_OF_BOOKS:
            return {
                ...state,
                listOfBooks: action.payload,
            }
        case BooksListActionTypes.SET_BOOK_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
            }
        case BooksListActionTypes.SET_SELECTED_AUTHOR_ID:
            return {
                ...state,
                selectedAuthorId: action.payload,
            }
        default:
            return state
    }
}

export default bookListReducer;
