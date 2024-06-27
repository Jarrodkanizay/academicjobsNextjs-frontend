import React, { useState, useEffect } from 'react';
import JobAlertForm from '@/components/profile/JobAlertsForm';

const JobAlert = ({ alert, onEdit }) => {
    return (
      <div className="border border-gray-300 rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{alert.title}</h3>
          <span className="text-sm text-gray-500">Created {alert.createdDaysAgo} days ago</span>
        </div>
        <div className="mt-2 space-y-1">
          <p><strong>Search Query:</strong> {alert.searchQuery}</p>
          <p><strong>Job Type:</strong> {alert.jobType}</p>
          <p><strong>Region:</strong> {alert.region}</p>
          <p><strong>Field:</strong> {alert.field}</p>
          {/* <p><strong>Language:</strong> {alert.language}</p> */}
          <p><strong>Frequency:</strong> {alert.frequency}</p>
          {/* <p><strong>Remote Jobs:</strong> {alert.remoteJobs ? 'Include remote jobs' : 'Exclude remote jobs'}</p> */}
        </div>
        <div className="mt-2 flex space-x-4 text-blue-500">
          <a href={alert.viewJobsLink}>View jobs</a>
          <button onClick={() => onEdit(alert)}>Edit job alert</button>
          <a href={alert.removeJobAlertLink}>Remove job alert</a>
        </div>
      </div>
    );
  };
  
  const JobAlerts = ({ alerts }) => {
    const [editingAlert, setEditingAlert] = useState(null);
  
    const handleEdit = (alert) => {
      setEditingAlert(alert);
    };
  
    const handleClose = () => {
      setEditingAlert(null);
    };
  
    useEffect(() => {
      if (editingAlert) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [editingAlert]);
  
    return (
      <div>
        {editingAlert ? (
          <JobAlertForm alert={editingAlert} onClose={handleClose} />
        ) : (
          alerts.map((alert, index) => (
            <JobAlert key={index} alert={alert} onEdit={handleEdit} />
          ))
        )}
      </div>
    );
  };
  
  export default JobAlerts;