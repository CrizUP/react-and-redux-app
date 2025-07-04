import { combineReducers } from "redux";
import {todosReducer} from "./todosReducer";
import {filterReducer} from "./filterReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers (
    {
        todosState: todosReducer,
        filterState: filterReducer,
        // Ejemplo del login asincrono
        userState: userReducer
    }
)