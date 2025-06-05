import React, { useState } from 'react'
import Modal from "react-modal";

export default function Header(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  // Profile info state
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("userLocalStorage");
    console.log("User logged out");
    window.location.reload(); // or use a redirect if you're using React Router
  };

  const createProfile = async () => {
    const profileData = {
      name,
      image,
      description,
      ownerId: props.userLoginData.id,
    };

    try {
      const res = await fetch("https://pivot-backend-n1u5.onrender.com/profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profileData),
      });

      if (res.ok) {
        props.getAllProfiles();
        alert("Profile created!");
        closeModal();
        setName("");
        setImage("");
        setDescription("");
      } else {
        alert("Failed to create profile.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };


  return (
    <>
      <header className="flex justify-between items-center px-4 py-3 bg-gray-100 shadow-md">
        <button
          onClick={openModal}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-3 rounded"
        >
          Create Profile
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-3 rounded"
        >
          Logout
        </button>
      </header>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="max-w-sm text-black bg-white p-6 rounded-lg shadow-md mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-lg font-semibold mb-4">Create a Profile</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-2 px-3 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full mb-2 px-3 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded"
        />

        <button
          onClick={createProfile}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded mb-2"
        >
          Create Profile
        </button>
        <button
          onClick={closeModal}
          className="w-full bg-gray-300 hover:bg-gray-400 text-black py-2 rounded"
        >
          Cancel
        </button>
      </Modal>
    </>
  )
}
