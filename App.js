import "./App.css";
import react, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const calculate = (id) => {
    debugger;
    if (id === "C") {
      setInput("");
    }
    if (id === "backSpace") {
      setInput(input.slice(0, -1));
    }
    if (id == "+" || id == "-" || id == "*" || id == "/" || id == "%") {
      if (
        input.charAt(input.length - 1) == "+" ||
        input.charAt(input.length - 1) == "-" ||
        input.charAt(input.length - 1) == "/" ||
        input.charAt(input.length - 1) == "%" ||
        input.charAt(input.length - 1) == "*"
      ) {
        let inp = "";
        inp = input.substring(0, input.length - 1);
        setInput(inp + id);
        return;
      } else {
        setInput(input + id);
      }
    }
    if (id === "=") {
      if (!isNaN(input.charAt(input.length - 1))) {
        //eval() - gets a string argument and if contains arithmetic expression is calculates it
        let res = eval(input);
        setInput(res.toString());
      } else {
        let inp = "";
        inp = input.substring(0, input.length - 1);
        let res = eval(inp);
        setInput(res.toString());
      }
    }
  };

  const addChar = (id) => {
    if (
      id === "=" ||
      id === "+" ||
      id === "-" ||
      id === "*" ||
      id === "/" ||
      id === "%" ||
      id === "C" ||
      id === "backSpace"
    ) {
      calculate(id);
    } else {
      setInput(input + id);
    }
  };

  return (
    <div className="App">
      {input}
      <div>
        <button id="backSpace" onClick={(e) => addChar(e.target.id)}>
          <img src="" alt="" />
        </button>
        <button id="C" onClick={(e) => addChar(e.target.id)}>
          C
        </button>
      </div>
      <div className="numbers">
        <button id="1" onClick={(e) => addChar(e.target.id)}>
          1
        </button>
        <button id="2" onClick={(e) => addChar(e.target.id)}>
          2
        </button>
        <button id="3" onClick={(e) => addChar(e.target.id)}>
          3
        </button>
        <button id="4" onClick={(e) => addChar(e.target.id)}>
          4
        </button>
        <button id="5" onClick={(e) => addChar(e.target.id)}>
          5
        </button>
        <button id="6" onClick={(e) => addChar(e.target.id)}>
          6
        </button>
        <button id="7" onClick={(e) => addChar(e.target.id)}>
          7
        </button>
        <button id="8" onClick={(e) => addChar(e.target.id)}>
          8
        </button>
        <button id="9" onClick={(e) => addChar(e.target.id)}>
          9
        </button>
        <button id="0" onClick={(e) => addChar(e.target.id)}>
          0
        </button>
        <button id="." onClick={(e) => addChar(e.target.id)}>
          .
        </button>
        <button id="%" onClick={(e) => addChar(e.target.id)}>
          %
        </button>
      </div>
      <div className="calculate">
        <button id="+" onClick={(e) => addChar(e.target.id)}>
          +
        </button>
        <button id="-" onClick={(e) => addChar(e.target.id)}>
          -
        </button>
        <button id="/" onClick={(e) => addChar(e.target.id)}>
          /
        </button>
        <button id="*" onClick={(e) => addChar(e.target.id)}>
          *
        </button>
      </div>
      <button id="=" onClick={(e) => addChar(e.target.id)}>
        =
      </button>
    </div>
  );
}
