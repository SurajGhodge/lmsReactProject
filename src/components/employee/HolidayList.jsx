import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, Alert, Spinner, Badge } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import moment from "moment";

export default function HolidayList() {
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/holidays/all")
      .then((res) => {
        setHolidays(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch holidays:", err);
        setError("Failed to fetch holidays.");
        setLoading(false);
      });
  }, []);

  const isUpcoming = (dateStr) => {
    const today = moment();
    const holidayDate = moment(dateStr);
    return holidayDate.isSameOrAfter(today, "day");
  };

  return (
    <Container className="mt-5 bg-light p-4 rounded shadow">
      <h3 className="text-center mb-4 text-success">
        <FaCalendarAlt className="me-2" />
        Holiday Calendar
      </h3>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {!loading && holidays.length === 0 && (
        <Alert variant="info">No holidays available.</Alert>
      )}

      {!loading && holidays.length > 0 && (
        <Table striped bordered hover responsive className="shadow-sm rounded">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Holiday Name</th>
              <th>Date</th>
              <th>Day</th>
              <th>Status</th>
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
                  {isUpcoming(holiday.date) ? (
                    <Badge bg="success">Upcoming</Badge>
                  ) : (
                    <Badge bg="secondary">Past</Badge>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
