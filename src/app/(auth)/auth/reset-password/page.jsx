'use client'
import React from 'react';
import ResetPassword from '@/components/profile/ResetPassword';

const ResetPasswordPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <ResetPassword userId={null} />
        </div>
    );
};

export default ResetPasswordPage;