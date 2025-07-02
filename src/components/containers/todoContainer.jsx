import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../pure/todoList'

import { TOGGLE_TODO, ADD_TODO, toggleTodo } from '../../store/actions/actions'


//Filtrar la lista de todos y pasarlos como props al componente TodoList
const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todosState, state.filterState),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}
//Este componete no regresa un compnete como tal sino que nos permite conectar el estado de Redux con el componente TodoList
//Pero si te permite manejarlo como un componente en el App.js
const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoContainer;