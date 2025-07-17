import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  Button,
  Form,
  Row,
  Col,
  Spinner,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import { FaEdit, FaTrash, FaBuilding } from "react-icons/fa";

const ManageBranches = () => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    branchId: null,
    address: "",
    contactNumber: "",
    email: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");

  const apiBase = "http://localhost:8080/api/branches";

  // Fetch branches
  useEffect(() => {
    fetchBranches();
  }, []);

  const fetchBranches = () => {
    axios
      .get(`${apiBase}/allbranches`)
      .then((res) => {
        setBranches(res.data);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        console.error("Error fetching branches", err);
        setError("Failed to fetch branches.");
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      address: form.address,
      contactNumber: form.contactNumber,
      email: form.email,
    };

    if (isEditing) {
      axios
        .put(`${apiBase}/${form.branchId}`, data)
        .then(() => {
          fetchBranches();
          resetForm();
        })
        .catch((err) => {
          console.error("Error updating branch", err);
          setError("Failed to update branch.");
        });
    } else {
      axios
        .post(`${apiBase}/addbranch`, data)
        .then(() => {
          fetchBranches();
          resetForm();
        })
        .catch((err) => {
          console.error("Error adding branch", err);
          setError("Failed to add branch.");
        });
    }
  };

  const handleEdit = (branch) => {
    setForm({
      branchId: branch.baranchId,
      address: branch.address,
      contactNumber: branch.contactNumber,
      email: branch.email,
    });
    setIsEditing(true);
  };

  const resetForm = () => {
    setForm({ branchId: null, address: "", contactNumber: "", email: "" });
    setIsEditing(false);
    setError("");
  };

  return (
    <Container className="mt-5 bg-light p-4 rounded shadow">
      <h3 className="text-center text-primary mb-4">
        <FaBuilding className="me-2" />
        Manage Company Branches
      </h3>

      {/* Form */}
      <Form onSubmit={handleSubmit} className="mb-4">
        <Row className="mb-2">
          <Col md={4}>
            <Form.Control
              type="text"
              name="address"
              placeholder="Branch Address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              value={form.contactNumber}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md={2}>
            <Button type="submit" variant={isEditing ? "warning" : "primary"}>
              {isEditing ? "Update" : "Add"}
            </Button>
          </Col>
        </Row>
        {isEditing && (
          <Row>
            <Col>
              <Button variant="secondary" onClick={resetForm} size="sm">
                Cancel Edit
              </Button>
            </Col>
          </Row>
        )}
      </Form>

      {/* Alerts */}
      {error && <Alert variant="danger">{error}</Alert>}
      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {/* Table */}
      {!loading && branches.length > 0 && (
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Address</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {branches.map((branch, index) => (
              <tr key={branch.baranchId}>
                <td>{index + 1}</td>
                <td>{branch.address}</td>
                <td>{branch.contactNumber}</td>
                <td>{branch.email}</td>
                <td>
                  <Button
                    variant="outline-warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(branch)}
                  >
                    <FaEdit />
                  </Button>
                  {/* You can implement delete later if backend supports it */}
                  {/* <Button variant="outline-danger" size="sm">
                    <FaTrash />
                  </Button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {!loading && branches.length === 0 && (
        <Alert variant="info">No branches available.</Alert>
      )}
    </Container>
  );
};

export default ManageBranches;
