import React from 'react'
// Import components
import Todo from './Todo'

const TodoLost = ({ text, todos, setTodos, filteredTodos }) => {
  console.log(todos)
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todo={todo}
            todos={todos}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoLost