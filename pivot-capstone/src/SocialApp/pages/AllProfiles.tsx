export default function AllProfiles(props) {

  return (
    <div>
      {/* GET */}
      <h1>All Profiles</h1>
      {props.profiles.map(profile => (
        <div key={profile.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <h2>{profile.name}</h2>
          <img
            src={profile.image}
            alt={profile.name}
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <p>{profile.description}</p>
          <p>Comments: {profile.commentCount}</p>
        </div>
      ))}
    </div>
  )
}
