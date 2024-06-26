import React, { useState } from 'react';
import axios from 'axios';
import { BaseApi } from '@/lib/store/Base';

const ShareJob = ( { jobId, employerId, title, company_name, onClose } ) => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    indigenousAcademic: false,
  });


  function generateGenericEmail(id, title, company_name, firstName) {
    const emailTemplateGeneric =
      `<!DOCTYPE html>
      <html>
      <body style="font-family: Arial, sans-serif; margin-top: 50px;">
          <div style="width: 80%; max-width: 800px; margin: auto; padding: 20px; border-radius: 5px;">
            <p>Hello ${firstName},</p>
            <p><br></p>
            <p>I hope this email finds you well.</p>
            <p><br></p>
            <p>We are excited to inform you about a job opportunity that aligns perfectly with your skills and experience.
                ${company_name} is currently seeking to fill the position of ${title}. Based on your profile and
                background, we believe this role could be an excellent fit for you.</p>
            <p><br></p>
            <p>We encourage you to review the full job description and consider applying for this position. You can find more
                details and submit your application through the following link:  <a href="https://www.academicjobs.com/jobs/myjob/${id}"
                rel="noopener noreferrer" target="_blank">${company_name}: ${title}</a></p>
            <p><br></p>
            <p>Also, an account has been created for you to join our network with your email and the password provided below, sign in <a href="https://www.academicjobs.com/auth/signin" rel="noopener noreferrer" target="_blank">here</a> 
            </p>
            <b>password:</b> dfxg9CIqip
            <p><br></p>
            <p>Best regards,</p>
            <p>Jarrod</p>
            <p><img src="https://academicjobs.s3.amazonaws.com/img/_misc/jarrod-email-signature-generic.png" height="218" width="434" alt="Jarrod"></p>
        </div>
      </body>
      </html>
      `;
    return emailTemplateGeneric;
  }


  const handleCloseForm = () => {
    setFormData({ firstName: '', lastName: '', email: '', indigenousAcademic: false });
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
        subject: "subject",
        data: generateGenericEmail(jobId, title, company_name, formData.firstName),
      });
      swal("Success", `We've shared this job with ${formData.firstName} ${formData.lastName}!`, "success");
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }
  
    // let response;
    // try {
    //   response = await BaseApi.post('/addUser', {
    //     ...formData,
    //     indigenousAcademic: formData.indigenousAcademic,
    //   });
  
    //   if (response && response.data && response.data.id) {
    //     try {
    //       await BaseApi.post('/favoriteJobId', {
    //         mode: "add",
    //         jobId: jobId,
    //         userId: response.data.id
    //       });
      
    //     } catch (favoriteJobError) {
    //       console.error('Setting favorite job failed:', favoriteJobError);
    //     }
      
    //     try {
    //       await BaseApi.post('/favoriteEmployerId', {
    //         mode: "add",
    //         employerId: employerId, 
    //         userId: response.data.id,
    //         type: "FAVORITE"
    //       });
      
    //     } catch (favoriteEmployerError) {
    //       console.error('Setting favorite employer failed:', favoriteEmployerError);
    //     }
    //   }
      
  
    // } catch (error) {
    //   console.error('User add failed:', error);
    // }
  
    handleCloseForm();
  };
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex z-50 items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg" style={{ width: '90%', maxWidth: '500px' }}>
        <h2 className="text-xl font-bold mb-4">Share this job!</h2>
        <form onSubmit={handleSubmit}>
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
          {/* <label className="block mb-2">
            Is this person an indigenous academic:
            <input
              type="checkbox"
              name="indigenousAcademic"
              checked={formData.indigenousAcademic}
              onChange={handleChange}
              className="ml-2"
            />
          </label> */}
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
