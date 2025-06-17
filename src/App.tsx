import { useState, useEffect } from 'react';
import './App.css'

function App() {
    const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Theme func
  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };


  return (
    <>
     <div className="header"> <div className="header">CALCULATOR</div>
      <button className="button" onClick={toggleTheme}>{isDark ?<img src="/sun.svg" alt="Backspace" style={{ width: 24, height: 24 }} />
 :             <img src="/moon.svg" alt="Backspace" style={{ width: 24, height: 24 }} />
}</button>
    </div>
      
      <div className="container">
        <div className="result">Result: </div>
        <div className="result">Question: </div>
        <div className="numberButtons">
          <button className="box">7</button>
          <button className="box">8</button>
          <button className="box">9</button>
          <button className="box">%</button>
          <button className="box">4</button>
          <button className="box">5</button>
          <button className="box">6</button>
          <button className="box">/</button>
          <button className="box">3</button>
          <button className="box">2</button>
          <button className="box">1</button>
          <button className="box">*</button>
          <button className="box">0</button>
          <button className="box">.</button>
          <button className="box">-</button>
          <button className="box">+</button>
          <button className="box">00</button>
          <button className="box">=</button>
          <button className="box">
            <img src="/backspace.svg" alt="Backspace" style={{ width: 24, height: 24 }} />
          </button>
          <button className="box">AC</button>
        </div>
      </div>
    </>
  )
}

export default App
