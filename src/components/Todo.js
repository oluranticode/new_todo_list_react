import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {

    const deleteHandler = () => {
        console.log(todo);
         setTodos(todos.filter(el => el.id !== todo.id))
    };

    // checking through all the list items so if it matches with the todo.id
    // then it return the completed true
    // returning whatever the item had  ...listItem
    const completedHandler = () => {
        setTodos(todos.map(listItem => {
            if(listItem.id === todo.id){
                return {
                ...listItem, completed: !listItem.completed
          }  
        }
        return listItem;
       
        }))
        
    }

    return (
        <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}  `}>{text}</li>
        <button onClick={completedHandler} className="complete-btn"><i className="fa fa-check"></i></button>
        <button onClick={deleteHandler} className="trash-btn"><i className="fa fa-trash"></i></button>
        </div> 
        );
}

export default Todo;
