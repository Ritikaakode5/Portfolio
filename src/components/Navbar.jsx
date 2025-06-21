import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="light"
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={(val) => setExpanded(val)}
      className="py-3"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          Ritika Akode
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              as={NavLink}
              to="/projects"
              className={({ isActive }) =>
                isActive ? "nav-link active-link " : "nav-link"
              }
              onClick={() => setExpanded(false)}
            >
              Projects
            </NavLink>
            <NavLink
              as={NavLink}
              to="/skills"
              className={({ isActive }) =>
                isActive ? "nav-link active-link " : "nav-link"
              }
              onClick={() => setExpanded(false)}
            >
              Skills
            </NavLink>
            <NavLink
              as={NavLink}
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active-link " : "nav-link"
              }
              onClick={() => setExpanded(false)}
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
