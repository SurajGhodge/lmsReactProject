import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AdminDashboard from './components/AdminDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';

function App() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const savedRole = localStorage.getItem('role');
    if (savedRole) setRole(savedRole);
  }, []);

  const handleRoleSelect = (selectedRole) => {
    localStorage.setItem('role', selectedRole);
    setRole(selectedRole);
  };

  if (!role) {
    return (
      <div className="container mt-5 text-center">
        <h2>Select Role</h2>
        <button className="btn btn-primary m-2" onClick={() => handleRoleSelect('admin')}>Admin</button>
        <button className="btn btn-secondary m-2" onClick={() => handleRoleSelect('employee')}>Employee</button>
      </div>
    );
  }

  return (
    <>
      <Navbar role={role} setRole={setRole} />
      <div className="container mt-4">
        {role === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
      </div>
    </>
  );
}

export default App;