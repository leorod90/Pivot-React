import "./App.css"
import React, { useEffect, useState } from 'react'
import CatImage from "./components/CatImage"
import Lottie from "lottie-react";
import CatLottie from "../assets/cat_1.json";
// API
// create a function called fetchData and link to button
export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [catImage, setCatImage] = useState(null);
  const [catImageWithTxt, setCatImageWithTxt] = useState(null);
  const [whatCatSays, setWhatCatSays] = useState("");
  const [enterSite, setEnterSite] = useState(false);
  const [catFact, setCatFact] = useState("");

  // async await: NEW WAY
  const fetchData = async () => {
    setIsLoading(true);
    try {

      const response = await fetch("https://cataas.com/cat?json=true"); // IMPORTANT!!
      if (!response.ok) {
        throw new Error("Oops, Something went wrong!");
      }
      const data = await response.json(); // DONT WORRY FOR NOW

      setCatImage(data.url)

    } catch (error) {
      alert(error);
    }

    setIsLoading(false);
  }
  // then catch: OLD WAY
  const fetchCatText = () => {
    // const timestamp = Date.now(); // fetch("https://cataas.com/cat/says/break till 7:45?timestamp=" + timestamp)
    fetch(`https://cataas.com/cat/says/${whatCatSays}?fontSize=200&filter=mono&fontColor=orange`)
      .then(
        (response) => {
          console.log(response);
          if (!response.ok) {
            throw new Error("Oops, Something went wrong!");
          }
          setCatImageWithTxt(response.url);
        }
      )
      .catch(
        (error) => {
          alert(error);
        }
      )
  }

  // then update handler to change state enterSite true
  // connect the handler to button
  const enterHandler = () => {
    setEnterSite(true);
  }

  const fetchCatFacts = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact?max_length=140"); // IMPORTANT!!
      if (!response.ok) {
        throw new Error("Oops, Something went wrong!");
      }
      const data = await response.json(); // DONT WORRY FOR NOW
      setCatFact(data.fact)
    } catch (error) {
      alert(error);
    }
  }

  if (enterSite == false) {
    return (
      <div>
        <h2>Welcome to my Cat app!</h2>
        <Lottie animationData={CatLottie} loop={true} />
        <button onClick={fetchCatFacts}>Get Random Cat Fact</button>
        <h3>Random cat fact:</h3>
        <p>{catFact}</p>
        <button onClick={enterHandler}>Enter</button>
      </div>
    )
  }
  return (
    <div>
      <h1>Cat App</h1>
      <p>press the button to get a cat!!</p>

      <CatImage
        imageOfCat={catImage}
        btnTxt="Meow"
        onClick={fetchData}
      />
      <div style={{
        margin: "20px 0px",
        width: 200,
        height: 1,
        backgroundColor: "white"
      }} />
      <input
        type="text"
        value={whatCatSays}
        onChange={(e) => setWhatCatSays(e.target.value)}
      />
      <CatImage
        imageOfCat={catImageWithTxt}
        btnTxt="Cat Says"
        onClick={fetchCatText}
      />
    </div>
  )
}