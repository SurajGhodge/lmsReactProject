// src/components/employee/ApplyLeave.js
import React, { useState } from 'react';
import { applyLeave } from '../../api/leaveApi';

function ApplyLeave() {
  const [leave, setLeave] = useState({ fromDate: '', toDate: '', reason: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await applyLeave(leave);
    alert('Leave applied successfully');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <h5>Apply Leave</h5>
      <input type="date" className="form-control" value={leave.fromDate} onChange={e => setLeave({ ...leave, fromDate: e.target.value })} />
      <input type="date" className="form-control mt-2" value={leave.toDate} onChange={e => setLeave({ ...leave, toDate: e.target.value })} />
      <input type="text" className="form-control mt-2" placeholder="Reason" value={leave.reason} onChange={e => setLeave({ ...leave, reason: e.target.value })} />
      <button className="btn btn-primary mt-2">Submit</button>
    </form>
  );
}

export default ApplyLeave;