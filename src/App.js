import React, { useState } from "react";
import "./App.css"; // Asegúrate de tener un archivo CSS para los estilos

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  const handleOperationClick = (op) => {
    setInput((prevInput) => prevInput + op);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="screen">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="0"
          />
          <div className="result" data-testid="result">
            {result}
          </div>
        </div>
        <div className="buttons">
          <button onClick={() => handleOperationClick("7")}>7</button>
          <button onClick={() => handleOperationClick("8")}>8</button>
          <button onClick={() => handleOperationClick("9")}>9</button>
          <button onClick={() => handleOperationClick("/")}>/</button>
          <button onClick={() => handleOperationClick("4")}>4</button>
          <button onClick={() => handleOperationClick("5")}>5</button>
          <button onClick={() => handleOperationClick("6")}>6</button>
          <button onClick={() => handleOperationClick("*")}>*</button>
          <button onClick={() => handleOperationClick("1")}>1</button>
          <button onClick={() => handleOperationClick("2")}>2</button>
          <button onClick={() => handleOperationClick("3")}>3</button>
          <button onClick={() => handleOperationClick("+")}>+</button>
          <button onClick={() => handleOperationClick("0")}>0</button>
          <button onClick={() => handleOperationClick(".")}>.</button>
          <button onClick={() => calculateResult()}>=</button>
          <button onClick={() => setInput("")}>C</button>
          <button onClick={() => handleOperationClick("-")}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;