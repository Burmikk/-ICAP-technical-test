import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers } from "../../shared/api/usersApi";

export const fetchAllUsers = createAsyncThunk("users/fetchAll", async (value, { rejectWithValue }) => {
    try {
        const { data } = await getAllUsers(value);
        return data;
    } catch ({ response }) {
        return rejectWithValue(response);
    }
});
