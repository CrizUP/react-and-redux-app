import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';


export const createAppStore = () => {
    let store = configureStore({
        reducer: rootReducer,
        // Puedes agregar middleware, devTools, etc. aquí si lo necesitas
    });
    return store;
}