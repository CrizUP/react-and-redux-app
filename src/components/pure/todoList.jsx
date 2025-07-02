import React from 'react';
import PropTypes from 'prop-types';
const TodoList = ({todos, onClick}) => {
    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                <li>Todo 1</li>
                <li>Todo 2</li>
                <li>Todo 3</li>
            </ul>
            <input type="text" placeholder="Add a new todo" />
            <button>Add Todo</button>
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
    onClick: PropTypes.func.isRequired
};

export default TodoList;
