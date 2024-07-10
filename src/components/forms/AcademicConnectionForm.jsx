"use client";
import { useState } from "react";
import { BaseApi } from "@/lib/store/Base";
import swal from "sweetalert";
import { externalEmail } from "@/templates/emails/academic-connection-external-email.js";
import { internalEmail } from "@/templates/emails/academic-connection-internal-email.js";
import { externalEmailNoPassword } from "@/templates/emails/academic-connection-external-email-no-password.js";
import { internalEmailNoPassword } from "@/templates/emails/academic-connection-internal-email-no-password.js";

const ShareForm = ({ jobId, title, company_name, employerId }) => {
  const [forms, setForms] = useState([
    { id: Date.now(), firstName: "", lastName: "", email: "", internalEmployee: false, emailError: false, emailErrorMessage: "" },
  ]);
  const [inviter, setInviter] = useState({ firstNameInviter: "", lastNameInviter: "" });

  const addForm = () => {
    setForms([...forms, { id: Date.now(), firstName: "", lastName: "", email: "", internalEmployee: false, emailError: false, emailErrorMessage: "" }]);
  };

  const deleteForm = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  function generateEmail(jobId, title, company_name, firstName, inviterName, emailTemplate) {
      return emailTemplate
      .replace(/\${id}/g, jobId)
      .replace(/\${title}/g, title)
      .replace(/\${company_name}/g, company_name)
      .replace(/\${firstName}/g, firstName)
      .replace(/\${inviterName}/g, inviterName);
  }

  function generateEmailWithoutPassword(jobId, title, company_name, firstName, inviterName, internalEmployee) {
    const emailTemplate = internalEmployee ? internalEmailNoPassword : externalEmailNoPassword;
    return generateEmail(jobId, title, company_name, firstName, inviterName, emailTemplate);
  }

  function generateEmailWithPassword(jobId, title, company_name, firstName, inviterName, internalEmployee) {
    const emailTemplate = internalEmployee ? internalEmail : externalEmail;
    return generateEmail(jobId, title, company_name, firstName, inviterName, emailTemplate);
  }

  const handleChange = (id, field, value) => {
    const updatedForms = forms.map((form) => {
      if (form.id === id) {
        return { ...form, [field]: value };
      }
      return form;
    });
    setForms(updatedForms);
  };

  const handleInviterChange = (field, value) => {
    setInviter({ ...inviter, [field]: value });
  };

  const handleBlur = async (id, value) => {
    try {
      const response = await BaseApi.post("/checkAcademicConnection", {
        email: value,
        jobId: jobId,
      });

      if (response.data.exists) {
        setForms((prevForms) =>
          prevForms.map((form) =>
            form.id === id ? { ...form, emailError: true, emailErrorMessage: "This email has already been sent an invite." } : form
          )
        );
      } else {
        setForms((prevForms) =>
          prevForms.map((form) =>
            form.id === id ? { ...form, emailError: false, emailErrorMessage: "" } : form
          )
        );
      }
    } catch (error) {
      console.error("Error checking email existence:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let allSuccess = true;
    
    for (const form of forms) {
      if (form.emailError) {
        continue; // Skip forms with email errors
      }
  
      let response;
      let userId;
  
      try {
        response = await BaseApi.post("/addUser", {
          ...form,
        });
  
        if (response && response.data && response.data.id) {
          userId = response.data.id;
  
          try {
            await BaseApi.post("/favoriteJobId", {
              mode: "add",
              jobId: jobId,
              userId: userId,
            });
          } catch (favoriteJobError) {
            console.error("Setting favorite job failed:", favoriteJobError);
          }
  
          try {
            await BaseApi.post("/favoriteEmployerId", {
              mode: "add",
              employerId: employerId,
              userId: userId,
              type: "FAVORITE",
            });
          } catch (favoriteEmployerError) {
            console.error("Setting favorite employer failed:", favoriteEmployerError);
          }
        }
      } catch (error) {
        console.error("User add failed:", error);
        allSuccess = false;
      }
  
      try {
        let emailTemplate;
  
        if (userId) {
          const checkAcademicConnection = await BaseApi.post("/checkAcademicConnection", {
            email: form.email,
            jobId,
          });
  
          if (checkAcademicConnection.data.exists) {
            console.log("User and job already connected. No email will be sent.");
            continue;
          }
          
          if (response.data.exists) {
            console.log("User exists but no job connection. Sending email without password info.");
            emailTemplate = generateEmailWithoutPassword(jobId, title, company_name, form.firstName, `${inviter.firstNameInviter} ${inviter.lastNameInviter}`, form.internalEmployee);
          } else {
            console.log("User does not exist. Sending email with password info.");
            emailTemplate = generateEmailWithPassword(jobId, title, company_name, form.firstName, `${inviter.firstNameInviter} ${inviter.lastNameInviter}`, form.internalEmployee);
          }
  
          const subject = form.internalEmployee
            ? `Our job listing '${title}' needs your help...`
            : `${company_name} Opportunity`;
  
          await BaseApi.post("/shareJobEmail", {
            ...form,
            subject: subject,
            data: emailTemplate,
          });
  
          await BaseApi.post("/addAcademicConnection", {
            userId,
            jobId,
            email: form.email,
            firstName: form.firstName,
            lastName: form.lastName
          });
  
          swal("Success", `Thank you for sharing!`, "success");
        } else {
          console.log("User creation failed. No email will be sent.");
          allSuccess = false;
        }
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to send email.");
        allSuccess = false;
      }
    }
  
    if (allSuccess) {
      // Reset forms and inviter to initial state
      setForms([{ id: Date.now(), firstName: "", lastName: "", email: "", internalEmployee: false, emailError: false, emailErrorMessage: "" }]);
      setInviter({ firstNameInviter: "", lastNameInviter: "" });
    }
  };
  
  return (
    <div className="space-y-6 post_panel mt-8">
      <h2>Welcome to 'Academic connect'!</h2>
      <p>
        Where university colleagues participate in the promotion of department jobs, to find the most desirable
        candidates for this job. <span className="text-amber-500">We recommend you tell five colleagues</span>. 'Academic
        Connect' will then inform your contacts about the positive progress of your organisation and its opportunities.
        Research suggests that referrals and communications from trusted colleagues translate into desirable candidates.
      </p>

      <p className="font-bold">Your details</p>
      <div className="p-4 border rounded-lg bg-gray-50 shadow-md space-y-4" style={{ marginTop: 0 }}>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">First Name:</label>
            <input
              type="text"
              value={inviter.firstNameInviter}
              onChange={(e) => handleInviterChange("firstNameInviter", e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Last Name:</label>
            <input
              type="text"
              value={inviter.lastNameInviter}
              onChange={(e) => handleInviterChange("lastNameInviter", e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>
        </div>
      </div>

      <p className="font-bold">Invitees Details</p>
      {forms.map((form) => (
        <div key={form.id} className="relative p-4 border rounded-lg bg-gray-50 shadow-md space-y-4" style={{ marginTop: 8 }}>
          <button
            onClick={() => deleteForm(form.id)}
            className="absolute top-2 right-2 text-2xl text-black hover:text-red-800"
          >
            ×
          </button>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[250px]">
              <label className="block text-sm font-medium text-gray-700">First Name:</label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => handleChange(form.id, "firstName", e.target.value)}
                className={`mt-1 block w-full p-2 border ${form.emailError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm sm:text-sm`}
              />
            </div>
            <div className="flex-1 min-w-[250px]">
              <label className="block text-sm font-medium text-gray-700">Last Name:</label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => handleChange(form.id, "lastName", e.target.value)}
                className={`mt-1 block w-full p-2 border ${form.emailError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm sm:text-sm`}
              />
            </div>
            <div className="flex-1 min-w-[250px]">
              <label className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange(form.id, "email", e.target.value)}
                onBlur={() => handleBlur(form.id, form.email)}
                className={`mt-1 block w-full p-2 border ${form.emailError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm sm:text-sm`}
              />
              {form.emailError && <p className="text-red-500 text-xs mt-1">{form.emailErrorMessage}</p>}
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={form.internalEmployee}
              onChange={(e) => handleChange(form.id, "internalEmployee", e.target.checked)}
              className="h-4 w-4 rounded"
            />
            <label className="ml-2 block text-sm font-medium text-gray-700">Internal Employee</label>
          </div>
        </div>
      ))}
      <div className="flex justify-end">
        <button
          onClick={addForm}
          className="mr-2 inline-flex items-center px-3 border border-transparent text-2xl font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-gray-500"
        >
          +
        </button>
        <button
          onClick={handleSubmit}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-500 hover:bg-gray-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ShareForm;
