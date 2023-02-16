import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: {isLoginIn},
    reducers: {
        login(state) { state.isLoginIn = true},
        logout(state) { state.isLoginIn = false}
    }
});

export const authActions = authSlice.actions

export default authSlice