'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter to handle navigation
import { useSearchParams } from 'next/navigation'; // Import useSearchParams to access URL parameters
import axios from 'axios';
import swal from 'sweetalert';
import { BaseApi } from '@/lib/store/Base';
import Link from 'next/link';

const UserProfile = ({ userId }) => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false); // State for current password visibility

  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const id = searchParams.get('id');

  const [currentUserId, setCurrentUserId] = useState(userId);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    if (!userId && id) {
      setCurrentUserId(id); // Set currentUserId to the id from URL if userId is null
    }
  }, [userId, id]);

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
      swal("Error", "Passwords do not match", "error");
      return;
    }

    try {
      const formDataToSend = {
        userId: currentUserId || id,
        password: formData.password,
        ...(token && { token }), // Add token only if it exists
        ...(userId && { currentPassword: formData.currentPassword }) // Add currentPassword only if userId is not null
      };

      const response = await BaseApi.put('/updateUserPassword', 
        { formDataToSend },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        swal("Success", "Password updated successfully", "success").then(() => {
          if (!userId) {
            router.push('/'); // Redirect to the home page if initial userId is null
          }
        });
      }
    } catch (error) {
      console.error('Error updating password:', error);
      swal("Error", "Failed to update password", "error");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="">
        {userId && (
          <div className="mb-1">
            <label className="block mb-1">Current Password</label>
            <div className="relative">
              <input
                type={showCurrentPassword ? 'text' : 'password'}
                name="currentPassword"
                placeholder=""
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-full input input-md input-bordered focus:outline-none focus:border-orange-500"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute inset-y-0 right-0 px-3 text-sm text-gray-600 focus:outline-none"
              >
                {showCurrentPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
        )}
        <div className="mb-1">
          <label className="block mb-1">New Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder=""
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
              placeholder=""
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
        <div className="flex justify-between">
          <button type="submit" className="py-2 px-4 btn btn-aj">
            Update Password
          </button>
          {userId && <Link className="text-blue-500 hover:underline" href="/auth/forgot-password">Forgot Password.</Link>}
        </div>
      </form>
    </>
  );
};

export default UserProfile;
