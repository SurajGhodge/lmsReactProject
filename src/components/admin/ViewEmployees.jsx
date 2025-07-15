import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ViewEmployees() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  axios
    .get("http://localhost:8080/api/employees/all")
    .then((res) => {
      console.log("Employee data:", res.data); 
      setEmployees(res.data);
    })
    .catch((err) => console.error("Error fetching employees:", err));
}, []);

  const handleCardClick = (id) => {
    navigate(`/employees/${id}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">All Employees</h2>
      <div className="row">
        {employees.length === 0 ? (
          <p>No employees found.</p>
        ) : (
          employees.map((emp) => (
            <div className="col-md-4 mb-4" key={emp.id}>
              <div
                className="card shadow-sm cursor-pointer"
                onClick={() => handleCardClick(emp.id)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src="images/emp1.jpg"
                  className="card-img-top"
                  alt="Employee"
                />
                <div className="card-body">
                  <h5 className="card-title">{emp.name}</h5>
                  <p className="card-text">
                    <strong>Mobile:</strong> {emp.mobileNumber} <br />
                    <strong>Branch:</strong> {emp.branch} <br />
                    <strong>Status:</strong> {emp.employeeStatus}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
