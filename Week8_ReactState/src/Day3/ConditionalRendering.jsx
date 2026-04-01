import { useState } from 'react'

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState('guest')
  const [score, setScore] = useState(0)
  const [showMessage, setShowMessage] = useState(true)

  return (
    <div>
      <h1 style={{color: '#333333', textAlign: 'center'}}>Day 3: Conditional Rendering</h1>
      
      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>What is Conditional Rendering?</h2>
        <p style={{color: '#555555'}}>Conditional rendering in React works the same way conditions work in JavaScript. Use if statements, ternary operators, or logical && to render different UI based on conditions.</p>
      </div>

      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Example 1: If/Else with Login</h2>
        <div style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px'}}>
          <button onClick={() => setIsLoggedIn(!isLoggedIn)} style={{backgroundColor: '#007bff', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '15px'}}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
          
          {isLoggedIn ? (
            <div style={{backgroundColor: '#d4edda', padding: '10px', borderRadius: '5px'}}>
              <p style={{color: '#155724', margin: '0'}}>Welcome back! You are logged in.</p>
            </div>
          ) : (
            <div style={{backgroundColor: '#f8d7da', padding: '10px', borderRadius: '5px'}}>
              <p style={{color: '#721c24', margin: '0'}}>Please log in to continue.</p>
            </div>
          )}
        </div>
      </div>

      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Example 2: Logical && Operator</h2>
        <div style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px'}}>
          <button onClick={() => setShowMessage(!showMessage)} style={{backgroundColor: '#28a745', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '15px'}}>
            {showMessage ? 'Hide' : 'Show'} Message
          </button>
          
          {showMessage && (
            <div style={{backgroundColor: '#e9ecef', padding: '10px', borderRadius: '5px'}}>
              <p style={{color: '#333333', margin: '0'}}>This message appears when showMessage is true!</p>
            </div>
          )}
        </div>
      </div>

      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Example 3: Multiple Conditions (User Role)</h2>
        <div style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px'}}>
          <select 
            value={userRole} 
            onChange={(e) => setUserRole(e.target.value)}
            style={{padding: '8px', borderRadius: '5px', border: '1px solid #ddd', marginBottom: '15px', width: '100%'}}
          >
            <option value="guest">Guest</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          
          {userRole === 'admin' && (
            <div style={{backgroundColor: '#cce5ff', padding: '10px', borderRadius: '5px'}}>
              <p style={{color: '#004085', margin: '0'}}>Admin Access: You can edit and delete content.</p>
            </div>
          )}
          
          {userRole === 'user' && (
            <div style={{backgroundColor: '#d4edda', padding: '10px', borderRadius: '5px'}}>
              <p style={{color: '#155724', margin: '0'}}>User Access: You can view and comment.</p>
            </div>
          )}
          
          {userRole === 'guest' && (
            <div style={{backgroundColor: '#fff3cd', padding: '10px', borderRadius: '5px'}}>
              <p style={{color: '#856404', margin: '0'}}>Guest Access: You can only view content.</p>
            </div>
          )}
        </div>
      </div>

      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Example 4: Ternary with Score</h2>
        <div style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px', textAlign: 'center'}}>
          <h3 style={{color: '#333333'}}>Score: {score}</h3>
          <button onClick={() => setScore(score + 10)} style={{backgroundColor: '#007bff', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '10px'}}>Add 10</button>
          <button onClick={() => setScore(score - 10)} style={{backgroundColor: '#dc3545', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Subtract 10</button>
          
          <div style={{marginTop: '15px'}}>
            {score >= 70 ? (
              <p style={{color: '#28a745', fontWeight: 'bold'}}>Excellent! Grade: A</p>
            ) : score >= 50 ? (
              <p style={{color: '#ffc107', fontWeight: 'bold'}}>Good! Grade: B</p>
            ) : score >= 30 ? (
              <p style={{color: '#fd7e14', fontWeight: 'bold'}}>Average! Grade: C</p>
            ) : (
              <p style={{color: '#dc3545', fontWeight: 'bold'}}>Need Improvement! Grade: F</p>
            )}
          </div>
        </div>
      </div>

      <div>
        <h2 style={{color: '#333333'}}>Conditional Rendering Methods</h2>
        <ul style={{color: '#555555'}}>
          <li><strong>if/else</strong> - For complex conditions</li>
          <li><strong>Ternary operator (condition ? true : false)</strong> - For simple conditions</li>
          <li><strong>Logical && (condition && Component)</strong> - To show/hide elements</li>
          <li><strong>Switch statements</strong> - For multiple conditions</li>
          <li><strong>Variables</strong> - Store JSX in variables</li>
        </ul>
      </div>
    </div>
  )
}

export default ConditionalRendering