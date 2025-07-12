import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosConfig';

function AllLeaveRecords() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    async function fetchLeaves() {
      const res = await axiosInstance.get('/leaves');
      setLeaves(res.data);
    }
    fetchLeaves();
  }, []);

  return (
    <div className="mt-4">
      <h5>All Leave Records</h5>
      <table className="table table-bordered">
        <thead>
          <tr><th>Employee</th><th>From</th><th>To</th><th>Status</th></tr>
        </thead>
        <tbody>
          {leaves.map((leave, index) => (
            <tr key={index}>
              <td>{leave.employeeName}</td>
              <td>{leave.fromDate}</td>
              <td>{leave.toDate}</td>
              <td>{leave.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllLeaveRecords;
