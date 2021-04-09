import AccessLevelActionTypes from "./acess-level.types"

const INITIAL_STATE = {
    accessLevel : '',
}

const accessLevelReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case AccessLevelActionTypes.SET_ACCESS_LEVEL:
            return {
                ...state,
                accessLevel : action.payload,
            }
        default:
            return state;
    }
}

export default accessLevelReducer;
