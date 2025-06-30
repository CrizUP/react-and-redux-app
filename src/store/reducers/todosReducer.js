import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "../actions/actions";

let inicialState = [];

const todosReducer = (state = inicialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.payload.id ? { 
                    ...todo, 
                    completed: !todo.completed } 
                    : todo
            );
        case SET_VISIBILITY_FILTER:
            return state; // This action does not change the todos, just the filter
        default:
            return state;
    }
}