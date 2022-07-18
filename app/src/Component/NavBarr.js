import React from 'react'
import { Navbar, Card, Nav, Button } from "react-bootstrap";


export default function NavBarr() {
  return (
    <div>
      <Navbar className="px-5" bg="light" variant="light">
        <Navbar.Brand href="/">Books</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
