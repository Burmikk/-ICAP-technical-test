import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers } from "./users-operations";

const initialState = {
    nextPage: null,
    prevPage: null,
    users: [],
    loading: false,
    error: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllUsers.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.users = payload.results;
                state.nextPage = payload.next;
                state.prevPage = payload.previous;
            })
            .addCase(fetchAllUsers.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    },
});

export default usersSlice.reducer;
