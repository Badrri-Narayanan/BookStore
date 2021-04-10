import BooksListActionTypes from "./list_of_books.types";

const INITIAL_STATE = {
    listOfBooks : [],
}

const bookListReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case BooksListActionTypes.SET_LIST_OF_BOOKS:
            return {
                ...state,
                listOfBooks: action.payload,
            }
        default:
            return state
    }
}

export default bookListReducer;
