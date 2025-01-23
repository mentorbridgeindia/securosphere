import { Container, Row, Col, Card, FormLabel, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Redirection from "@/modules/Information/Redirection";
import DecodeJWT from "@/modules/Information/DecodeJWT";

const Information = () => {
  const [url, setUrl] = useState<string>("");
  const [publicKey, setPublicKey] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setUrl("https://dynamic-url.securosphere.in");
      setPublicKey("FFGHBD67HJBDFVI3435HJWB27RN349O");
    }, 1000);
  }, []);

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={7}>
          <h2
            className="text-center text-primary mb-4 "
            style={{ fontWeight: "bold", fontSize: "1.5rem" }}
          >
            APPLICATION INFO
          </h2>
          <p
            className="text-center mb-4"
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            Welcome to SecuroSphere
          </p>
          <p
            className="p-3 mb-4"
            style={{
              backgroundColor: "#d1ecf1",
              border: "1px solid #236671",
              borderRadius: "8px",
              fontWeight: "500",
              maxWidth: "800px",
              margin: "auto",
            }}
          >
            Below are the
            <strong> step-by-step instructions</strong> to help you configure
            and use the platform effectively. Enjoy seamless security and an
            intuitive experience.
          </p>
        </Col>
      </Row>

      <Row className="mt-4 justify-content-center">
        <Col xs={12} md={8} lg={7}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <FormLabel style={{ color: "#002851", fontWeight: "bold" }}>
                STEP 1: REDIRECT DETAILS
              </FormLabel>
              <Redirection url={url} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4 justify-content-center">
        <Col xs={12} md={8} lg={7}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <FormLabel style={{ color: "#002851", fontWeight: "bold" }}>
                STEP 2: DECODE JWT TOKEN
              </FormLabel>
              <DecodeJWT publicKey={publicKey} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="text-center d-flex justify-content-center">
          <Button variant="primary">Continue</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Information;
