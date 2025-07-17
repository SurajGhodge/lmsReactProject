import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Container,
  Alert,
  Spinner,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { FaCalendarAlt, FaTrash, FaEdit } from "react-icons/fa";
import moment from "moment";

export default function ManageHoliday() {
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    holidayId: null,
    holidayName: "",
    date: "",
    day: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Fetch holidays
  useEffect(() => {
    fetchHolidays();
  }, []);

  const fetchHolidays = () => {
    axios
      .get("http://localhost:8080/api/holidays/all")
      .then((res) => {
        setHolidays(res.data);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        console.error("Failed to fetch holidays:", err);
        setError("Failed to fetch holidays.");
        setLoading(false);
      });
  };

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or Update holiday
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      holidayName: form.holidayName,
      date: form.date,
      day: form.day,
    };

    if (isEditing) {
      // Update existing holiday
      axios
        .put(`http://localhost:8080/api/holidays/${form.holidayId}`, data)
        .then(() => {
          fetchHolidays();
          setForm({ holidayId: null, holidayName: "", date: "", day: "" });
          setIsEditing(false);
          setError("");
        })
        .catch((err) => {
          console.error("Error updating holiday:", err);
          setError("Failed to update holiday.");
        });
    } else {
      // Add new holiday
      axios
        .post("http://localhost:8080/api/holidays/add", data)
        .then(() => {
          fetchHolidays();
          setForm({ holidayId: null, holidayName: "", date: "", day: "" });
          setError("");
        })
        .catch((err) => {
          console.error("Error adding holiday:", err);
          setError("Failed to add holiday.");
        });
    }
  };

  // Delete holiday
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this holiday?")) {
      axios
        .delete(`http://localhost:8080/api/holidays/${id}`)
        .then(() => {
          fetchHolidays();
          setError("");
        })
        .catch((err) => {
          console.error("Delete failed:", err);
          setError("Failed to delete holiday.");
        });
    }
  };

  // Edit holiday
  const handleEdit = (holiday) => {
    setForm({
      holidayId: holiday.holidayId,
      holidayName: holiday.holidayName,
      date: moment(holiday.date).format("YYYY-MM-DD"),
      day: holiday.day,
    });
    setIsEditing(true);
  };

  return (
    <Container className="mt-5 bg-light p-4 rounded shadow">
      <h3 className="text-center mb-4 text-success">
        <FaCalendarAlt className="me-2" />
        Holiday Calendar
      </h3>

      {/* Form */}
      <Form onSubmit={handleSubmit} className="mb-4">
        <Row>
          <Col md={4}>
            <Form.Control
              type="text"
              name="holidayName"
              placeholder="Holiday Name"
              value={form.holidayName}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="text"
              name="day"
              placeholder="Day"
              value={form.day}
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
      </Form>

      {/* Messages */}
      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && holidays.length === 0 && (
        <Alert variant="info">No holidays available.</Alert>
      )}

      {/* Table */}
      {!loading && holidays.length > 0 && (
        <Table striped bordered hover responsive className="shadow-sm rounded">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Holiday Name</th>
              <th>Date</th>
              <th>Day</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((holiday, index) => (
              <tr key={holiday.holidayId}>
                <td>{index + 1}</td>
                <td>{holiday.holidayName}</td>
                <td>{moment(holiday.date).format("YYYY-MM-DD")}</td>
                <td>{holiday.day}</td>
                <td>
                  <Button
                    variant="outline-warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(holiday)}
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleDelete(holiday.holidayId)}
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
}
