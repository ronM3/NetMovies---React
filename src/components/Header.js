import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate, Route } from "react-router-dom";
import SearchBox from "./SearchBox";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand>NetMovies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <SearchBox  />
            <Nav.Link onClick={() => navigate("/")}>
              New<i className="fas fa-shopping-cart"></i>
            </Nav.Link>
            <Nav.Link>
              <i className="fas fa-user"></i>Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
