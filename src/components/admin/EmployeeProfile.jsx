import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EmployeeProfile() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/employees/${id}`)
      .then((res) => setEmployee(res.data))
      .catch((err) => console.error("Error fetching employee:", err));
  }, [id]);

  if (!employee) {
    return <p className="container mt-4">Loading employee profile...</p>;
  }

  return (
    <div className="container mt-4">
      <h2>Employee Profile</h2>
      <div className="card mt-3 p-3">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/300x200?text=Employee"
              className="img-fluid rounded"
              alt="Employee"
            />
          </div>
          <div className="col-md-8">
            <h4>{employee.name}</h4>
            <p><strong>Mobile:</strong> {employee.mobileNumber}</p>
            <p><strong>Emergency Contact:</strong> {employee.emergencyContact}</p>
            <p><strong>Branch:</strong> {employee.branch}</p>
            <p><strong>DOB:</strong> {employee.dateOfBirth}</p>
            <p><strong>DOJ:</strong> {employee.dateOfJoining}</p>
            <p><strong>Permanent Address:</strong> {employee.permanentAddress}</p>
            <p><strong>Current Address:</strong> {employee.currentAddress}</p>
            <p><strong>Employment Status:</strong> {employee.employmentStatus}</p>
            <p><strong>Employment Type:</strong> {employee.employmentType}</p>
            <p><strong>Employee Status:</strong> {employee.employeeStatus}</p>
            <p><strong>Blood Group:</strong> {employee.bloodGroup}</p>
            <p><strong>Reporting Authority:</strong> {employee.reportingAuthority}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
