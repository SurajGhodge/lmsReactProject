import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, Spinner, Alert, Badge } from "react-bootstrap";

export default function LeaveRecords() {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/leaves/all")
      .then((res) => {
        setLeaves(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch leave records.");
        setLoading(false);
      });
  }, []);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString();
  };

  const getLeaveType = (fd, hd) => {
    if (fd) return "Full Day";
    if (hd) return "Half Day";
    return "Unknown";
  };

  return (
    <Container className="mt-5">
      <h3 className="mb-4 text-primary">All Leave Applications</h3>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {!loading && !error && (
        <Table striped bordered hover responsive className="shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Employee</th>
              <th>From</th>
              <th>To</th>
              <th>Days</th>
              <th>Type</th>
              <th>Status</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave, index) => (
              <tr key={leave.leaveId}>
                <td>{index + 1}</td>
                <td>{leave.employee?.name || "N/A"}</td>
                <td>{formatDate(leave.fromDate)}</td>
                <td>{formatDate(leave.toDate)}</td>
                <td>{leave.days}</td>
                <td>{getLeaveType(leave.fd, leave.hd)}</td>
                <td>
                  <Badge
                    bg={
                      leave.status === "approved"
                        ? "success"
                        : leave.status === "rejected"
                        ? "danger"
                        : leave.status === "cancelled"
                        ? "secondary"
                        : "warning"
                    }
                  >
                    {leave.status.toUpperCase()}
                  </Badge>
                </td>
                <td>{leave.reason}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
