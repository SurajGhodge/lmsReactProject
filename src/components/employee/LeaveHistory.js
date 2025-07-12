// src/components/employee/LeaveHistory.js
import React, { useEffect, useState } from 'react';
import { getLeaveHistory } from '../../api/leaveApi';

function LeaveHistory() {
  const [history, setHistory] = useState([]);
  const employeeId = 1;

  useEffect(() => {
    async function loadHistory() {
      const res = await getLeaveHistory(employeeId);
      setHistory(res.data);
    }
    loadHistory();
  }, []);

  return (
    <div className="mt-3">
      <h5>Leave History</h5>
      <ul>
        {history.map((leave, idx) => (
          <li key={idx}>{leave.fromDate} to {leave.toDate} - {leave.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default LeaveHistory;