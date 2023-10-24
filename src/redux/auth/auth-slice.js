const { createSlice } = require("@reduxjs/toolkit");
const { login } = require("./auth-operations");

const initialState = {
    status: null,
    loading: false,
    isLogin: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.status = payload;
        });
        builder.addCase(login.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload.status;
        });
    },
});

export default authSlice.reducer;
