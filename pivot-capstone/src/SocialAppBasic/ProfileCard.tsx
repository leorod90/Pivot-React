import React, { useState } from "react";
import Modal from "react-modal";

const ProfileCard = ({ profile, userLoginData, getAllProfiles }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [commentText, setCommentText] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


  const postComment = async () => {
    const commentData = {
      text: commentText,
      ownerId: userLoginData.id,
    };
    console.log(`https://pivot-backend-n1u5.onrender.com/profiles/${profile.id}/comments`)
    try {
      const response = await fetch(`https://pivot-backend-n1u5.onrender.com/profiles/${profile.id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      });
      console.log(response)
      if (response.ok) {
        getAllProfiles()
        alert("Comment posted!");
        setCommentText(""); // clear the text
        closeModal(); // close the modal
      } else {
        alert("Failed to post comment.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow hover:scale-105 transition-transform p-4 w-full max-w-xs">
      <img
        src={profile.image}
        alt={profile.name}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h3 className="text-lg text-black font-semibold">{profile.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{profile.description}</p>
      {profile.comments?.length > 0 ? (
        <p className="text-xs text-gray-500 italic">
          {profile.commentCount} comment{profile.commentCount > 1 ? "s" : ""}
        </p>
      ) : (
        <p className="text-xs text-gray-400 italic">No comments yet</p>
      )}
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Leave a Comment
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="text-black max-w-sm bg-white p-6 rounded-lg shadow-md mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >

        {profile.comments?.length > 0 ? (
          <div className="mt-2 space-y-1">
            {profile.comments.map((comment) => (
              <div
                key={comment.id}
                className="text-sm text-gray-800 bg-gray-100 rounded p-2"
              >
                {comment.username}: {comment.text}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-gray-400 italic mt-2">No comments yet</p>
        )}

        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Type your comment here..."
          className="w-full border rounded px-3 py-2 mb-4"
        />

        <button
          onClick={postComment}
          className="w-full bg-green-500 text-white py-2 rounded mb-2"
        >
          Submit Comment
        </button>

        <button
          onClick={closeModal}
          className="w-full bg-gray-300 text-black py-2 rounded"
        >
          Cancel
        </button>
      </Modal>
    </div>
  );
};

export default ProfileCard;
