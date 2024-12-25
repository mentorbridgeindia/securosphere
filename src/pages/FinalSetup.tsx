import React, { useState } from "react";
import { Form, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormInput } from "@/ui/atoms/FormInput";
import { FormLabel } from "@/ui/atoms/FormLabel";

function FinalSetup() {
  const [setup, setSetup] = useState({
    domain: "",
    website: "",
    callbackUrls: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSetup((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        marginTop: "40px",
      }}
    >
      <Card
        className="shadow-sm p-4 border-0"
        style={{ width: "100%", maxWidth: "1000px" }}
      >
        <Row className="align-items-center">
          <Col sm={5} md={6} className="text-center">
            <img
              src="setup.svg"
              alt="Setup Illustration"
              className="img-fluid rounded"
              style={{ maxWidth: "100%", height: "auto", width: "400px" }}
            />
          </Col>

          <Col md={6}>
            <Form>
              <Form.Group controlId="domain">
                <FormLabel>Organization Domain</FormLabel>
                <FormInput
                  type="text"
                  name="domain"
                  placeholder="Enter domain"
                  value={setup.domain}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="website" className="mt-3">
                <FormLabel>Website</FormLabel>
                <FormInput
                  type="url"
                  name="website"
                  placeholder="Enter website URL"
                  value={setup.website}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="callbackUrls" className="mt-3">
                <FormLabel>Callback URLs</FormLabel>
                <FormInput
                  type="text"
                  name="callbackUrls"
                  placeholder="Enter callback URLs"
                  value={setup.callbackUrls}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default FinalSetup;
