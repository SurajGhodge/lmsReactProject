import React, { useState } from 'react';
import axios from 'axios';

const AddEmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    permanentAddress: '',
    currentAddress: '',
    mobileNumber: '',
    emergencyContact: '',
    dateOfBirth: '',
    dateOfJoining: '',
    employmentStatus: '',
    employeeStatus: '',
    employmentType: '',
    branch: '',
    bloodGroup: '',
    reportingAuthority: '',
    leaveBalance: 0,
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post("http://localhost:8080/api/employees/add", employee);
      setMessage(`Employee added successfully! ID: ${response.data.id}`);
      setEmployee({
        name: '',
        permanentAddress: '',
        currentAddress: '',
        mobileNumber: '',
        emergencyContact: '',
        dateOfBirth: '',
        dateOfJoining: '',
        employmentStatus: '',
        employeeStatus: '',
        employmentType: '',
        branch: '',
        bloodGroup: '',
        reportingAuthority: '',
        leaveBalance: 0,
      });
    } catch (err) {
      setError('Failed to add employee. Check input or backend.');
    }
  };

  return (
    <div className="container mt-5">
      <h3>Add New Employee</h3>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Name</label>
            <input type="text" className="form-control" name="name" value={employee.name} onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label>Mobile Number</label>
            <input type="text" className="form-control" name="mobileNumber" value={employee.mobileNumber} onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label>Emergency Contact</label>
            <input type="text" className="form-control" name="emergencyContact" value={employee.emergencyContact} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Permanent Address</label>
            <input type="text" className="form-control" name="permanentAddress" value={employee.permanentAddress} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Current Address</label>
            <input type="text" className="form-control" name="currentAddress" value={employee.currentAddress} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Date of Birth</label>
            <input type="date" className="form-control" name="dateOfBirth" value={employee.dateOfBirth} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Date of Joining</label>
            <input type="date" className="form-control" name="dateOfJoining" value={employee.dateOfJoining} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Employment Status</label>
            <select className="form-select" name="employmentStatus" value={employee.employmentStatus} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Permanent">Permanent</option>
              <option value="Probation">Probation</option>
              <option value="Consultant">Consultant</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label>Employee Status</label>
            <select className="form-select" name="employeeStatus" value={employee.employeeStatus} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label>Employment Type</label>
            <select className="form-select" name="employmentType" value={employee.employmentType} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="6 Hrs">6 Hrs</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label>Branch</label>
            <input type="text" className="form-control" name="branch" value={employee.branch} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Blood Group</label>
            <input type="text" className="form-control" name="bloodGroup" value={employee.bloodGroup} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Reporting Authority</label>
            <input type="text" className="form-control" name="reportingAuthority" value={employee.reportingAuthority} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Leave Balance</label>
            <input type="number" className="form-control" name="leaveBalance" value={employee.leaveBalance} onChange={handleChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-success">Add Employee</button>

        {message && <div className="alert alert-success mt-3">{message}</div>}
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </form>
    </div>
  );
};

export default AddEmployeeForm;
