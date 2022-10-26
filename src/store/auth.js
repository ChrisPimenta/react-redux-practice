import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
    isAuth: false
};

// Prepare slice of global state
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuth = true;
        },
        logout(state) {
            state.isAuth = false;
        },
    }
});

export const authActions = authSlice.actions;

export default authSlice;