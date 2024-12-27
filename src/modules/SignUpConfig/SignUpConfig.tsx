import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SignUpConfig.scss";
import SignUpOptionsCard from "./components/SignUpOptionsCard";
import { SignUpPreview } from "./components/SignUpPreview";

export const SignUpConfig = () => {
  const [appName, setAppName] = useState("");
  const [signupOptions, setSignupOptions] = useState<Record<string, boolean>>({
    email: true,
    google: true,
    facebook: false,
    github: false,
    gitlab: false,
    microsoft: false,
    twitter: false,
    linkedin: false,
  });

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <Container fluid className="py-4">
      <Row className="justify-content-center g-4">
        <Col lg={5} xs={12}>
          <SignUpOptionsCard
            appName={appName}
            setAppName={setAppName}
            signupOptions={signupOptions}
            setSignupOptions={setSignupOptions}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        </Col>
        <Col lg={2} className="d-none d-lg-block"></Col>
        <Col
          lg={5}
          xs={12}
          className="d-flex justify-content-center align-items-center"
        >
          <SignUpPreview appName={appName} signupOptions={signupOptions} />
        </Col>
      </Row>
    </Container>
  );
};
