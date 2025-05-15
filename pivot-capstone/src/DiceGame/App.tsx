import { useState } from "react";
import "./App.css"
import React, { useRef } from 'react'
import ReactDice, { ReactDiceRef } from 'react-dice-complete'

function App() {
  const [playerDice, setPlayerDice] = useState();
  const [cpuDice, setCpuDice] = useState();
  const [winnerTxt, setWinnerTxt] = useState();

  // func: roll dice
  const rollDice = (total, values) => {
    // const playerRoll = Math.ceil(Math.random() * 6);
    // const cpuRoll = Math.ceil(Math.random() * 6);
    // array in the const
    const playerRoll = values[0];
    const cpuRoll = values[1];

    setPlayerDice(playerRoll);
    setCpuDice(cpuRoll);

    if (playerRoll > cpuRoll) {
      setWinnerTxt("Congrats, you win!");
    } else if (playerRoll === cpuRoll) {
      setWinnerTxt("It's a tie!");
    } else if (playerRoll < cpuRoll) {
      setWinnerTxt("You loose!");
    }
  }

  const reactDice = useRef<ReactDiceRef>(null)

  const rollDone = (totalValue: number, values: number[]) => {
    console.log('individual die values array:', values)
    console.log('total dice value:', totalValue)
  }

  const rollAll = () => {
    reactDice.current?.rollAll()
  }

  return (
    <div className="container">
      <h1>Dice Game vs CPU</h1>
      <button onClick={rollAll}>Roll Dice</button>
      {/* use variables in html */}
      <h6>Your Roll: {playerDice}</h6>
      <h6>CPU Roll: {cpuDice}</h6>
      <ReactDice
        numDice={2}
        ref={reactDice}
        //rollDone={rollDone}
        dotColor="#fff"
        faceColor="#000000"
        rollDone={rollDice}
      />
      <h2>{winnerTxt}</h2>
    </div>
  );
}
export default App 