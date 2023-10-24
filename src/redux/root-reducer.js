import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/auth-slice";
import usersSlice from "./users/users-slice";

const rootReducer = combineReducers({
    auth: authSlice,
    users: usersSlice,
});

export default rootReducer;
