import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({submit}) => {

    const newText = useRef(null);

    return (
        <div>
            <h2>Add a new Todo</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                submit(newText.current.value);
                newText.current.value = '';
            }}>
                <input type="text" ref={newText} placeholder="Ingresa la descripción de la tarea" />
                <button type="submit">Crear Todo</button>
            </form>
        </div>
    );
}

TodoForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default TodoForm;
