import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';
const TodoList = ({ todos, onTodoClick }) => {
    return (
        <div>
            <h1>Your Todo List</h1>
            <ul>
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        onClick={() => onTodoClick(todo.id)}
                        completed={todo.completed}
                        text={todo.text}
                        id={todo.id}
                    />
                ))}
            </ul>
            {/* <input type="text" placeholder="Add a new todo" />
            <button>Add Todo</button> */}
        </div>
    );
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
