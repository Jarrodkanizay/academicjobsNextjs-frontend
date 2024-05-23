import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { baseURL } from '@/lib/store/Base';
import { useSession } from 'next-auth/react';

// Function to initiate a new session with the updated user data
const initiateNewSession = (userData, session) => {
  // Create a new session object with the updated user data
  const newSession = {
    user: userData,
    expires: session.expires // Keep the expires property unchanged
  };
  console.log("New session object created:", newSession);
  return newSession;
};

const UserProfile = ({ id, firstName, lastName, email, location }) => {
  const { data: session, update: setSession } = useSession(); // Use the useSession hook to get session data and update function
  const [formData, setFormData] = useState({
    name: firstName || '',
    name: lastName || '',
    email: email || '',
    location: location || '',
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      profilePicture: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('id', id);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('firstName', formData.firstName);
    formDataToSend.append('lastName', formData.lastName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('address', formData.location);
    formDataToSend.append('image', formData.profilePicture);

    try {
      const response = await axios.post(`${baseURL}/auth/updateUserById`, formDataToSend, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.accessToken}`
        },
      });

      const updatedUserData = response.data.user;
      console.log('Updated user data:', updatedUserData);

      // Step 3: Initiate a new session with the updated user data
      const newSession = initiateNewSession(updatedUserData, session);

      // Step 4: Update client-side session data
      await setSession(newSession.user); // Update session using next-auth's update function
      console.log('Session successfully updated:', newSession);

    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <><h2>My Details</h2>
    <form onSubmit={handleSubmit} className="">
      <div className="mb-1">
        <label className="block mb-1">First Name:</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full input input-md input-bordered focus:outline-none focus:border-orange-500" />
      </div>
      <div className="mb-1">
        <label className="block mb-1">Last Name:</label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full input input-md input-bordered focus:outline-none focus:border-orange-500" />
      </div>
      <div className="mb-1">
        <label className="block mb-1">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full input input-md input-bordered focus:outline-none focus:border-orange-500" />
      </div>
      <div className="mb-1">
        <label className="block mb-1">Location:</label>
        <input
          type="text"
          name="location"
          placeholder="Enter your location"
          value={formData.location}
          onChange={handleChange}
          className="w-full input input-md input-bordered focus:outline-none focus:border-orange-500" />
      </div>
      <div className="mb-1">
        <label className="block mb-1">Profile Picture:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full input input-md input-bordered focus:outline-none focus:border-orange-500" />
      </div>
      <div>
        <button type="submit" className="py-2 px-4 btn btn-aj">Save Changes</button>
      </div>
    </form></>
  );
};

export default UserProfile;