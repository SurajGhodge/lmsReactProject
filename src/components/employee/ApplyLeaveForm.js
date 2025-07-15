import React, { useState } from 'react';
import axios from 'axios';

const ApplyLeaveForm = ({ employeeId }) => {
  const [formData, setFormData] = useState({
    fromDate: '',
    toDate: '',
    reason: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post(
        `http://localhost:8080/api/apply/${employeeId}`,
        formData
      );
      setMessage(`Leave applied successfully! Leave ID: ${response.data.leaveId}`);
    } catch (err) {
      setError('Failed to apply leave. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h3>Apply for Leave</h3>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label htmlFor="fromDate" className="form-label">From Date</label>
          <input
            type="date"
            className="form-control"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="toDate" className="form-label">To Date</label>
          <input
            type="date"
            className="form-control"
            name="toDate"
            value={formData.toDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reason" className="form-label">Reason</label>
          <textarea
            className="form-control"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Apply Leave</button>

        {message && <div className="alert alert-success mt-3">{message}</div>}
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </form>
    </div>
  );
};

export default ApplyLeaveForm;