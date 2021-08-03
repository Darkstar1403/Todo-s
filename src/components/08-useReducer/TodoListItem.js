import PropTypes from 'prop-types';
import React from 'react';

export const TodoListItem = React.memo(({todo, index, handleDelete, handleToggle}) =>{
    
    return ( 
        <li
            className='list-group-item' key={todo.id}
        >
            <p className={todo.done?'complete':''}
                onClick={() => handleToggle(todo.id)} >{index+1}.{todo.desc}</p>
            <button className='btn btn-danger' onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
    )
})

TodoListItem.propTypes ={
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle:PropTypes.func.isRequired
}