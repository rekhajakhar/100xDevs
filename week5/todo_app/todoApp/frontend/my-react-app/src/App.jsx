import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CreateTodo} from './components/CreateTodo'
import {Todos} from './components/Todos'

function App() {
const [todos, setTodos] = useState([]);

useEffect(() => {
  // Fetch todos from the server after the component mounts
  fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const json = await res.json();
      setTodos(json.todos);
    })
    .catch(error => {
      console.error('Error fetching todos:', error);
    });
}, []); // Empty dependency array means this effect runs once after initial render

  return (
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos={todos} /> {/* Pass todos as a prop */}
      </div>

  )
}

export default App
