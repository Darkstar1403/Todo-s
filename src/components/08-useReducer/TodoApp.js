import React, {useReducer, useEffect, useCallback} from 'react';
import './styles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';


export const TodoApp = () => {

    const init = () =>{

        return JSON.parse(localStorage.getItem('todos')) || [];
        // return [{
        //     id: new Date().getTime(),
        //     desc: 'Learn React',
        //     done: false
        // }];
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete = useCallback((todoId) =>{

        const action ={
            type: 'delete',
            payload: todoId
        }
        
        dispatch(action);
    }, []);

    const handleToggle = useCallback((todoId) =>{
        dispatch({type: 'toggle', payload: todoId})
    }, []);

    const handleAddTodo= (newTodo) =>{

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);

    }


    return (
        <div>
            <h1>ToDoApp ({todos.length})</h1>
            <hr/>
            <div className='row'>
                <div className='col-12 col-sm-7'>
                    <h4>ToDo's</h4>
                    <hr/>
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
                </div>
                <div className='col-12 col-sm-5'>
                    <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </div>
    )
}
