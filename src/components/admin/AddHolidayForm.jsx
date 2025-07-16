import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import { FaCalendarPlus } from "react-icons/fa";

export default function AddHolidayForm() {
  const [holiday, setHoliday] = useState({
    holidayName: "",
    date: "",
    day: ""
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setHoliday({ ...holiday, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await axios.post("http://localhost:8080/api/holidays/add", holiday);
      setSuccessMsg("Holiday added successfully!");
      setHoliday({ holidayName: "", date: "", day: "" });
    } catch (error) {
      console.error("Error adding holiday:", error);
      setErrorMsg("Failed to add holiday. Please try again.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card style={{ width: "35rem" }} className="p-4 shadow-lg">
        <Card.Body>
          <h3 className="text-center text-primary mb-4">
            <FaCalendarPlus className="me-2" />
            Add New Holiday
          </h3>

          {successMsg && <Alert variant="success">{successMsg}</Alert>}
          {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="holidayName">
              <Form.Label>Holiday Name</Form.Label>
              <Form.Control
                type="text"
                name="holidayName"
                placeholder="e.g., Independence Day"
                value={holiday.holidayName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={holiday.date}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="day">
              <Form.Label>Day</Form.Label>
              <Form.Control
                type="text"
                name="day"
                placeholder="e.g., Wednesday"
                value={holiday.day}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit" className="px-5">
                Add Holiday
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
