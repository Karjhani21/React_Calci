import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondNumber, setWaitingForSecondNumber] = useState(false);

  const inputNumber = (number) => {
    if (waitingForSecondNumber) {
      setDisplay(String(number));
      setWaitingForSecondNumber(false);
      return;
    }

    setDisplay(display === "0" ? String(number) : display + number);
  };

  const inputDecimal = () => {
    if (waitingForSecondNumber) {
      setDisplay("0.");
      setWaitingForSecondNumber(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clearCalculator = () => {
    setDisplay("0");
    setFirstNumber(null);
    setOperator(null);
    setWaitingForSecondNumber(false);
  };

  const chooseOperator = (nextOperator) => {
    const inputValue = Number(display);

    if (firstNumber === null) {
      setFirstNumber(inputValue);
    } else if (operator) {
      const result = calculate(firstNumber, inputValue, operator);
      setDisplay(String(result));
      setFirstNumber(result);
    }

    setWaitingForSecondNumber(true);
    setOperator(nextOperator);
  };

  const calculate = (first, second, op) => {
    switch (op) {
      case "+":
        return first + second;
      case "-":
        return first - second;
      case "*":
        return first * second;
      case "/":
        return second === 0 ? "Error" : first / second;
      default:
        return second;
    }
  };

  const performCalculation = () => {
    if (firstNumber === null || operator === null) return;

    const secondNumber = Number(display);
    const result = calculate(firstNumber, secondNumber, operator);

    setDisplay(String(result));
    setFirstNumber(null);
    setOperator(null);
    setWaitingForSecondNumber(true);
  };

  const buttons = [
    { label: "C", action: clearCalculator, className: "clear" },
    { label: "÷", action: () => chooseOperator("/"), className: "operator" },
    { label: "×", action: () => chooseOperator("*"), className: "operator" },
    { label: "−", action: () => chooseOperator("-"), className: "operator" },
    { label: "7", action: () => inputNumber(7) },
    { label: "8", action: () => inputNumber(8) },
    { label: "9", action: () => inputNumber(9) },
    { label: "+", action: () => chooseOperator("+"), className: "operator" },
    { label: "4", action: () => inputNumber(4) },
    { label: "5", action: () => inputNumber(5) },
    { label: "6", action: () => inputNumber(6) },
    { label: "=", action: performCalculation, className: "equals" },
    { label: "1", action: () => inputNumber(1) },
    { label: "2", action: () => inputNumber(2) },
    { label: "3", action: () => inputNumber(3) },
    { label: "0", action: () => inputNumber(0), className: "zero" },
    { label: ".", action: inputDecimal }
  ];

  return (
    <main className="page">
      <section className="calculator">
        <div className="header">
          <h1>Simple Calculator</h1>
          <p>React.js Calculator</p>
        </div>

        <div className="display" aria-label="calculator display">
          {display}
        </div>

        <div className="buttons">
          {buttons.map((button) => (
            <button
              key={button.label}
              type="button"
              className={button.className || ""}
              onClick={button.action}
            >
              {button.label}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;