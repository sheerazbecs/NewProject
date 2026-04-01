import { useState } from 'react'

function Practice() {
  function Counter() {
    const [count, setCount] = useState(0)
    
    return (
      <div style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px', marginBottom: '20px', textAlign: 'center'}}>
        <h3 style={{color: '#333333'}}>Counter: {count}</h3>
        <button onClick={() => setCount(count + 1)} style={{backgroundColor: '#007bff', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px'}}>Increase</button>
        <button onClick={() => setCount(count - 1)} style={{backgroundColor: '#dc3545', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px'}}>Decrease</button>
        <button onClick={() => setCount(0)} style={{backgroundColor: '#6c757d', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px'}}>Reset</button>
      </div>
    )
  }

  function Greeting({name}) {
    return (
      <div style={{backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px', marginBottom: '10px'}}>
        <p style={{color: '#555555'}}>Hello, <strong style={{color: '#333333'}}>{name}</strong>! Welcome to React practice.</p>
      </div>
    )
  }

  function TodoList() {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')
    
    const addTodo = () => {
      if (inputValue.trim()) {
        setTodos([...todos, inputValue])
        setInputValue('')
      }
    }
    
    return (
      <div style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px'}}>
        <h3 style={{color: '#333333', margin: '0 0 15px 0'}}>Simple Todo List</h3>
        <div>
          <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Enter a todo..."
            style={{padding: '8px', borderRadius: '5px', border: '1px solid #ddd', marginRight: '10px', width: '200px'}}
          />
          <button onClick={addTodo} style={{backgroundColor: '#007bff', color: 'white', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Add</button>
        </div>
        <ul style={{color: '#555555', marginTop: '15px'}}>
          {todos.length === 0 ? (
            <li>No todos yet. Add one above!</li>
          ) : (
            todos.map((todo, index) => <li key={index}>{todo}</li>)
          )}
        </ul>
      </div>
    )
  }

  return (
    <div>
      <h1 style={{color: '#333333', textAlign: 'center'}}>Day 5: Practice</h1>
      
      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Practice Exercises</h2>
        <p style={{color: '#555555'}}>Let's practice what we learned with interactive examples!</p>
      </div>

      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Exercise 1: Counter</h2>
        <Counter />
      </div>

      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Exercise 2: Greeting Cards</h2>
        <Greeting name="Alice" />
        <Greeting name="Bob" />
        <Greeting name="Charlie" />
      </div>

      <div>
        <h2 style={{color: '#333333'}}>Exercise 3: Todo List</h2>
        <TodoList />
      </div>
    </div>
  )
}

export default Practice