import React, { useState } from 'react';
import axios from 'axios';
import { baseURL } from '@/lib/store/Base';
import { useSession } from 'next-auth/react';
import { BaseApi } from '@/lib/store/Base';
import { useRouter } from 'next/navigation';

const UserProfile = ({ id, updateProfile, userProfile }) => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(userProfile.image);
  const [formData, setFormData] = useState({
    firstName: userProfile.firstName || '',
    lastName: userProfile.lastName || '',
    email: userProfile.email || '',
    address: userProfile.address || '',
    image: userProfile.avatar || null,
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
      const response = await BaseApi.post(
        `/generate-upload-url`,
        {
          fileName: fileName,
          directory: targetDir,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Signed URL response:', response.data.presignedUploadUrl);
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

    let fileName = UserProfile.avatar;
    if (formData.image) {
      const file = formData.image;
      fileName = `${file.name}`;

      const signedUrl = await getSignedUrl(fileName, 'users');
      await uploadToS3(signedUrl, file);
    }

    const formDataToSend = {
      id,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      address: formData.address,
      image: fileName,
    };

    updateProfile(() => ({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      address: formData.address,
      avatar: fileName,
    }));

    try {
      const response = await axios.post(
        `${baseURL}/auth/updateUserById`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const updatedUserData = response.data.user;
      console.log('Updated user data:', updatedUserData);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
    if (session) router.refresh();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <h2>My Details??</h2>
      <form onSubmit={handleSubmit} className="">
        <div className="mb-1">
          <label className="block mb-1">First Name:</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full input input-md input-bordered focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="mb-1">
          <label className="block mb-1">Last Name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full input input-md input-bordered focus:outline-none focus:border-orange-500"
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
            className="w-full input input-md input-bordered focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="mb-1">
          <label className="block mb-1">Address:</label>
          <input
            type="input"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            className="w-full input input-md input-bordered focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="mb-1">
          <label className="block mb-1">Profile Picture:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full input input-md"
          />
        </div>
        <h3 className="mb-4">Indigenous Australian Heritage</h3>
        <p>
          We acknowledge and respect the diverse cultures and identities of
          Indigenous Australians. If you feel comfortable, please let us know if
          you identify as an Indigenous Australian. This information can help us
          to provide more relevant and tailored services.
        </p>
        <label className="cursor-pointer label mb-8">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-warning"
          />
          <span className="label-text grow ml-4">
            I identify as an Indigenous Australian.
          </span>
        </label>
        <div>
          <button type="submit" className="py-2 px-4 btn btn-aj">
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
};

export default UserProfile;
