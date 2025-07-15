import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateEmployeeForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    permanentAddress: "",
    currentAddress: "",
    mobileNumber: "",
    emergencyContact: "",
    dateOfBirth: "",
    dateOfJoining: "",
    employmentStatus: "",
    employeeStatus: "",
    employmentType: "",
    branch: "",
    bloodGroup: "",
    reportingAuthority: "",
  });

  // Fetch employee details on component load
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/employees/${id}`)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8080/api/employees/${id}`, employee)
      .then(() => {
        alert("Employee updated successfully");
        navigate("/employees"); // redirect to employee list or dashboard
      })
      .catch((error) => {
        console.error("Error updating employee:", error);
      });
  };

  return (
    <div className="container mt-4">
      <h3>Update Employee</h3>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-2">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label>Permanent Address:</label>
          <input
            type="text"
            className="form-control"
            name="permanentAddress"
            value={employee.permanentAddress}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label>Current Address:</label>
          <input
            type="text"
            className="form-control"
            name="currentAddress"
            value={employee.currentAddress}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label>Mobile Number:</label>
          <input
            type="text"
            className="form-control"
            name="mobileNumber"
            value={employee.mobileNumber}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label>Emergency Contact:</label>
          <input
            type="text"
            className="form-control"
            name="emergencyContact"
            value={employee.emergencyContact}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label>Date of Birth:</label>
          <input
            type="date"
            className="form-control"
            name="dateOfBirth"
            value={employee.dateOfBirth}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label>Date of Joining:</label>
          <input
            type="date"
            className="form-control"
            name="dateOfJoining"
            value={employee.dateOfJoining}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label>Employment Status:</label>
          <input
            type="text"
            className="form-control"
            name="employmentStatus"
            value={employee.employmentStatus}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label>Employee Status:</label>
          <input
            type="text"
            className="form-control"
            name="employeeStatus"
            value={employee.employeeStatus}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label>Employment Type:</label>
          <input
            type="text"
            className="form-control"
            name="employmentType"
            value={employee.employmentType}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label>Branch:</label>
          <input
            type="text"
            className="form-control"
            name="branch"
            value={employee.branch}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label>Blood Group:</label>
          <input
            type="text"
            className="form-control"
            name="bloodGroup"
            value={employee.bloodGroup}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label>Reporting Authority:</label>
          <input
            type="text"
            className="form-control"
            name="reportingAuthority"
            value={employee.reportingAuthority}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Update
        </button>
      </form>
    </div>
  );
}
