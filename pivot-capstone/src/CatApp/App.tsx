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
      <div className="max-w-md px-4 py-6 bg-white shadow-lg rounded mx-auto mt-20 text-center text-black">
        <h2 className="text-xl font-bold mb-4">
          Welcome to my Cat app!
        </h2>
        <Lottie className="h-[100px] w-[100px] mx-auto mb-4" animationData={CatLottie} loop={true} />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:scale-110 transition-scale duration-300"
          onClick={fetchCatFacts}
        >
          Get Random Cat Fact
        </button>
        <h3 className="text-base font-semibold mb-2">
          Random cat fact:
        </h3>
        <p className="mb-4 text-sm">
          {catFact}
        </p>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:scale-110 transition-scale duration-300"
          onClick={enterHandler}
        >
          Enter
        </button>
      </div>

    )
  }
  return (
  <div className="text-center text-black max-w-4xl mx-auto p-4">
  <h1 className="text-[white] text-2xl font-bold mb-2">Cat App</h1>
  <p className="text-[white] mb-4">Press the button to get a cat!!</p>

  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
    {/* First CatImage Card */}
    <div className="bg-blue-100 p-4 rounded shadow-md">
      <CatImage
        imageOfCat={catImage}
        btnTxt="Meow"
        onClick={fetchData}
        className="w-full"
      />
    </div>

    {/* Second CatImage Card */}
    <div className="bg-pink-100 p-4 rounded shadow-md">
      <input
        type="text"
        value={whatCatSays}
        onChange={(e) => setWhatCatSays(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded w-full"
        placeholder="What should the cat say?"
      />
      <CatImage
        imageOfCat={catImageWithTxt}
        btnTxt="Cat Says"
        onClick={fetchCatText}
        className="w-full"
      />
    </div>
  </div>

  {/* Divider */}
  <div className="my-6 w-48 h-[2px] bg-white mx-auto" />
</div>

  )
}