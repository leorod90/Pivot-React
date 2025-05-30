import { Link } from "react-router-dom";

export default function AllProfiles(props) {

  return (
    <div>
      {/* GET */}
      <h1>All Profiles</h1>
      {props.profiles.map((profile) => (
        <Link
          key={profile.id}
          to={`/profile/${profile.id}`}
          className="block border border-gray-300 p-4 m-4 rounded hover:scale-105 transition-transform duration-200"
        >
          <h2 className="text-lg font-bold mb-2">{profile.name}</h2>
          <img
            src={profile.image}
            alt={profile.name}
            className="w-40 h-40 object-cover mb-2 rounded"
          />
          <p className="text-gray-700 mb-1">{profile.description}</p>
          <p className="text-sm text-gray-500">Comments: {profile.commentCount}</p>
        </Link>
      ))}
    </div>
  )
}
