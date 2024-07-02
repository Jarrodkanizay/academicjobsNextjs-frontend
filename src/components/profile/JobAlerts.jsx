import React, { useState, useEffect } from 'react';
import JobAlertForm from '@/components/profile/JobAlertsForm';
import axios from 'axios';
import { useSession } from "next-auth/react";
import { BaseApi } from '@/lib/store/Base';
import { useRouter } from 'next/navigation';

const JobAlert = ({ alert, onEdit, onDelete }) => {
    const institutions = JSON.parse(alert.institutions || '[]');
    const states = JSON.parse(alert.states || '[]');
    const subFields = JSON.parse(alert.subFields || '[]');
    const router = useRouter();

    const handleViewJobs = () => {
        const filters = [
            { category: 'JobType', filter: alert.mainField },
            ...subFields.map(subField => ({ category: 'SubField', filter: subField })),
            ...states.map(state => ({ category: 'State', filter: state })),
            ...institutions.map(institution => ({ category: 'InstitutionName', filter: institution })),
            { category: 'SalaryRange', filter: `\$${alert.salaryFrom.toLocaleString()} - \$${alert.salaryTo.toLocaleString()}` },
        ].filter(item => item.filter);

        const queryParams = new URLSearchParams({
            r: alert.country,
            l: '',
            q: '',
            lon: '0',
            lat: '0',
            page: '0',
            category: '',
            filter0: encodeURIComponent(JSON.stringify(filters))
        });

        const url = `/university-jobs?${queryParams.toString()}`;
        router.push(url);
    };

    return (
        <div className="border border-gray-300 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Created {new Date(alert.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="mt-2 space-y-1">
                {alert.country && <p><strong>Country:</strong> {alert.country}</p>}
                {/* {alert.employmentType && <p><strong>Employment Type:</strong> {alert.employmentType}</p>} */}
                {alert.frequency && <p><strong>Frequency:</strong> {alert.frequency}</p>}
                {institutions.length > 0 && <p><strong>Institutions:</strong> {institutions.join(', ')}</p>}
                {alert.mainField && <p><strong>Field:</strong> {alert.mainField}</p>}
                {/* {alert.remote !== undefined && <p><strong>Remote:</strong> {alert.remote ? 'Yes' : 'No'}</p>} */}
                {alert.salaryFrom && alert.salaryTo && <p><strong>Salary Range:</strong> ${alert.salaryFrom} - ${alert.salaryTo}</p>}
                {states.length > 0 && <p><strong>States:</strong> {states.join(', ')}</p>}
                {subFields.length > 0 && <p><strong>Sub Fields:</strong> {subFields.join(', ')}</p>}
            </div>
            <div className="mt-2 flex space-x-4 text-blue-500">
                <button onClick={handleViewJobs}>View jobs</button>
                <button onClick={() => onEdit(alert)}>Edit job alert</button>
                <button onClick={() => onDelete(alert.id)}>Remove job alert</button>
            </div>
        </div>
    );
};

const JobAlerts = () => {
    const { data: session } = useSession();
    const [alerts, setAlerts] = useState([]);
    const [editingAlert, setEditingAlert] = useState(null);

    useEffect(() => {
        if (session) {
            fetchJobAlerts();
        }
    }, [session]);

    const fetchJobAlerts = async () => {
        try {
            const response = await BaseApi.get(`/getJobAlerts/${session?.user.id}`);
            setAlerts(response.data);
        } catch (error) {
            console.error('Error fetching job alerts:', error);
        }
    };

    const handleEdit = (alert) => {
        setEditingAlert(alert);
    };

    const handleClose = () => {
        setEditingAlert(null);
        fetchJobAlerts(); // Refresh the list after editing
    };

    const handleDelete = async (id) => {
        try {
            await BaseApi.delete(`/deleteJobAlert/${id}`);
            setAlerts(prevAlerts => prevAlerts.filter(alert => alert.id !== id));
        } catch (error) {
            console.error('Error deleting job alert:', error);
        }
    };

    return (
        <div>
            {editingAlert ? (
                <JobAlertForm alert={editingAlert} onClose={handleClose} />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {alerts.map((alert, index) => (
                        <JobAlert key={index} alert={alert} onEdit={handleEdit} onDelete={handleDelete} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default JobAlerts;
