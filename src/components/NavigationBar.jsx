import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand>Lauqui GYM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navabr-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Login</Nav.Link>
            <Nav.Link>Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
