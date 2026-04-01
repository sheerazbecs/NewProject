import { useState } from 'react'
import UseState from './Day1/UseState'
import Events from './Day2/Events'
import ConditionalRendering from './Day3/ConditionalRendering'
import Lists from './Day4/Lists'
import MiniTasks from './Day5/MiniTasks'

function App() {
  const [currentDay, setCurrentDay] = useState('day1')

  const pageStyle = {
    backgroundColor: '#ffffff',
    color: '#333333',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif'
  }

  const navStyle = {
    backgroundColor: '#f0f0f0',
    padding: '15px',
    borderBottom: '1px solid #ddd',
    marginBottom: '20px',
    textAlign: 'center'
  }

  const buttonStyle = (isActive) => ({
    backgroundColor: isActive ? '#007bff' : '#e0e0e0',
    color: isActive ? '#ffffff' : '#333333',
    border: 'none',
    padding: '10px 20px',
    margin: '0 5px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold'
  })

  return (
    <div style={pageStyle}>
      <nav style={navStyle}>
        <button onClick={() => setCurrentDay('day1')} style={buttonStyle(currentDay === 'day1')}>
          Day 1: useState
        </button>
        <button onClick={() => setCurrentDay('day2')} style={buttonStyle(currentDay === 'day2')}>
          Day 2: Events
        </button>
        <button onClick={() => setCurrentDay('day3')} style={buttonStyle(currentDay === 'day3')}>
          Day 3: Conditional Rendering
        </button>
        <button onClick={() => setCurrentDay('day4')} style={buttonStyle(currentDay === 'day4')}>
          Day 4: Lists
        </button>
        <button onClick={() => setCurrentDay('day5')} style={buttonStyle(currentDay === 'day5')}>
          Day 5: Mini Tasks
        </button>
      </nav>

      <div style={{maxWidth: '800px', margin: '0 auto', padding: '20px'}}>
        {currentDay === 'day1' && <UseState />}
        {currentDay === 'day2' && <Events />}
        {currentDay === 'day3' && <ConditionalRendering />}
        {currentDay === 'day4' && <Lists />}
        {currentDay === 'day5' && <MiniTasks />}
      </div>
    </div>
  )
}

export default App