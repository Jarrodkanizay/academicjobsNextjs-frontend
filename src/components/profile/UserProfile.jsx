import React, { useState } from 'react';
import axios from 'axios';
import { baseURL } from '@/lib/store/Base';
import { useSession } from 'next-auth/react';
import { BaseApi } from '@/lib/store/Base';

const initiateNewSession = (userData, session) => {
  const newSession = {
    user: userData,
    expires: session.expires
  };
  console.log("New session object created:", newSession);
  return newSession;
};

const UserProfile = ({ id, firstName, lastName, email, location }) => {
  const { data: session, update: setSession } = useSession();
  const [formData, setFormData] = useState({
    firstName: firstName || '',
    lastName: lastName || '',
    email: email || '',
    location: location || '',
    image: null,
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
      image: file,
    });
  };

  const getSignedUrl = async (fileName, targetDir) => {
    try {
      const response = await BaseApi.post(`/generate-upload-url`, {
        fileName: fileName,
        directory: targetDir,
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      console.log('Signed URL response:', response.data.presignedUploadUrl); // Debugging log
      return response.data.presignedUploadUrl;
    } catch (error) {
      console.error('Error getting signed URL:', error);
      throw new Error('Could not get signed URL');
    }
  };

  const uploadToS3 = async (signedUrl, file) => {
    try {
      await axios.put(signedUrl, file);
    } catch (error) {
      console.error('Error uploading file to S3:', error);
      throw new Error('Could not upload file to S3');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let fileName = null;
    if (formData.image) {
      const file = formData.image;
      fileName = `${file.name}`;

      const signedUrl = await getSignedUrl(fileName, 'users');
      await uploadToS3(signedUrl, file);
    }
    console.log("hello", fileName);

    const formDataToSend = {
      id,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      location: formData.location,
      image: `https://academicjobs.s3.amazonaws.com/img/users/${fileName}`,
    };

    try {
      const response = await axios.post(`${baseURL}/auth/updateUserById`, formDataToSend, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.accessToken}`
        },
      });

      const updatedUserData = response.data.user;
      console.log('Updated user data:', updatedUserData);

      const newSession = initiateNewSession(updatedUserData, session);
      await setSession(newSession.user);
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
          className="w-full input input-md" />
      </div>
      <div>
        <button type="submit" className="py-2 px-4 btn btn-aj">Save Changes</button>
      </div>
    </form></>
  );
};

export default UserProfile;
