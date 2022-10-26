import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {
    counter: 0,
    showCounter: true
};

// Prepare slice of global state
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        // Reducers are just functions
        increment(state) {
            // Internally uses immer - can edit state
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

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

const store = configureStore({
    // Here we can just keep adding the reducers into the object map and it will automatically do combineReducers to make a main reducer.
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});

// slice.actions are automatic unique action identifier keys
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
