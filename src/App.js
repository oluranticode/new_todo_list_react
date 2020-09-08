import React, {useState, useEffect} from 'react';
import Form from './components/Form';  
import TodoList from './components/TodoList'
import './App.css';

function App() {
  // creating state
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState(" ");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //useEffect
  useEffect(() =>{
    console.log("getLocalTodos useEffect run");
    getLocalTodos();
  }, [])

  useEffect(() =>{
    console.log("saveLocalTodos useEffect run");
    filterhandler();
    saveLocalTodos();
  }, [todos, status])

  // creating function
    const filterhandler = () =>{
      switch(status) {
        case 'Completed' :
          setFilteredTodos(todos.filter(todo => todo.completed === true)); 
          break;
          case 'Uncompleted' :
            setFilteredTodos(todos.filter(todo => todo.completed === false)); 
            break;
            default:
              setFilteredTodos(todos); 
              break;
      }
    }

    // save to local storage
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const getLocalTodos = () => {
      if(localStorage.getItem("todos") === null ) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
       let localtodo = JSON.parse(localStorage.getItem("todos"));
       console.log(localtodo);
       setTodos(localtodo);
      }
    };

  return (
    <div className="App">
     <h1 className="head1">Damilotun To Do List </h1>
     <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos} 
     setStatus={setStatus} status={status} />
     <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
