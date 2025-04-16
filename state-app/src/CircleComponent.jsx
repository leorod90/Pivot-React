import React from 'react';
// default means it the only thing being exported
export default function CircleComponent(props) {

  return (
    <div style={{
      border: "2px solid black",
      padding: 5,
      display: "inline-block",
      backgroundColor:
        props.step <= props.stateStep ?
          "pink" : "white",
      // dont worry about below
      height: 40,
      width: 40,
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: 'center'
    }}>
      <p>{props.step}</p>
    </div>
  )
}
