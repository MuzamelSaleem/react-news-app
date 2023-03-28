import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavigationBar(props) {
  console.log(localStorage.getItem('token'));
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">My News App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
