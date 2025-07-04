import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers/rooteducer';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from '../sagas/sagas';


export const createAppStore = () => {
    let store = configureStore({
        reducer: rootReducer,
        // Puedes agregar middleware, devTools, etc. aquí si lo necesitas
    });
    return store;
}
export const createAsyncAppStore = () => {

    const sagaMiddleware = createSagaMiddleware();
    let store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
        // Puedes agregar middleware, devTools, etc. aquí si lo necesitas
    });
    // Necesitamos inicializar el Watcher Saga 
    sagaMiddleware.run(watcherSaga);
    return store;
}