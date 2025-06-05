import { useEffect, useState } from 'react';
import ProfileCard from "./ProfileCard";
import Header from './Header'

const URL = "https://pivot-backend-n1u5.onrender.com";

function App() {
  const [userLoginData, setUserLoginData] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authFunction = async (auth) => {
    try {
      const response = await fetch(URL + `/auth/${auth}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("userLocalStorage", JSON.stringify(user));
        setUserLoginData(user)
      } else {
        const errorData = await response.json();
        throw new Error(errorData);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  async function getAllProfiles() {
    try {
      const response = await fetch(URL + '/profiles');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setProfiles(data);
    } catch (error) {
      console.error('Failed to fetch profiles:', error);
      return [];
    }
  }

  useEffect(() => {
    const userData = localStorage.getItem("userLocalStorage");
    if (userData) {
      const user = JSON.parse(userData);
      setUserLoginData(user);
    } else {
      console.log("No user logged in");
    }
    getAllProfiles();
  }, []);

  if (!userLoginData?.id) {
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

  return (
    <div>
      <Header userLoginData={userLoginData}  getAllProfiles={getAllProfiles}/>
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} userLoginData={userLoginData} getAllProfiles={getAllProfiles}/>
      ))}
    </div>
  )
}

export default App;