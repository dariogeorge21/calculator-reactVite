import { useState, useEffect } from 'react';
import './App.css'

function App() {
    const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [question, setQuestion] = useState('');

  // Theme func
  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  // function one() {
  //   setQuestion("1");
  // }
  //   function two() {
  //   setQuestion("2");
  // }
  //   function three() {
  //   setQuestion("3");
  // }
  //   function four() {
  //   setQuestion("4");
  // }
  //   function five() {
  //   setQuestion("5");
  // }
  //   function six() {
  //   setQuestion("6");
  // }
  //   function seven() {
  //   setQuestion("7");
  // }
  //   function eight() {
  //   setQuestion("8");
  // }
  //   function nine() {
  //   setQuestion("9");
  // }
  //   function zero() {
  //   setQuestion("0");
  // }
  //   function doubleZero() {
  //   setQuestion("00");
  // }
  //   function one() {
  //   setQuestion("1");
  // }
  //   function one() {
  //   setQuestion("1");
  // }
  //   function one() {
  //   setQuestion("1");
  // }

  return (
    <>
     <div className="header"> <div className="header">CALCULATOR</div>
      <button className="button" onClick={toggleTheme}>{isDark ?<img src="/sun.svg" alt="Backspace" style={{ width: 24, height: 24 }} />
 :             <img src="/moon.svg" alt="Backspace" style={{ width: 24, height: 24 }} />
}</button>
    </div>
      
      <div className="container">
        <div className="result">Result: </div>
        <div className="result">{question ? question : 'Question:'}</div>
        <div className="numberButtons">
          <button onClick={() => setQuestion(prev => prev + '7')} className="box">7</button>
          <button onClick={() => setQuestion(prev => prev + '8')} className="box">8</button>
          <button onClick={() => setQuestion(prev => prev + '9')} className="box">9</button>
          <button onClick={() => setQuestion(prev => prev + '%')} className="box">%</button>
          <button onClick={() => setQuestion(prev => prev + '4')} className="box">4</button>
          <button onClick={() => setQuestion(prev => prev + '5')} className="box">5</button>
          <button onClick={() => setQuestion(prev => prev + '6')} className="box">6</button>
          <button onClick={() => setQuestion(prev => prev + '/')} className="box">/</button>
          <button onClick={() => setQuestion(prev => prev + '1')} className="box">1</button>
          <button onClick={() => setQuestion(prev => prev + '2')} className="box">2</button>
          <button onClick={() => setQuestion(prev => prev + '3')} className="box">3</button>
          <button onClick={() => setQuestion(prev => prev + '*')} className="box">*</button>
          <button onClick={() => setQuestion(prev => prev + '0')} className="box">0</button>
          <button onClick={() => setQuestion(prev => prev + '.')} className="box">.</button>
          <button onClick={() => setQuestion(prev => prev + '-')} className="box">-</button>
          <button onClick={() => setQuestion(prev => prev + '+')} className="box">+</button>
          <button onClick={() => setQuestion(prev => prev + '00')} className="box">00</button>
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
