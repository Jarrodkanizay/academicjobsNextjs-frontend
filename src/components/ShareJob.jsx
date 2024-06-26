import React, { useState } from 'react';
import axios from 'axios';
import { BaseApi } from '@/lib/store/Base';

const ShareJob = ({ jobId, employerId, title, company_name, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    inviterFirstName: '',
    inviterLastName: '',
    indigenousAcademic: false,
  });

  function generateGenericEmail(id, title, company_name, firstName, inviterFirstName, inviterLastName) {
    const emailTemplateGeneric = `<!DOCTYPE html>
      <html>
      <body style="font-family: Arial, sans-serif; margin-top: 50px;">
          <div style="width: 80%; max-width: 800px; margin: auto; padding: 20px; border-radius: 5px;">
            <p>Hello ${firstName},</p>
            <p><br></p>
            <p>I thought I would share this new opportunity with ${company_name}.</p>
            <p><br></p>
            <p>You (or a colleague) might be interested.</p>
            <p>Click and check it out - <a href="https://www.academicjobs.com/jobs/myjob/${id}"
                rel="noopener noreferrer" target="_blank">${company_name}: ${title}</a></p>
            <p><br></p>
            <p>Also, an account has been created for you to join our network with your email and the password provided below, sign in <a href="https://www.academicjobs.com/auth/signin" rel="noopener noreferrer" target="_blank">here</a> 
            </p>
            <p>regards,</p>
            <p>The AcademicJobs Team</p>
            <p>(On behalf of ${inviterFirstName} ${inviterLastName})</p>
            <a href="https://www.academicjobs.com/jobs/myjob/${id}?mode=share" target="_blank">Refer a friend or colleague for this job here./a>
        </div>
      </body>
      </html>`;
    return emailTemplateGeneric;
  }

  const handleCloseForm = () => {
    setFormData({ firstName: '', lastName: '', email: '', inviterFirstName: '', inviterLastName: '', indigenousAcademic: false });
    onClose(); // Close the modal
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await BaseApi.post('/shareJobEmail', {
        ...formData,
        subject: "We need your help to spread the word about our new job opportunity",
        data: generateGenericEmail(jobId, title, company_name, formData.firstName, formData.inviterFirstName, formData.inviterLastName),
      });
      swal("Success", `We've shared this job with ${formData.firstName} ${formData.lastName}!`, "success");
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }

    handleCloseForm();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex z-50 items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg" style={{ width: '90%', maxWidth: '500px' }}>
        <h2 className="text-xl font-bold mb-4">Share this job!</h2>
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-semibold mb-2">Your Information</h3>
          <div className='flex gap-2'>
            <label className="block mb-2">
              First Name:
              <input
                type="text"
                name="inviterFirstName"
                value={formData.inviterFirstName}
                onChange={handleChange}
                required
                className="w-full px-2 py-1 border rounded mt-1"
              />
            </label>
            <label className="block mb-2">
              Last Name:
              <input
                type="text"
                name="inviterLastName"
                value={formData.inviterLastName}
                onChange={handleChange}
                required
                className="w-full px-2 py-1 border rounded mt-1"
              />
            </label>
          </div>

          <h3 className="text-lg font-semibold mb-2">Invitee Information</h3>
          <div className='flex gap-2'>
            <label className="block mb-2">
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-2 py-1 border rounded mt-1"
              />
            </label>
            <label className="block mb-2">
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-2 py-1 border rounded mt-1"
              />
            </label>
          </div>

          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-2 py-1 border rounded mt-1"
            />
          </label>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={handleCloseForm}
              className="bg-gray-500 text-white py-1 px-3 rounded mr-2"
            >
              Cancel
            </button>
            <button type="submit" className="bg-amber-500 text-white py-1 px-3 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareJob;
