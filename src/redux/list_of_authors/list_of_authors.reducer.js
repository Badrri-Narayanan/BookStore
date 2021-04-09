import AuthorsListActionTypes from "./list_of_authors.types"

const INITIAL_STATE = {
    listOfAuthors : []
}

const authorsListReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case AuthorsListActionTypes.SET_LIST_OF_AUTHORS :
            return {
                ...state,
                listOfAuthors : action.payload
            }
        default:
            return state;
    }
}

export default authorsListReducer;
