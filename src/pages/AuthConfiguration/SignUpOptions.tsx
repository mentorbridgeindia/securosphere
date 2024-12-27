import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SignUpOptionsCard from "../../components/configurationPage/SignUpOptionsCard";
import SignUpForm from "../../components/configurationPage/SignUpForm";
import SocialSignUp from "../../components/configurationPage/SocialSignUp";
import { Anchor } from "@/ui/atoms/Anchor";
import "./SignUpOptions.scss";
const SignUpOptions = () => {
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
        <Col lg={4} md={5} xs={12}>
          <SignUpOptionsCard
            appName={appName}
            setAppName={setAppName}
            signupOptions={signupOptions}
            setSignupOptions={setSignupOptions}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        </Col>

        <Col lg={4} md={5} xs={12}>
          <Card className="shadow-sm">
            <Card.Body className="text-center">
              <h4 className="fs-4 mb-3">
                Sign up to {appName || "Your Application"}
              </h4>
              <SocialSignUp signupOptions={signupOptions} />
              <SignUpForm />
              <Button className="custom-button px-4 mt-3">Sign Up</Button>
              <div className="mt-3">
                Already have an account? <Anchor href="login">Log In</Anchor>
                <br />
                <Anchor href="forgot-password">Frogot Password</Anchor>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpOptions;
