import React, { useState } from 'react'
import URL from '../url';

export default function Auth(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const authFunction = async (auth) => {
    try {
      const response = await fetch(URL + `auth/${auth}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        props.setLoginData(data)
      } else {
        const errorData = await response.json();
        console.log(errorData)
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto space-y-4">
      <h1 className="text-xl font-bold text-gray-800">Register/Login</h1>

      <input
        className="w-full text-black bg-white border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        className="w-full text-black bg-white border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white w-full px-4 py-2 rounded-md hover:bg-blue-600 transition"
        onClick={() => authFunction("register")}
      >
        Register
      </button>
      <button
        className="bg-blue-500 text-white w-full px-4 py-2 rounded-md hover:bg-blue-600 transition"
        onClick={() => authFunction("login")}
      >
        Login
      </button>
    </div>
  )
}
