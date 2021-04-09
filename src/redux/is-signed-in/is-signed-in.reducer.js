import isSignedInActionTypes from "./is-signed-in.types"

const INITIAL_STATE = {
    isSignedIn : false,
}

const isSignedInReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case isSignedInActionTypes.SET_SIGNED_IN_STATE :
            return {
                ...state,
                isSignedIn : true,
            }
        default:
            return state
    }
}

export default isSignedInReducer;