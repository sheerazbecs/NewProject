import { useState } from 'react'

function UseState() {
  // Basic counter example
  const [count, setCount] = useState(0)
  
  // Text input example
  const [text, setText] = useState('')
  
  // Toggle example
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div>
      <h1 style={{color: '#333333', textAlign: 'center'}}>Day 1: useState Hook</h1>
      
      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>What is useState?</h2>
        <p style={{color: '#555555'}}>useState is a React Hook that lets you add state to functional components. It returns an array with two values: the current state and a function to update it.</p>
        <p style={{color: '#555555'}}>Syntax: <code>const [state, setState] = useState(initialValue)</code></p>
      </div>

      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Example 1: Counter</h2>
        <div style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px', textAlign: 'center'}}>
          <h3 style={{color: '#333333'}}>Count: {count}</h3>
          <button onClick={() => setCount(count + 1)} style={{backgroundColor: '#007bff', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px'}}>Increase</button>
          <button onClick={() => setCount(count - 1)} style={{backgroundColor: '#dc3545', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px'}}>Decrease</button>
          <button onClick={() => setCount(0)} style={{backgroundColor: '#6c757d', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px'}}>Reset</button>
        </div>
      </div>

      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Example 2: Text Input</h2>
        <div style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px'}}>
          <input 
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
            style={{padding: '8px', borderRadius: '5px', border: '1px solid #ddd', width: '100%', marginBottom: '10px'}}
          />
          <p style={{color: '#555555'}}>You typed: <strong style={{color: '#333333'}}>{text || 'Nothing yet'}</strong></p>
        </div>
      </div>

      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Example 3: Toggle Visibility</h2>
        <div style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px'}}>
          <button onClick={() => setIsVisible(!isVisible)} style={{backgroundColor: '#28a745', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '10px'}}>
            {isVisible ? 'Hide' : 'Show'} Message
          </button>
          {isVisible && (
            <div style={{backgroundColor: '#e9ecef', padding: '10px', borderRadius: '5px', marginTop: '10px'}}>
              <p style={{color: '#333333', margin: '0'}}>This message appears when visible is true!</p>
            </div>
          )}
        </div>
      </div>

      <div>
        <h2 style={{color: '#333333'}}>Key Points</h2>
        <ul style={{color: '#555555'}}>
          <li>useState preserves values between renders</li>
          <li>Updates trigger re-renders</li>
          <li>Can use multiple useState in one component</li>
          <li>State can be any type (string, number, array, object, boolean)</li>
        </ul>
      </div>
    </div>
  )
}

export default UseState