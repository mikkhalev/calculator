import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./redusers";

const presistedState = JSON.parse(localStorage.getItem('calculatorState'))
    ? JSON.parse(localStorage.getItem('calculatorState'))
    : undefined

const store = configureStore({
    reducer: rootReducer,
    preloadedState: presistedState,
})

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('calculatorState', JSON.stringify(state));
})

export default store;