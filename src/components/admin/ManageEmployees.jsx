import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Table,
  Alert,
  Spinner,
} from "react-bootstrap";
import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const apiBase = "http://localhost:8080/api/employees";

const ManageEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    id: null,
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
    leaveBalance: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    axios
      .get(`${apiBase}/all`)
      .then((res) => {
        setEmployees(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to fetch employee list.");
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "leaveBalance" ? parseInt(value) || 0 : value,
    });
  };

  const resetForm = () => {
    setForm({
      id: null,
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
      leaveBalance: 0,
    });
    setIsEditing(false);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...form };
    const request = isEditing
      ? axios.put(`${apiBase}/${form.id}`, payload)
      : axios.post(`${apiBase}/add`, payload);

    request
      .then(() => {
        fetchEmployees();
        resetForm();
      })
      .catch((err) => {
        console.error("Save error:", err);
        setError("Failed to save employee.");
      });
  };

  const handleEdit = (emp) => {
    setForm({
      ...emp,
      dateOfBirth: moment(emp.dateOfBirth).format("YYYY-MM-DD"),
      dateOfJoining: moment(emp.dateOfJoining).format("YYYY-MM-DD"),
    });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      axios
        .delete(`${apiBase}/${id}`)
        .then(() => fetchEmployees())
        .catch((err) => {
          console.error("Delete error:", err);
          setError("Failed to delete employee.");
        });
    }
  };

  return (
    <Container className="mt-5">
      <h3 className="text-center mb-4 text-primary">
        <FaUserPlus className="me-2" />
        Employee Management
      </h3>

      {/* Form */}
      <Form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow mb-4">
        <Row className="mb-3">
          <Col md={4}>
            <Form.Control
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md={4}>
            <Form.Control
              name="branch"
              placeholder="Branch"
              value={form.branch}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md={4}>
            <Form.Control
              name="reportingAuthority"
              placeholder="Reporting Authority"
              value={form.reportingAuthority}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Control
              name="permanentAddress"
              placeholder="Permanent Address"
              value={form.permanentAddress}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <Form.Control
              name="currentAddress"
              placeholder="Current Address"
              value={form.currentAddress}
              onChange={handleChange}
            />
          </Col>
          <Col md={2}>
            <Form.Control
              name="mobileNumber"
              placeholder="Mobile Number"
              value={form.mobileNumber}
              onChange={handleChange}
            />
          </Col>
          <Col md={2}>
            <Form.Control
              name="emergencyContact"
              placeholder="Emergency Contact"
              value={form.emergencyContact}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Control
              name="dateOfBirth"
              type="date"
              value={form.dateOfBirth}
              onChange={handleChange}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              name="dateOfJoining"
              type="date"
              value={form.dateOfJoining}
              onChange={handleChange}
            />
          </Col>
          <Col md={2}>
            <Form.Control
              name="employmentStatus"
              placeholder="Employment Status"
              value={form.employmentStatus}
              onChange={handleChange}
            />
          </Col>
          <Col md={2}>
            <Form.Control
              name="employeeStatus"
              placeholder="Employee Status"
              value={form.employeeStatus}
              onChange={handleChange}
            />
          </Col>
          <Col md={2}>
            <Form.Control
              name="employmentType"
              placeholder="Employment Type"
              value={form.employmentType}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Control
              name="bloodGroup"
              placeholder="Blood Group"
              value={form.bloodGroup}
              onChange={handleChange}
            />
          </Col>
          <Col md={2}>
            <Form.Control
              type="number"
              name="leaveBalance"
              placeholder="Leave Balance"
              value={form.leaveBalance}
              onChange={handleChange}
              min={0}
            />
          </Col>
          <Col md={2}>
            <Button type="submit" variant={isEditing ? "warning" : "success"}>
              {isEditing ? "Update" : "Add"}
            </Button>
          </Col>
          {isEditing && (
            <Col md={2}>
              <Button variant="secondary" onClick={resetForm}>
                Cancel
              </Button>
            </Col>
          )}
        </Row>
        {error && <Alert variant="danger">{error}</Alert>}
      </Form>

      {/* Table */}
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : employees.length === 0 ? (
        <Alert variant="info">No employees found.</Alert>
      ) : (
        <Table striped bordered hover responsive className="shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Status</th>
              <th>Type</th>
              <th>DOB</th>
              <th>DOJ</th>
              <th>Contact</th>
              <th>Leave</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={emp.id}>
                <td>{index + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.branch}</td>
                <td>{emp.employeeStatus}</td>
                <td>{emp.employmentType}</td>
                <td>{moment(emp.dateOfBirth).format("YYYY-MM-DD")}</td>
                <td>{moment(emp.dateOfJoining).format("YYYY-MM-DD")}</td>
                <td>{emp.mobileNumber}</td>
                <td>{emp.leaveBalance}</td>
                <td>
                  <Button
                    variant="outline-info"
                    size="sm"
                    className="me-2"
                    onClick={() => navigate(`/employee/${emp.id}`)}
                  >
                    View
                  </Button>
                  <Button
                    variant="outline-warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(emp)}
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleDelete(emp.id)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default ManageEmployees;
