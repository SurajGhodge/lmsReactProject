import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, Alert, Spinner, Badge } from "react-bootstrap";
import { FaHourglassHalf, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function ViewLeaves() {
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
        setError("Failed to fetch leave data.");
        setLoading(false);
      });
  }, []);

  const renderStatus = (status) => {
    switch (status?.toLowerCase()) {
      case "approved":
        return <Badge bg="success"><FaCheckCircle /> Approved</Badge>;
      case "rejected":
        return <Badge bg="danger"><FaTimesCircle /> Rejected</Badge>;
      case "pending":
      default:
        return <Badge bg="warning" text="dark"><FaHourglassHalf /> Pending</Badge>;
    }
  };

  return (
    <Container className="mt-5">
      <h3 className="text-center mb-4 text-primary">All Leave Applications</h3>

      {loading && <div className="text-center"><Spinner animation="border" /></div>}

      {error && <Alert variant="danger">{error}</Alert>}

      {!loading && leaves.length === 0 && <Alert variant="info">No leave records found.</Alert>}

      {!loading && leaves.length > 0 && (
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Employee Name</th>
              <th>From</th>
              <th>To</th>
              <th>Type</th>
              <th>Days</th>
              <th>Status</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave, index) => (
              <tr key={leave.leaveId}>
                <td>{index + 1}</td>
                <td>{leave.employee?.name || "N/A"}</td>
                <td>{leave.fromDate}</td>
                <td>{leave.toDate}</td>
                <td>{leave.hd ? "Half Day" : "Full Day"}</td>
                <td>{leave.days}</td>
                <td>{renderStatus(leave.status)}</td>
                <td>{leave.reason}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
