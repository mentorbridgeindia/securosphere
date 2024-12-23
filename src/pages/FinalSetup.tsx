import React, { useState } from "react";
import { Form } from "react-bootstrap";

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
    <Form>
      <Form.Group controlId="domain">
        <Form.Label>Organization Domain</Form.Label>
        <Form.Control
          type="text"
          name="domain"
          placeholder="Enter domain"
          value={setup.domain}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="website">
        <Form.Label>Website</Form.Label>
        <Form.Control
          type="url"
          name="website"
          placeholder="Enter website URL"
          value={setup.website}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="callbackUrls">
        <Form.Label>Callback URLs</Form.Label>
        <Form.Control
          type="text"
          name="callbackUrls"
          placeholder="Enter callback URLs"
          value={setup.callbackUrls}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
}

export default FinalSetup;
