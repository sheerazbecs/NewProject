import { useState } from 'react'
import WhatIsReact from './Day1/WhatIsReact'
import ComponentsJSX from './Day2/ComponentsJSX'
import Props from './Day3/Props'
import SimpleComponents from './Day4/SimpleComponents'
import Practice from './Day5/Practice'

function App() {
  const [currentDay, setCurrentDay] = useState('day2')

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
          Day 1: What is React?
        </button>
        <button onClick={() => setCurrentDay('day2')} style={buttonStyle(currentDay === 'day2')}>
          Day 2: Components & JSX
        </button>
        <button onClick={() => setCurrentDay('day3')} style={buttonStyle(currentDay === 'day3')}>
          Day 3: Props
        </button>
        <button onClick={() => setCurrentDay('day4')} style={buttonStyle(currentDay === 'day4')}>
          Day 4: Simple Components
        </button>
        <button onClick={() => setCurrentDay('day5')} style={buttonStyle(currentDay === 'day5')}>
          Day 5: Practice
        </button>
      </nav>

      <div style={{maxWidth: '800px', margin: '0 auto', padding: '20px'}}>
        {currentDay === 'day1' && <WhatIsReact />}
        {currentDay === 'day2' && <ComponentsJSX />}
        {currentDay === 'day3' && <Props />}
        {currentDay === 'day4' && <SimpleComponents />}
        {currentDay === 'day5' && <Practice />}
      </div>
    </div>
  )
}

export default App