import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { Edit, Mail } from "lucide-react";
import { EmailSettingsComponentProps } from "./types/config";

const EmailSettings = ({
  config,
  onUpdateConfig,
}: EmailSettingsComponentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [emailConfig, setEmailConfig] = useState(config);

  const handleChange = (
    field: keyof typeof emailConfig,
    value: string | number
  ) => {
    setEmailConfig({ ...emailConfig, [field]: value });
  };

  const handleSave = () => {
    onUpdateConfig(emailConfig);
    setIsEditing(false);
  };

  return (
    <Card className="mb-4">
      <Card.Header className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
          <Mail className="me-2 text-primary" size={24} />
          <h5 className="mb-0 fw-bold">Email Settings</h5>
        </div>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Save" : <Edit size={16} />}
        </Button>
      </Card.Header>
      <Form className="p-4">
        <Form.Group className="mb-3">
          <Form.Label>Server Address</Form.Label>
          <Form.Control
            type="text"
            value={emailConfig.serverAddress}
            onChange={(e) => handleChange("serverAddress", e.target.value)}
            disabled={!isEditing}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Port</Form.Label>
          <Form.Control
            type="number"
            value={emailConfig.port}
            onChange={(e) => handleChange("port", Number(e.target.value))}
            disabled={!isEditing}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={emailConfig.username}
            onChange={(e) => handleChange("username", e.target.value)}
            disabled={!isEditing}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={emailConfig.password}
            onChange={(e) => handleChange("password", e.target.value)}
            disabled={!isEditing}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>From Email</Form.Label>
          <Form.Control
            type="email"
            value={emailConfig.fromEmail}
            onChange={(e) => handleChange("fromEmail", e.target.value)}
            disabled={!isEditing}
          />
        </Form.Group>
      </Form>
    </Card>
  );
};

export default EmailSettings;
