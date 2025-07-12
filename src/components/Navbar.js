import React from 'react';
import { Navbar as BSNavbar, Nav } from 'react-bootstrap';

function Navbar({ role, setRole }) {
  return (
    <BSNavbar bg="dark" variant="dark">
      <BSNavbar.Brand href="#">LMS</BSNavbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link onClick={() => setRole('admin')}>Admin</Nav.Link>
        <Nav.Link onClick={() => setRole('employee')}>Employee</Nav.Link>
      </Nav>
    </BSNavbar>
  );
}

export default Navbar;