import React, {useState, useEffect} from 'react'
import Form from './components/Form'
import TodoLost from './components/TodoList'
import './App.css'


function App() {
  // state stuff
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  // functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break
    }
  }
  // Use effect
  useEffect(() => {
    getLocalTodos()
  }, [])
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
    console.log('hi');
  }, [todos, status])

  // Save to local
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
     let todoLocal = JSON.parse(localStorage.getItem('todos'))
     setTodos(todoLocal)
    }
  }
  return (
    <div className='App'>
      <header>
        <h1>Geet's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoLost
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  )
}

export default App;
