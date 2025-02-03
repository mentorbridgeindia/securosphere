import { ReactComponent as IconLogo } from "@assets/icons/logo-inverted.svg";
import { useAuth } from "@hooks/useAuth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.scss";

export const AppNavbar = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Navbar expand="lg" className="navbar-dark shadow-lg bg-primary">
      <Container>
        <Navbar.Brand href="/" className="brand">
          <IconLogo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!isAuthenticated && <Nav.Link href="/login" className="text-light me-3">
              Login
            </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};