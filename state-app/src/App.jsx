import React from 'react';
import { useState } from "react";
// if we use default NO {}
import CircleComponent from "./CircleComponent";
// default means its the main/only export
export default function App() {
  // const [] = useState(); state is a special var that can update screen
  // let step = 1;
  const [step, setStep] = useState(1);
  const [show, setShow] = useState(true);

  // this is just javascript
  const prevHandler = () => {
    // setStep 1
    // setStep(1);
    // minus 1
    // if statement to prevent negative
    // check if step is something, >, >=, <, <=, =
    if (step > 1) {
      setStep(step - 1);
    }
  }

  // create nextHandler and alert next
  // connect it to Next button
  const nextHandler = () => {
    // setStep();
    // only when true
    if (step < 3) {
      setStep(step + 1);
    }
  }
  // CLOSE
  if (show == false) {
    return (
      <div>
        <button
          onClick={
            () => { setShow(true) }
          }>X</button>
      </div>
    )
  }
  // OPEN
  return (
    <div>
      {/* Close */}
      <div>
        {/* onClick={} */}
        <button onClick={
          () => {
            setShow(false);
          }
        }>X</button>
      </div>
      {/* Circle Component */}
      <CircleComponent
        stateStep={step}
        step={1}
      />
      <CircleComponent
        stateStep={step}
        step={2}
      />
      <CircleComponent
        stateStep={step}
        step={3}
      />
      {/* Text */}
      <h3>Learn React</h3>
      <p>this is state step {step}</p>
      {/* Buttons */}
      <button onClick={prevHandler}>Prev</button>
      <button onClick={nextHandler}>Next</button>
    </div>
  )
}
