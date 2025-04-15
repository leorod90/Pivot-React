import React from 'react';
// if we use default NO {}
import CircleComponent from "./CircleComponent";
// default means its the main/only export
export default function App() {
  // this is just javascript
  const prevHandler = () => {
    alert("previous");
  }
  // create nextHandler and alert next
  // connect it to Next button

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
      <p>this is step 0</p>
      {/* Buttons */}
      <button onClick={prevHandler}>Prev</button>
      <button>Next</button>
    </div>
  )
}
