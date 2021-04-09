import AccessLevelActionTypes from "./acess-level.types";

export const setAccessLevel = (accessLevel) => ({
    type : AccessLevelActionTypes.SET_ACCESS_LEVEL,
    payload : accessLevel,
});
