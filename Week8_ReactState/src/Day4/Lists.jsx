import { useState } from 'react'

function Lists() {
  // Simple array of items
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'])
  
  // Array of objects
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', age: 25, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
    { id: 3, name: 'Mike Johnson', age: 28, city: 'Chicago' }
  ])
  
  const [newFruit, setNewFruit] = useState('')
  const [newUser, setNewUser] = useState({ name: '', age: '', city: '' })

  // Add fruit
  const addFruit = () => {
    if (newFruit.trim()) {
      setFruits([...fruits, newFruit])
      setNewFruit('')
    }
  }

  // Remove fruit
  const removeFruit = (index) => {
    const updatedFruits = fruits.filter((_, i) => i !== index)
    setFruits(updatedFruits)
  }

  // Add user
  const addUser = () => {
    if (newUser.name && newUser.age && newUser.city) {
      const newId = users.length + 1
      setUsers([...users, { ...newUser, id: newId, age: parseInt(newUser.age) }])
      setNewUser({ name: '', age: '', city: '' })
    }
  }

  // Remove user
  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div>
      <h1 style={{color: '#333333', textAlign: 'center'}}>Day 4: Lists in React</h1>
      
      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>What are Lists?</h2>
        <p style={{color: '#555555'}}>In React, lists are rendered using the map() function. Each list item needs a unique "key" prop to help React identify which items have changed.</p>
      </div>

      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Example 1: Simple List (Fruits)</h2>
        <div style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px'}}>
          <div style={{marginBottom: '15px'}}>
            <input 
              type="text"
              value={newFruit}
              onChange={(e) => setNewFruit(e.target.value)}
              placeholder="Enter fruit name"
              style={{padding: '8px', borderRadius: '5px', border: '1px solid #ddd', marginRight: '10px', width: '200px'}}
            />
            <button onClick={addFruit} style={{backgroundColor: '#28a745', color: 'white', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Add Fruit</button>
          </div>
          
          <ul style={{color: '#555555', paddingLeft: '20px'}}>
            {fruits.map((fruit, index) => (
              <li key={index} style={{margin: '8px 0'}}>
                {fruit}
                <button onClick={() => removeFruit(index)} style={{backgroundColor: '#dc3545', color: 'white', padding: '2px 8px', border: 'none', borderRadius: '3px', cursor: 'pointer', marginLeft: '10px', fontSize: '12px'}}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Example 2: List of Objects (Users)</h2>
        <div style={{backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px'}}>
          <div style={{marginBottom: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
            <input 
              type="text"
              value={newUser.name}
              onChange={(e) => setNewUser({...newUser, name: e.target.value})}
              placeholder="Name"
              style={{padding: '8px', borderRadius: '5px', border: '1px solid #ddd', flex: '1'}}
            />
            <input 
              type="number"
              value={newUser.age}
              onChange={(e) => setNewUser({...newUser, age: e.target.value})}
              placeholder="Age"
              style={{padding: '8px', borderRadius: '5px', border: '1px solid #ddd', flex: '1'}}
            />
            <input 
              type="text"
              value={newUser.city}
              onChange={(e) => setNewUser({...newUser, city: e.target.value})}
              placeholder="City"
              style={{padding: '8px', borderRadius: '5px', border: '1px solid #ddd', flex: '1'}}
            />
            <button onClick={addUser} style={{backgroundColor: '#007bff', color: 'white', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Add User</button>
          </div>
          
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{backgroundColor: '#e9ecef', textAlign: 'left'}}>
                <th style={{padding: '8px', border: '1px solid #ddd'}}>ID</th>
                <th style={{padding: '8px', border: '1px solid #ddd'}}>Name</th>
                <th style={{padding: '8px', border: '1px solid #ddd'}}>Age</th>
                <th style={{padding: '8px', border: '1px solid #ddd'}}>City</th>
                <th style={{padding: '8px', border: '1px solid #ddd'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td style={{padding: '8px', border: '1px solid #ddd'}}>{user.id}</td>
                  <td style={{padding: '8px', border: '1px solid #ddd'}}>{user.name}</td>
                  <td style={{padding: '8px', border: '1px solid #ddd'}}>{user.age}</td>
                  <td style={{padding: '8px', border: '1px solid #ddd'}}>{user.city}</td>
                  <td style={{padding: '8px', border: '1px solid #ddd'}}>
                    <button onClick={() => removeUser(user.id)} style={{backgroundColor: '#dc3545', color: 'white', padding: '4px 8px', border: 'none', borderRadius: '3px', cursor: 'pointer'}}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 style={{color: '#333333'}}>Important Points about Lists</h2>
        <ul style={{color: '#555555'}}>
          <li><strong>Keys:</strong> Each list item needs a unique key prop (use id, not index when possible)</li>
          <li><strong>map() method:</strong> Used to transform arrays into JSX elements</li>
          <li><strong>Keys help React:</strong> Identify which items changed, added, or removed</li>
          <li><strong>Never use index as key:</strong> If list order can change, avoid using index as key</li>
        </ul>
      </div>
    </div>
  )
}

export default Lists