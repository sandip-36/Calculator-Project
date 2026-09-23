import ButtonItem from "./components/ButtonItem";
import style from "./components/CSS/App.module.css"
import './App.css'
import { useState } from "react";

const App = () => {

  let [calVal, setCalval] = useState("")

  const buttonValue = (buttontext) => {
    if(buttontext === "AC"){
      setCalval("");
    }
    else if(buttontext === "C"){
      setCalval(calVal.slice(0, -1));
    }
    else if(buttontext === "="){
      try {
        const expression = calVal
        .replace(/x/g, "*")
        .replace(/÷/g, "/");

        const result = eval(expression);
        setCalval(String(result));
      } catch (error) {
        setCalval("Error");
      }

    }else{
      let newdisplayvalue = calVal + buttontext;
      setCalval(newdisplayvalue);
    }
  }
  
  return <>

    <div class="calculator">
        <div class="calculator-header">
            <div class="calculator-icon">▣</div>
            <h1>Calculator</h1>
            <span class="history">↶</span>
        </div>

        <input type="text" value={calVal} className={`form-control display`} readOnly/>

        <ButtonItem buttonClick={buttonValue}></ButtonItem>
    </div>
  </>
}

export default App;