import React from "react";
import { Nav, Navbar, Container, Alert } from "react-bootstrap/";
import Link from "../Routing/Link";

const ReactNavbar = (props) => {
  return (
    <>
      <Navbar bg="light" variant="light" expand="xl">
        <Container>
          <Navbar.Brand href="/">
            <Link className="text-dark text-decoration-none" href="/">
              Women Empowerment
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/selfdefence" className="nav-link">
                Self Defence
              </Link>
              <Link className=" nav-link" href="/womenintech">
                Women In Tech
              </Link>
              <Link className=" nav-link" href="/ngo">
                NGO
              </Link>

              <Link className="nav-link" href="/womensafety">
                Women Safety Laws & Rights
              </Link>
              <Link className="nav-link" href="/womenactivists">
                Women's Rights Activists
              </Link>
              <Link className="nav-link" href="/">
                Login/Siginup
              </Link>
              <Link className="nav-link bg-danger text-white" href="/">
                Alert
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ReactNavbar;
