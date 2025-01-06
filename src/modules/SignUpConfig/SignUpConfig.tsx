import { Col, Container, Row } from "react-bootstrap";
import SignUpOptionsCard from "./components/SignUpOptionsCard";
import { SignUpPreview } from "./components/SignUpPreview";
import "./SignUpConfig.scss";

export const SignUpConfig = () => {
  return (
    <Container fluid className="py-4">
      <Row className="justify-content-center g-4">
        <Col lg={5} xs={12}>
          <SignUpOptionsCard />
        </Col>
        <Col lg={2} className="d-none d-lg-block"></Col>
        <Col
          lg={5}
          xs={12}
          className="d-flex justify-content-center align-items-center"
        >
          <SignUpPreview />
        </Col>
      </Row>
    </Container>
  );
};
