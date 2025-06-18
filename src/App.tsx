import { useState, useEffect } from 'react';
import './App.css'

function App() {
    const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [newNumber, setNewNumber] = useState(false);

  // Theme func
  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  function numberClick(number){
    if (newNumber){
      setDisplay(number);
    }
    else{
      setDisplay(display === "0"? number : display+number);
    }
  }

  function operatorClick(nextOperator){
    setFirstNumber(parseFloat(display));
    setOperator(nextOperator);
    setNewNumber(true);
  }

   function handleEqualClick() {
    const secondNumber = parseFloat(display);
    let result;

    if (operator === "+") result = firstNumber + secondNumber;
    else if (operator === "-") result = firstNumber - secondNumber;
    else if (operator === "*") result = firstNumber * secondNumber;
    else if (operator === "/") result = secondNumber === 0 ? "Error" : firstNumber / secondNumber;

    setDisplay(String(result));
    setFirstNumber(null);
    setOperator(null);
    setNewNumber(true);
  }

  function handleClear() {
  setDisplay("0");
  setFirstNumber(null);
  setOperator(null);
  setNewNumber(false);
  }

  function inputDot() {
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  }

  return (
    <>
     <div className="header"> <div className="header">CALCULATOR</div>
      <button className="button" onClick={toggleTheme}>{isDark ?<img src="/sun.svg" alt="Backspace" style={{ width: 24, height: 24 }} />
 :             <img src="/moon.svg" alt="Backspace" style={{ width: 24, height: 24 }} />
}</button>
    </div>
      
      <div className="container">
        {/* <div className="result">Result: </div> */}
        <div className="result">{display}</div>
        <div className="numberButtons">
          <button onClick={() => numberClick("7")}  className="box">7</button>
          <button onClick={() => numberClick("8")}  className="box">8</button>
          <button onClick={() => numberClick("9")}  className="box">9</button>
          <button onClick={() => operatorClick("%")}  className="box">%</button>
          <button onClick={() => numberClick("4")}  className="box">4</button>
          <button onClick={() => numberClick("5")}  className="box">5</button>
          <button onClick={() => numberClick("6")}  className="box">6</button>
          <button onClick={() => operatorClick("/")}  className="box">/</button>
          <button onClick={() => numberClick("1")}  className="box">1</button>
          <button onClick={() => numberClick("2")}  className="box">2</button>
          <button onClick={() => numberClick("3")}  className="box">3</button>
          <button onClick={() => operatorClick("*")}  className="box">*</button>
          <button onClick={() => numberClick("0")}  className="box">0</button>
          <button onClick={inputDot} className="box">.</button>
          <button onClick={() => operatorClick("-")}  className="box">-</button>
          <button onClick={() => operatorClick("+")}  className="box">+</button>
          <button onClick={() => numberClick("00")}  className="box">00</button>
          <button onClick={handleEqualClick} className="box">=</button>
          {/* <button className="box">
            <img src="/backspace.svg" alt="Backspace" style={{ width: 24, height: 24 }} />
          </button> */}
          <button onClick={handleClear} className="box">AC</button>
        </div>
      </div>
    </>
  )
}

export default App
