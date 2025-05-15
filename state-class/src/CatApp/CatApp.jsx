// create new folder/file called CatApp
// fill file and connect !dont forget to connect in index.js
import React, { useEffect, useState } from 'react'

const NEW_ANIMALS = [
  { type: "cat", name: "Rubio" },
  { type: "dog", name: "Wally" },
  { type: "bird", name: "Tweety" },
]

// DON'T: console.log("blue")
// DON'T: { color: "blue" }
// GET DOG

export default function CatApp() {
  // setTimeout: adds a delay, setInterval: runs every X seconds
  const getAnimalName = () => {
    // console log Wally
    const check = NEW_ANIMALS.some((element) => {
      return element.name == "Tweety"
    });
    console.log("answer", check);
  }

  getAnimalName();
  // add a delay                          1000mils = 1 sec
  // const myTimeout = setTimeout(getAnimalName, 3000);
  // const myTimeout = setTimeout(myGreeting, 5000);

  return (
    <p>Catssss</p>
  )
}