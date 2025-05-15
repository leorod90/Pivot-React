import React from 'react'
import InfoComponent from './InfoComponent';
import Box from './Box';
// default means its the main/only export
export default function PracticeApp() {
  // this is javascript
  const name = "Leo";
  const favFood = "Burgers";
  const x = 1;
  const y = 2;
  const colors = ["green", "black", "pink"];
  // inside return is HTML
  return (
    <div>
      {/* {} is JS mode */}
      <p>{x * y + 10 / 3}</p>
      <p>x + y + 10</p>
      <InfoComponent
        name={name}
        favFood={favFood}
      />
      <Box
        color="blue"
        size={30}
      />
      <Box
        color="green"
        size={20}
      />
      <Box
        color="red"
        size={50}
      />

      <p>-----------------</p>
      <div
        style={{
          backgroundColor: "blue",
          height: 30,
          width: 30
        }}
      ></div>
      <div
        style={{
          backgroundColor: "green",
          height: 30,
          width: 30
        }}
      ></div>
      <div
        style={{
          backgroundColor: "red",
          height: 30,
          width: 30
        }}
      ></div>


    </div>
  )
}
