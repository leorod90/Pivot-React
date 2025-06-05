import React from 'react'
import { Link } from "react-router-dom";

const APPS_ARRAY = [
  {
    route: "dice",
    name: "Dice Game",
    img: "/dice-app.png",
  },
  {
    route: "contacts",
    name: "Contact Search",
    img: "/search-app.png",
  },
  {
    route: "cats",
    name: "Cat App",
    img: "/cat-app.png",
  },
  {
    route: "social",
    name: "Social App",
    img: "/social-app.png",
  },
  {
    route: "youtube",
    name: "Movie App",
    img: "",
  },
  {
    route: "social-basic",
    name: "Social App Basic",
    img: "",
  },
  // {
  //   route: "profile",
  //   name: "Profile Viewer",
  //   img: "https://via.placeholder.com/100?text=Profile",
  // },
];

export default function App() {
  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
      {APPS_ARRAY.map((app) => (
        <Link
          to={`/${app.route}`}
          key={app.route}
          className="h-[160px] w-[200px] rounded-sm shadow hover:scale-105 transition-transform bg-white p-2 text-center flex flex-col"
        >
          <img
            src={app.img}
            alt={app.name}
            className="rounded object-cover w-full h-4/5 mb-2"
          />
          <h2 className="text-black text-lg font-semibold mt-auto">{app.name}</h2>
        </Link>
      ))}
    </div>
  );
}
