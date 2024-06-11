import React, { useState } from 'react';
import { BaseApi } from '@/lib/store/Base';
import swal from 'sweetalert';

const UserProfile = ({ userId }) => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await BaseApi.put('/updateUserPassword', {
        userId: userId,
        password: formData.password,
      });

      if (response.status === 201) {
        swal("Success", "Password updated successfully", "success");
      }
    } catch (error) {
      console.error('Error updating password:', error);
      swal("Error", "Failed to update password", "error");
    }
  };

  return (
    <>
      <h2>Privacy Settings</h2>
      <form onSubmit={handleSubmit} className="">
        <div className="mb-1">
          <label className="block mb-1">New Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your new password"
              value={formData.password}
              onChange={handleChange}
              className="w-full input input-md input-bordered focus:outline-none focus:border-orange-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 px-3 text-sm text-gray-600 focus:outline-none"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <div className="mb-2">
          <label className="block mb-1">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm your new password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full input input-md input-bordered focus:outline-none focus:border-orange-500"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 px-3 text-sm text-gray-600 focus:outline-none"
            >
              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <div>
          <button type="submit" className="py-2 px-4 btn btn-aj">
            Update Password
          </button>
        </div>
      </form>
    </>
  );
};

export default UserProfile;
