import { combineReducers } from 'redux';
import accessLevelReducer from './access-level/access-level.reducer';
import isSignedInReducer from './is-signed-in/is-signed-in.reducer';
import authorsListReducer from './list_of_authors/list_of_authors.reducer';

const rootReducer = combineReducers({
    access_level : accessLevelReducer,
    is_signed_in : isSignedInReducer,
    authors_list : authorsListReducer,
})

export default rootReducer;