import React from 'react';


const Form = ({setInputText, inputText, todos, setTodos, status, setStatus}) => {

       // we can write our javascript here..
       const inputTextHandler = (e) => {
        console.log(e.target.value);
         setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        console.log("hay");
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText('');
    };

    const statusHandler = (e) =>{
        console.log(e.target.value);
        setStatus(e.target.value);
    }

    return (
       
        <form>
        <div>
       
        <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />

        <button className="todo-button"  onClick={submitTodoHandler} type="submit">
        <i className="fa fa-plus-square"></i>
        </button> 

        </div>
        <div className="select">
        <select onClick={statusHandler} name="todos" className="filter-todo">
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Uncompleted">Uncompleted</option>
        </select>
        </div>
        <h1>{status}</h1>
        </form>
    );
}

export default Form;