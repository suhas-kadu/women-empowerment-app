import React, { useState } from "react";
import { Nav, Navbar, Container, Alert, Button } from "react-bootstrap/";
import Link from "../Routing/Link";

const ReactNavbar = (props) => {
  const [latitude, setLatitute] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const [userLoggedIn, setUserLoggedIn] = useState(0);

  const getLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      ( position) => {
        const pos =  position.coords;

        console.log(pos);
        if(pos.latitude !== null && pos.longitude !== null){
          setLatitute(pos.latitude);
          setLongitude(pos.longitude);
        }
        
      },
      (err) => console.log(err)
    );

  };

  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        // style={{backgroundColor:"#231a4f"}}
        expand="xl"
      >
        <Container>
          <Navbar.Brand href="/">
            <Link className="text-dark text-decoration-none" href="/">
              Women Empowerment
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end "
          >
            <Nav className="me-auto ">
              <Link href="/" className="nav-link text-dark">
                Home
              </Link>
              <Link href="/selfdefence" className="nav-link text-dark">
                Self Defence
              </Link>
              <Link className=" nav-link text-dark" href="/womenintech">
                Women In Tech
              </Link>
              <Link className=" nav-link text-dark" href="/ngo">
                NGO
              </Link>

              <Link className="nav-link text-dark" href="/womensafety">
                Women Safety Laws & Rights
              </Link>
              <Link className="nav-link text-dark" href="/womenactivists">
                Women's Rights Activists
              </Link>
              <Link className="nav-link text-dark" href="/login">
                Login
              </Link>
              <div onClick={() => getLocation()}>
                <Link className="nav-link bg-danger text-white px-3" href="/">
                  Alert
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ReactNavbar;
