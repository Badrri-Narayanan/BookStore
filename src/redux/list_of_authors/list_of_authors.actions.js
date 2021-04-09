import AuthorsListActionTypes from "./list_of_authors.types";

export const setListOfAuthors = (authorsList) => ({
    type : AuthorsListActionTypes.SET_LIST_OF_AUTHORS,
    payload : authorsList,
});
