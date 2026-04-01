import { useState } from 'react'

function Events() {
  const [clickMessage, setClickMessage] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [hoverMessage, setHoverMessage] = useState('')

  // Event handlers
  const handleClick = () => {
    setClickMessage('Button was clicked!')
    setTimeout(() => setClickMessage(''), 2000)
  }

  const handleDoubleClick = () => {
    alert('Double clicked!')
  }

  const handleMouseEnter = () => {
    setHoverMessage('Mouse is over the box')
  }

  const handleMouseLeave = () => {
    setHoverMessage('Mouse left the box')
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    alert(`Form submitted with: ${inputValue}`)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      alert(`You pressed Enter! Value: ${inputValue}`)
    }
  }

  return (
    <div>
      <h1 style={{color: '#333333', textAlign: 'center'}}>Day 2: Events in React</h1>
      
      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>What are Events?</h2>
        <p style={{color: '#555555'}}>Events in React are similar to HTML events but use camelCase syntax. Event handlers are passed as functions, not strings.</p>
      </div>

      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Example 1: Click Events</h2>
        <div style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px'}}>
          <button onClick={handleClick} style={{backgroundColor: '#007bff', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '10px'}}>
            Click Me
          </button>
          <button onDoubleClick={handleDoubleClick} style={{backgroundColor: '#28a745', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
            Double Click Me
          </button>
          {clickMessage && <p style={{color: '#28a745', marginTop: '10px'}}>{clickMessage}</p>}
        </div>
      </div>

      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Example 2: Mouse Events</h2>
        <div 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '5px', textAlign: 'center', border: '2px dashed #007bff'}}
        >
          <p style={{color: '#555555', margin: '0'}}>Hover over this box</p>
          {hoverMessage && <p style={{color: '#007bff', marginTop: '10px'}}>{hoverMessage}</p>}
        </div>
      </div>

      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Example 3: Form Events</h2>
        <form onSubmit={handleFormSubmit} style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px'}}>
          <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type and press Enter"
            style={{padding: '8px', borderRadius: '5px', border: '1px solid #ddd', width: '70%', marginRight: '10px'}}
          />
          <button type="submit" style={{backgroundColor: '#007bff', color: 'white', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
            Submit
          </button>
          <p style={{color: '#555555', marginTop: '10px'}}>Current value: <strong>{inputValue || 'Empty'}</strong></p>
        </form>
      </div>

      <div>
        <h2 style={{color: '#333333'}}>Common Events in React</h2>
        <ul style={{color: '#555555'}}>
          <li>onClick - Click event</li>
          <li>onChange - Input change event</li>
          <li>onSubmit - Form submission</li>
          <li>onMouseEnter / onMouseLeave - Hover events</li>
          <li>onKeyPress / onKeyDown - Keyboard events</li>
          <li>onFocus / onBlur - Focus events</li>
        </ul>
      </div>
    </div>
  )
}

export default Events