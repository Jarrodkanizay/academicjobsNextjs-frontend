import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { baseURL } from '@/lib/store/Base';

const UserProfile = ({ id, username, email, location }) => {
  const [formData, setFormData] = useState({
    name: username || '',
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
    formDataToSend.append('email', formData.email);
    formDataToSend.append('address', formData.location);
    formDataToSend.append('image', formData.profilePicture);

    try {
      const response = await axios.post(`${baseURL}/auth/updateUserById`, formDataToSend, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response.data);
      window.location.reload(); // Reload the page after successful submission
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <div className="mb-1">
        <label className="block mb-1">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-1">
        <label className="block mb-1">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-1">
        <label className="block mb-1">Location:</label>
        <input
          type="text"
          name="location"
          placeholder="Enter your location"
          value={formData.location}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-1">
        <label className="block mb-1">Profile Picture:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
      </div>
    </form>
  );
};

export default UserProfile;
