function SimpleComponents() {
  function Header() {
    return (
      <div style={{backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px', marginBottom: '20px', textAlign: 'center'}}>
        <h1 style={{color: '#333333', margin: '0'}}>My Website</h1>
        <p style={{color: '#555555', margin: '10px 0 0 0'}}>Welcome to my React app</p>
      </div>
    )
  }

  function Card({title, description}) {
    return (
      <div style={{backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', marginBottom: '15px'}}>
        <h3 style={{color: '#333333', margin: '0 0 10px 0'}}>{title}</h3>
        <p style={{color: '#555555', margin: '0'}}>{description}</p>
      </div>
    )
  }

  function Footer() {
    return (
      <div style={{backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '5px', marginTop: '20px', textAlign: 'center'}}>
        <p style={{color: '#555555', margin: '0'}}>&copy; 2024 My Website. All rights reserved.</p>
      </div>
    )
  }

  return (
    <div>
      <h1 style={{color: '#333333', textAlign: 'center'}}>Day 4: Simple Components</h1>
      
      <div style={{marginBottom: '30px'}}>
        <h2 style={{color: '#333333'}}>Building Simple Components</h2>
        <p style={{color: '#555555'}}>Components are the building blocks of React. Let's create some simple, reusable components.</p>
      </div>

      <Header />
      
      <Card title="About React" description="React is a JavaScript library for building user interfaces." />
      <Card title="Components" description="Components let you split the UI into independent, reusable pieces." />
      <Card title="JSX" description="JSX is a syntax extension for JavaScript that looks similar to HTML." />
      
      <Footer />
    </div>
  )
}

export default SimpleComponents