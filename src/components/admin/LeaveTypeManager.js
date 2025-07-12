// src/components/admin/LeaveTypeManager.js
import React, { useState } from 'react';

function LeaveTypeManager() {
  const [leaveTypes, setLeaveTypes] = useState(['Privilege Leave']);
  const [newType, setNewType] = useState('');

  const addType = () => {
    if (newType.trim()) {
      setLeaveTypes([...leaveTypes, newType]);
      setNewType('');
    }
  };

  return (
    <div className="mt-4">
      <h5>Leave Type Management</h5>
      <input type="text" className="form-control" value={newType} onChange={(e) => setNewType(e.target.value)} placeholder="Leave Type" />
      <button className="btn btn-success mt-2" onClick={addType}>Add Leave Type</button>
      <ul className="mt-3">
        {leaveTypes.map((type, index) => <li key={index}>{type}</li>)}
      </ul>
    </div>
  );
}

export default LeaveTypeManager;