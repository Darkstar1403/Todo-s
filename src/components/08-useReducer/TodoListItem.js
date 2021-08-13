import PropTypes from 'prop-types';
import React from 'react';

export const TodoListItem = React.memo(({todo, index, handleDelete, handleToggle}) =>{
    
    return ( 
        <li
            className='list-group-item' key={todo.id}
        >
            <p className={todo.done?'complete overflow-ellipsis':'overflow-ellipsis'}
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

//si le aplicamos un memo a un componente es necesario definir displayName
//Para que las pruebas unitarias detecten el componenteu
TodoListItem.displayName='TodoListItem';