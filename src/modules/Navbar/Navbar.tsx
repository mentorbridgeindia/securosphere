import { useAuth } from "@hooks/useAuth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useInit } from "../../entities/Domain/useInit";
import "./Navbar.scss";

export const AppNavbar = () => {
  const { isAuthenticated } = useAuth();
  const { data } = useInit();
  const pathname = window.location.pathname;
  return (
    <Navbar expand="lg" className="navbar-dark shadow-lg bg-primary">
      <Container>
        <Navbar.Brand href="/" className="brand">
          {data?.logo ? (
            <img src={data?.logo} alt="logo" className="img-fluid" />
          ) : (
            data?.applicationName
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isAuthenticated ? (
              <Nav.Link href="/logout" className="text-light me-3">
                Logout
              </Nav.Link>
            ) : (
              <>
                {pathname !== "/login" && (
                  <Nav.Link href="/login" className="text-light me-3">
                    Login
                  </Nav.Link>
                )}
                {pathname !== "/register" && (
                  <Nav.Link href="/register" className="text-light me-3">
                    Register
                  </Nav.Link>
                )}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
