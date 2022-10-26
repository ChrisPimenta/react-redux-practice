const redux = require('redux');

const defaultState = {
    count: 0
};

const counterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return defaultState;
    }
}

const store = redux.createStore(counterReducer);

export default store;
