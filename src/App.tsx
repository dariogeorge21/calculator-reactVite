
import './App.css'

function App() {


  return (
    <>
      <div className="header">Calculator</div>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-backspace" viewBox="0 0 16 16">
              <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
              <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
            </svg>
          </button>
          <button className="box">AC</button>
        </div>
      </div>
    </>
  )
}

export default App
