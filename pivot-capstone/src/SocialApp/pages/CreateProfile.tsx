import React from 'react'
import { useState, useEffect } from "react";
import URL from '../url';

export default function CreateProfile(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const createProfile = async () => {
    try {
      const response = await fetch(URL + "/profiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          image,
          description,
          ownerId: props.loginData.id
        }),
      });


      if (response.ok) {
        alert("Profile created!");
        setName("");
        setImage("");
        setDescription("");
        props.getAllProfiles()
      } else {
        const errorData = await response.json();
        alert("Failed to create profile: " + errorData.message);
      }
    } catch (error) {
      console.error("Error creating profile:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create Profile</h2>
        <input
          className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <textarea
          className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          onClick={createProfile}
        >
          Submit
        </button>
      </div>

    </div>
  )
}
