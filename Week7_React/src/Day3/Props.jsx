function Props() {
  const handleClick = () => {
    alert('Button clicked!')
  }

  function WelcomeMessage(props) {
    return (
      <div style={{backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', marginBottom: '10px'}}>
        <h3 style={{color: '#333333', margin: '0 0 5px 0'}}>Hello, {props.name}!</h3>
        <p style={{color: '#555555', margin: '0'}}>{props.message}</p>
      </div>
    )
  }

  function UserCard(props) {
    return (
      <div style={{backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', marginBottom: '10px'}}>
        <h3 style={{color: '#333333', margin: '0 0 5px 0'}}>{props.name}</h3>
        <p style={{color: '#555555', margin: '5px 0'}}>Email: {props.email}</p>
        <p style={{color: '#555555', margin: '5px 0'}}>Role: {props.role}</p>
      </div>
    )
  }

  return (
    <div>
      <h1 style={{color: '#333333', textAlign: 'center'}}>Day 3: Props</h1>
      
      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>What are Props?</h2>
        <p style={{color: '#555555'}}>Props (short for properties) are how components pass data to other components. Props are read-only and flow from parent to child.</p>
        <p style={{color: '#555555'}}>Syntax: {'<Component name="value" />'}</p>
      </div>

      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Example 1: Welcome Message with Props</h2>
        <WelcomeMessage name="Alice" message="Welcome to React learning!" />
        <WelcomeMessage name="Bob" message="Props make components reusable!" />
        <WelcomeMessage name="Charlie" message="Keep practicing!" />
      </div>

      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Example 2: User Cards with Props</h2>
        <UserCard name="John Doe" email="john@example.com" role="Frontend Developer" />
        <UserCard name="Jane Smith" email="jane@example.com" role="UI Designer" />
        <UserCard name="Mike Johnson" email="mike@example.com" role="Backend Developer" />
      </div>

      <div>
        <h2 style={{color: '#333333'}}>Key Points About Props</h2>
        <ul style={{color: '#555555'}}>
          <li>Props are passed from parent to child components</li>
          <li>Props are read-only (cannot be modified by child)</li>
          <li>Props can be strings, numbers, arrays, objects, or functions</li>
          <li>Access props using {'props.propName'}</li>
        </ul>
      </div>
    </div>
  )
}

export default Props