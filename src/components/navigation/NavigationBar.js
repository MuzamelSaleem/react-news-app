import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  return (
    <Navbar bg="light" expand="lg">
       <Container>
       <Navbar.Brand href="/">My News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <Link to="/perferences" className="dropdown-item">Edit Preferences</Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
