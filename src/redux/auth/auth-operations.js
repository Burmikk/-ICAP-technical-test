import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../../shared/api/authApi";

export const login = createAsyncThunk("auth/login", async (value, { rejectWithValue }) => {
    try {
        const result = await loginApi(value);
        console.log("result--->", result);
        return result;
    } catch ({ response }) {
        return rejectWithValue(response);
    }
});
