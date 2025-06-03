import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import URL from '../url';

export default function Profile(props) {
  const { id } = useParams();
  const [commentText, setCommentText] = useState("");
  const [status, setStatus] = useState("");
  const [profile, setProfile] = useState(null);

  async function getProfile() {
    try {
      console.log(URL + '/profiles/' + id)
      const response = await fetch(URL + '/profiles/' + id);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setProfile(data);
      console.log(data)
    } catch (error) {
      console.error('Failed to fetch profiles:', error);
      return [];
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  async function submitComment() {
    if (!commentText.trim()) return;

    try {
      const response = await fetch(
        `${URL}/profiles/${id}/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: commentText,
            ownerId: props.loginData.id,
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to submit comment");

      setStatus("✅ Comment submitted!");
      setCommentText("");
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to submit comment");
    }
  }

  if (!profile) return <div className="p-4">Loading...</div>;

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded-lg text-black">
      <img
        src={profile.image}
        alt={profile.name}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-2xl font-bold mt-4">{profile.name}</h2>
      <p className="text-gray-700">{profile.description}</p>
      <h5>Comments</h5>
      <div className="border-t pt-4">
        {profile?.comments?.length > 0 ? (
          profile.comments.map((c, i) => (
            <div key={i} className="mb-2 p-2 bg-gray-100 rounded">
              <p>{c.username}: {c.text}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No comments yet.</p>
        )}
      </div>
      <div className="mt-4">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-2 border border-gray-300 rounded mb-2"
          rows="3"
        />
        <button
          onClick={submitComment}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Post Comment
        </button>
        {status && <p className="mt-2 text-sm">{status}</p>}
      </div>
    </div>
  );
}