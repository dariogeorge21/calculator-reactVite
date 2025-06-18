import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [display, setDisplay] = useState<string>("0");
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState<boolean>(false);

  // Theme effect
  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  function numberClick(number: string) {
    if (newNumber) {
      setDisplay(number);
      setNewNumber(false);
    } else {
      if (display === "0" && number === "00") return;
      setDisplay(display === "0" ? number : display + number);
    }
  }

  function operatorClick(nextOperator: string) {
    setFirstNumber(parseFloat(display));
    setOperator(nextOperator);
    setNewNumber(true);
  }

  function handleEqualClick() {
    const secondNumber = parseFloat(display);
    if (firstNumber === null || operator === null) return;

    let result: number | string = 0;

    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = secondNumber === 0 ? "Error" : firstNumber / secondNumber;
        break;
      case "%":
        result = (firstNumber / 100) * secondNumber;
        break;
      default:
        result = "Error";
    }

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

  function handleBackspace() {
    if (newNumber) return; // prevent editing result
    if (display.length <= 1 || (display.length === 2 && display.startsWith("-"))) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  }

  return (
    <>
      <div className="header">
        <div>CALCULATOR</div>
        <button className="button" onClick={toggleTheme}>
          {isDark ? (
            <img src="/sun.svg" alt="Sun" style={{ width: 24, height: 24 }} />
          ) : (
            <img src="/moon.svg" alt="Moon" style={{ width: 24, height: 24 }} />
          )}
        </button>
      </div>

      <div className="container">
        <div className="result">{display}</div>
        <div className="numberButtons">
          <button onClick={() => numberClick("7")} className="box">7</button>
          <button onClick={() => numberClick("8")} className="box">8</button>
          <button onClick={() => numberClick("9")} className="box">9</button>
          <button onClick={() => operatorClick("%")} className="box">%</button>

          <button onClick={() => numberClick("4")} className="box">4</button>
          <button onClick={() => numberClick("5")} className="box">5</button>
          <button onClick={() => numberClick("6")} className="box">6</button>
          <button onClick={() => operatorClick("/")} className="box">/</button>

          <button onClick={() => numberClick("1")} className="box">1</button>
          <button onClick={() => numberClick("2")} className="box">2</button>
          <button onClick={() => numberClick("3")} className="box">3</button>
          <button onClick={() => operatorClick("*")} className="box">*</button>

          <button onClick={() => numberClick("0")} className="box">0</button>
          <button onClick={inputDot} className="box">.</button>
          <button onClick={() => operatorClick("-")} className="box">-</button>
          <button onClick={() => operatorClick("+")} className="box">+</button>

          <button onClick={() => numberClick("00")} className="box">00</button>
          <button onClick={handleEqualClick} className="box">=</button>
          <button onClick={handleBackspace} className="box">
            <img src="/backspace.svg" alt="Backspace" style={{ width: 24, height: 24 }} />
          </button>
          <button onClick={handleClear} className="box">AC</button>
        </div>
      </div>
    </>
  );
}

export default App;
