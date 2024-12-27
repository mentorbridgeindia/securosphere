import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function AppNavbar() {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#002851" }}
      className="navbar-dark shadow-lg"
    >
      <Container>
        <Navbar.Brand href="/" className="fs-3 fw-bold text-light">
          SecuroSphere
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="text-light me-3">
              Signup
            </Nav.Link>
            <Nav.Link href="/login" className="text-light me-3">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
