'use client';
import React, { useState } from 'react';
import { BaseApi, baseURL } from '@/lib/store/Base';
import axios
 from 'axios';
 
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                `${baseURL}/auth/resetPassword`,
                { email },
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              );
            if (response.data.success) {
                setSuccessMessage('A password reset link has been sent to your email address.');
                setErrorMessage('');
            } else {
                setErrorMessage(response.data.message || 'There was an error sending the reset link. Please try again later.');
                setSuccessMessage('');
            }
        } catch (error) {
            setErrorMessage('There was an error sending the reset link. Please try again later.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
            {successMessage && (
                <div className="mb-4 p-4 text-green-800 bg-green-100 border border-green-200 rounded">
                    {successMessage}
                </div>
            )}
            {errorMessage && (
                <div className="mb-4 p-4 text-red-800 bg-red-100 border border-red-200 rounded">
                    {errorMessage}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn-aj w-full py-2 px-4 text-white font-semibold rounded-md "
                >
                    Send Reset Link
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
