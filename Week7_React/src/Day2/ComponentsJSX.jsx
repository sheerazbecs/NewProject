function ComponentsJSX() {
  return (
    <div>
      <h1 style={{color: '#333333', textAlign: 'center'}}>Day 2: Components & JSX</h1>
      
      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>What are Components?</h2>
        <p style={{color: '#555555'}}>Components are reusable pieces of code that return JSX.</p>
        
        <div style={{backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', marginTop: '10px'}}>
          <h3 style={{color: '#333333', margin: '0 0 5px 0'}}>Welcome to React!</h3>
          <p style={{color: '#555555', margin: '0'}}>This is my first component</p>
        </div>
      </div>

      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Example 2: User Card</h2>
        <div style={{backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px'}}>
          <h3 style={{color: '#333333', margin: '0 0 5px 0'}}>John Doe</h3>
          <p style={{color: '#555555', margin: '5px 0'}}>Email: john@example.com</p>
          <p style={{color: '#555555', margin: '5px 0'}}>Role: React Developer</p>
        </div>
      </div>

      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Example 3: Button</h2>
        <button style={{backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
          Click Me!
        </button>
      </div>

      <div>
        <h2 style={{color: '#333333'}}>What is JSX?</h2>
        <ul style={{color: '#555555'}}>
          <li>JSX looks like HTML but it's JavaScript</li>
          <li>Use className instead of class</li>
          <li>Wrap multiple elements in one parent div</li>
          <li>JavaScript expressions go inside {'{ }'}</li>
        </ul>
      </div>
    </div>
  )
}

export default ComponentsJSX