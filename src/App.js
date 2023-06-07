import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    
    // Check if the entered value is a valid decimal number
    if (value === '' || /^-?\d*\.?\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === '-') {
      event.preventDefault(); // Prevent "-" from being typed in the input
      // Toggle the negative sign based on the current input value
      if (inputValue.startsWith('-')) {
        setInputValue(inputValue.substring(1));
      } else {
        setInputValue('-' + inputValue);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <p>You entered: {inputValue}</p>
      </header>
    </div>
  );
}

export default App;
