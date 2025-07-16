import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Form,
  Button,
  Card,
  Alert,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function ApplyLeaveForm({ employeeId }) {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");
  const [leaveType, setLeaveType] = useState("full"); // 'full' or 'half'
  const [leaveDays, setLeaveDays] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Calculate leave days dynamically
  useEffect(() => {
    if (fromDate && toDate) {
      const from = new Date(fromDate);
      const to = new Date(toDate);
      const diff = (to - from) / (1000 * 60 * 60 * 24) + 1;
      if (diff >= 0) {
        const days = leaveType === "half" ? 0.5 : diff;
        setLeaveDays(days);
      } else {
        setLeaveDays(0);
      }
    }
  }, [fromDate, toDate, leaveType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const leaveRequest = {
      fromDate,
      toDate,
      reason,
      fd: leaveType === "full",
      hd: leaveType === "half",
    };

    try {
      const response = await axios.post(
        `http://localhost:8080/api/leaves/apply/${employeeId}`,
        leaveRequest
      );
      setMessage("Leave request submitted successfully.");
      setFromDate("");
      setToDate("");
      setReason("");
      setLeaveType("full");
    } catch (err) {
      console.error(err);
      setError("Failed to submit leave. Please try again.");
    }
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: "35rem", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}>
        <Card.Body>
          <h4 className="text-center mb-4 text-success">Apply for Leave</h4>
          {message && <Alert variant="success">{message}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>From Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>To Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Leave Type</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="Full Day"
                  value="full"
                  name="leaveType"
                  checked={leaveType === "full"}
                  onChange={(e) => setLeaveType(e.target.value)}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Half Day"
                  value="half"
                  name="leaveType"
                  checked={leaveType === "half"}
                  onChange={(e) => setLeaveType(e.target.value)}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Reason</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="State your reason for leave"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
              />
            </Form.Group>

            <p>
              <strong>Calculated Leave Days: </strong> {leaveDays}
            </p>

            <div className="text-center">
              <Button variant="success" type="submit">
                Submit Leave Request
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ApplyLeaveForm;
