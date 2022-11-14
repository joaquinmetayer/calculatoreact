import React, { Component } from "react";
import "./App.css";
import ResultComponent from "./components/ResultComponent";
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }
    try {
      this.setState({
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    document.title = "calculato react";
    return (
      <div>
        <div className="calculator-body">
          <ResultComponent result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
          <h2>
            calculato react... yes, simple but functional{" "}
            <a href="https://github.com/joaquinmetayer">see my github</a>
          </h2>
        </div>
      </div>
    );
  }
}

export default App;