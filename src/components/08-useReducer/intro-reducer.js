const initialState = [{
    id:1,
    todo: 'Buy tacos',
    done: false
  }];
  
  
  const todoReducer = (state = initialState, action) =>{
  
      if(action?.type ==='add'){
        return [...state, action.payload];
      }
  
      return state;
  }
  
  const newTodo = {
    id:2,
    todo: 'make love',
    done: false
  }
  
  const addTodoAction = {
    type: 'add',
    payload: newTodo
  }
  
  let todos = todoReducer();
  
  todos = todoReducer(todos, addTodoAction);
  
  console.log(todos);
  
  
  