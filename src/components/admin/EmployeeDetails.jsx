import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Card, Container, Spinner, Alert, Button } from "react-bootstrap";

export default function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/employees/${id}`)
      .then((res) => {
        setEmployee(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch employee data.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!employee) return null;

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-sm">
        <h3>{employee.name}</h3>
        <p><strong>Mobile:</strong> {employee.mobileNumber}</p>
        <p><strong>Permanent Address:</strong> {employee.permanentAddress}</p>
        <p><strong>Current Address:</strong> {employee.currentAddress}</p>
        <p><strong>Emergency Contact:</strong> {employee.emergencyContact}</p>
        <p><strong>Date of Birth:</strong> {employee.dateOfBirth}</p>
        <p><strong>Date of Joining:</strong> {employee.dateOfJoining}</p>
        <p><strong>Employment Type:</strong> {employee.employmentType}</p>
        <p><strong>Employment Status:</strong> {employee.employmentStatus}</p>
        <p><strong>Employee Status:</strong> {employee.employeeStatus}</p>
        <p><strong>Branch:</strong> {employee.branch}</p>
        <p><strong>Blood Group:</strong> {employee.bloodGroup}</p>
        <p><strong>Reporting Authority:</strong> {employee.reportingAuthority}</p>
        <p><strong>Leave Balance:</strong> {employee.leaveBalance}</p>
        <Link to="/employees">
          <Button variant="secondary">Back to List</Button>
        </Link>
      </Card>
    </Container>
  );
}
