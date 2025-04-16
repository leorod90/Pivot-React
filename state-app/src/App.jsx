import React from 'react';
import { useState } from "react";
// if we use default NO {}
import CircleComponent from "./CircleComponent";
// default means its the main/only export
export default function App() {
  // const [] = useState(); state is a special var that can update screen
  // let step = 1;
  const [step, setStep] = useState(1);

  // this is just javascript
  const prevHandler = () => {
    alert("previous");
  }
  // create nextHandler and alert next
  // connect it to Next button
  const nextHandler =
    () => { 
      setStep(2);
    }

  return (
    <div>
      {/* Close */}
      <div>
        <button>X</button>
      </div>
      {/* Circle Component */}
      <CircleComponent
        step={1}
      />
      <CircleComponent
        step={2}
      />
      <CircleComponent
        step={3}
      />
      {/* Text */}
      <h3>Learn React</h3>
      <p>this is step {step}</p>
      {/* Buttons */}
      <button onClick={prevHandler}>Prev</button>
      <button onClick={nextHandler}>Next</button>
    </div>
  )
}
