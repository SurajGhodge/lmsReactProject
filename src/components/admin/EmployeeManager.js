import React, { useEffect, useState } from 'react';
import { fetchEmployees, addEmployee, deleteEmployee } from '../../api/employeeApi';

function EmployeeManager() {
  const [employees, setEmployees] = useState([]);
  const [newEmp, setNewEmp] = useState({ name: '', status: '' });

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const res = await fetchEmployees();
    setEmployees(res.data);
  };

  const handleAdd = async () => {
    await addEmployee(newEmp);
    setNewEmp({ name: '', status: '' });
    loadEmployees();
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    loadEmployees();
  };

  return (
    <div className="mt-4">
      <h5>Employee Management</h5>
      <input type="text" placeholder="Name" className="form-control" value={newEmp.name} onChange={(e) => setNewEmp({ ...newEmp, name: e.target.value })} />
      <input type="text" placeholder="Status" className="form-control mt-2" value={newEmp.status} onChange={(e) => setNewEmp({ ...newEmp, status: e.target.value })} />
      <button onClick={handleAdd} className="btn btn-success mt-2">Add Employee</button>
      <table className="table table-striped mt-3">
        <thead>
          <tr><th>Name</th><th>Status</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.employmentStatus}</td>
              <td><button className="btn btn-danger btn-sm" onClick={() => handleDelete(emp.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeManager;
