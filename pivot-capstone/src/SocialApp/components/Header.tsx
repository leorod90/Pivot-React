import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link 
          to="/social"
          className="hover:bg-blue-500 px-3 py-2 rounded transition"
          >Social App</Link>
        </h1>
        <div className="space-x-4">
          <Link
            to="/social/create"
            className="bg-white text-blue-600 px-3 py-2 rounded hover:bg-gray-100 transition"
          >
            Create Profile
          </Link>
        </div>
      </nav>
    </header>
  );
}
