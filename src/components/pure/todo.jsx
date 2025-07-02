import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({onClick, complited: completed, text, id}) => {
    return (
        <li onClick={onClick} style={{textDecoration: completed? 'line-through' : 'none',  textDecorationColor: completed? 'green': 'none', color: completed? 'green': 'white'}}>
        {id} - {text}   

        </li>
    );
}
Todo.propTypes = {
    onClick: React.PropTypes.func.isRequired,
    complited: React.PropTypes.bool.isRequired,
    text: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired
};

export default Todo;
