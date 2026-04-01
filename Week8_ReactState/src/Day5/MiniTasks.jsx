import { useState } from 'react'

function MiniTasks() {
  // Task 1: Color Changer
  const [color, setColor] = useState('#ffffff')
  
  // Task 2: Todo List with Filter
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React useState', completed: false },
    { id: 2, text: 'Practice Events', completed: false },
    { id: 3, text: 'Build a mini project', completed: false }
  ])
  const [taskInput, setTaskInput] = useState('')
  const [filter, setFilter] = useState('all')
  
  // Task 3: Counter with Steps
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  
  // Task 4: Temperature Converter
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')

  // Todo functions
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }])
      setTaskInput('')
    }
  }
  
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed
    if (filter === 'pending') return !task.completed
    return true
  })
  
  // Temperature conversion
  const handleCelsiusChange = (e) => {
    const value = e.target.value
    setCelsius(value)
    if (value === '') {
      setFahrenheit('')
    } else {
      setFahrenheit(((parseFloat(value) * 9/5) + 32).toFixed(1))
    }
  }
  
  const handleFahrenheitChange = (e) => {
    const value = e.target.value
    setFahrenheit(value)
    if (value === '') {
      setCelsius('')
    } else {
      setCelsius(((parseFloat(value) - 32) * 5/9).toFixed(1))
    }
  }

  return (
    <div>
      <h1 style={{color: '#333333', textAlign: 'center'}}>Day 5: Mini Tasks</h1>
      
      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Practice what you learned with these mini tasks!</h2>
        <p style={{color: '#555555'}}>Combine useState, Events, Conditional Rendering, and Lists in these exercises.</p>
      </div>

      {/* Task 1: Color Changer */}
      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Task 1: Color Changer</h2>
        <div style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px'}}>
          <div style={{backgroundColor: color, padding: '40px', borderRadius: '5px', textAlign: 'center', marginBottom: '15px', border: '1px solid #ddd'}}>
            <p style={{color: color === '#ffffff' ? '#333333' : '#ffffff'}}>This box changes color!</p>
          </div>
          <button onClick={() => setColor('#ff6b6b')} style={{backgroundColor: '#ff6b6b', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px'}}>Red</button>
          <button onClick={() => setColor('#4ecdc4')} style={{backgroundColor: '#4ecdc4', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px'}}>Teal</button>
          <button onClick={() => setColor('#45b7d1')} style={{backgroundColor: '#45b7d1', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px'}}>Blue</button>
          <button onClick={() => setColor('#96ceb4')} style={{backgroundColor: '#96ceb4', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px'}}>Green</button>
          <button onClick={() => setColor('#feca57')} style={{backgroundColor: '#feca57', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px'}}>Yellow</button>
          <button onClick={() => setColor('#ffffff')} style={{backgroundColor: '#6c757d', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px'}}>Reset</button>
        </div>
      </div>

      {/* Task 2: Todo List with Filter */}
      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Task 2: Todo List with Filter</h2>
        <div style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px'}}>
          <div style={{marginBottom: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
            <input 
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              placeholder="Enter a task..."
              style={{flex: 1, padding: '8px', borderRadius: '5px', border: '1px solid #ddd'}}
            />
            <button onClick={addTask} style={{backgroundColor: '#28a745', color: 'white', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Add Task</button>
          </div>
          
          <div style={{marginBottom: '15px', display: 'flex', gap: '10px'}}>
            <button onClick={() => setFilter('all')} style={{backgroundColor: filter === 'all' ? '#007bff' : '#e9ecef', color: filter === 'all' ? 'white' : '#333333', padding: '5px 10px', border: 'none', borderRadius: '3px', cursor: 'pointer'}}>All</button>
            <button onClick={() => setFilter('pending')} style={{backgroundColor: filter === 'pending' ? '#007bff' : '#e9ecef', color: filter === 'pending' ? 'white' : '#333333', padding: '5px 10px', border: 'none', borderRadius: '3px', cursor: 'pointer'}}>Pending</button>
            <button onClick={() => setFilter('completed')} style={{backgroundColor: filter === 'completed' ? '#007bff' : '#e9ecef', color: filter === 'completed' ? 'white' : '#333333', padding: '5px 10px', border: 'none', borderRadius: '3px', cursor: 'pointer'}}>Completed</button>
          </div>
          
          {filteredTasks.map(task => (
            <div key={task.id} style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', backgroundColor: '#ffffff', borderRadius: '5px', marginBottom: '8px', border: '1px solid #e0e0e0'}}>
              <input 
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                style={{cursor: 'pointer'}}
              />
              <span style={{flex: 1, color: '#333333', textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? '#888' : '#333'}}>
                {task.text}
              </span>
              <button onClick={() => deleteTask(task.id)} style={{backgroundColor: '#dc3545', color: 'white', padding: '4px 8px', border: 'none', borderRadius: '3px', cursor: 'pointer', fontSize: '12px'}}>Delete</button>
            </div>
          ))}
          
          {filteredTasks.length === 0 && (
            <p style={{color: '#555555', textAlign: 'center'}}>No tasks found!</p>
          )}
        </div>
      </div>

      {/* Task 3: Counter with Steps */}
      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Task 3: Counter with Steps</h2>
        <div style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px', textAlign: 'center'}}>
          <h3 style={{color: '#333333', fontSize: '48px', margin: '0 0 10px 0'}}>{count}</h3>
          <div style={{marginBottom: '15px'}}>
            <label style={{color: '#555555', marginRight: '10px'}}>Step Value:</label>
            <input 
              type="number"
              value={step}
              onChange={(e) => setStep(parseInt(e.target.value) || 1)}
              style={{padding: '5px', borderRadius: '5px', border: '1px solid #ddd', width: '80px', textAlign: 'center'}}
            />
          </div>
          <div>
            <button onClick={() => setCount(count + step)} style={{backgroundColor: '#28a745', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px'}}>+{step}</button>
            <button onClick={() => setCount(count - step)} style={{backgroundColor: '#dc3545', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px'}}>-{step}</button>
            <button onClick={() => setCount(0)} style={{backgroundColor: '#6c757d', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px'}}>Reset</button>
          </div>
        </div>
      </div>

      {/* Task 4: Temperature Converter */}
      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Task 4: Temperature Converter</h2>
        <div style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px'}}>
          <div style={{marginBottom: '15px'}}>
            <label style={{color: '#555555', display: 'block', marginBottom: '5px'}}>Celsius:</label>
            <input 
              type="number"
              value={celsius}
              onChange={handleCelsiusChange}
              placeholder="Enter Celsius"
              style={{padding: '8px', borderRadius: '5px', border: '1px solid #ddd', width: '100%'}}
            />
          </div>
          <div style={{marginBottom: '15px'}}>
            <label style={{color: '#555555', display: 'block', marginBottom: '5px'}}>Fahrenheit:</label>
            <input 
              type="number"
              value={fahrenheit}
              onChange={handleFahrenheitChange}
              placeholder="Enter Fahrenheit"
              style={{padding: '8px', borderRadius: '5px', border: '1px solid #ddd', width: '100%'}}
            />
          </div>
          <div style={{textAlign: 'center', marginTop: '10px'}}>
            {celsius && (
              <p style={{color: '#28a745'}}>{celsius}°C = {fahrenheit}°F</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniTasks