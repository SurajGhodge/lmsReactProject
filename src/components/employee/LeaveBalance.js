// src/components/employee/LeaveBalance.js
import React, { useEffect, useState } from 'react';
import { getLeaveBalance } from '../../api/leaveApi';

function LeaveBalance() {
  const [balance, setBalance] = useState(null);
  const employeeId = 1;

  useEffect(() => {
    async function fetchBalance() {
      const res = await getLeaveBalance(employeeId);
      setBalance(res.data);
    }
    fetchBalance();
  }, []);

  return (
    <div className="mt-3">
      <h5>Leave Balance</h5>
      {balance ? <p>Privilege Leaves: {balance.privilegeLeave}</p> : <p>Loading...</p>}
    </div>
  );
}
export default LeaveBalance;