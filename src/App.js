import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <button onClick={() => setMessage('Button clicked!')}>Click Me</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
