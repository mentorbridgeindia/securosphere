import React from "react";
import { Form, Card, Button } from "react-bootstrap";
import { Mail } from "lucide-react";
import { EmailSettingsComponentProps } from "./EmailSettings.types";

export const EmailSettingsComponent = ({
  config,
  onUpdateConfig,
}: EmailSettingsComponentProps) => {
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <Mail className="me-2 text-primary" size={24} />
          <h5 className="mb-0 fw-bold">Email Settings</h5>
        </div>
      </Card.Header>
      <Card.Body className="py-4">
        <Form>
          <div className="mb-4">
            <h6 className="mb-3 text-muted">Server Configuration</h6>
            <div className="bg-light rounded-3 p-4 mb-3">
              <div className="mb-3">
                <h6 className="mb-2">Server Address</h6>
                <p className="text-muted mb-0 small">{config.serverAddress}</p>
              </div>
              <div className="mb-3">
                <h6 className="mb-2">Port</h6>
                <p className="text-muted mb-0 small">{config.port}</p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h6 className="mb-3 text-muted">Authentication</h6>
            <div className="bg-light rounded-3 p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Credentials</h6>
                  <p className="text-muted mb-0 small">
                    Username: {config.username}
                  </p>
                  <p className="text-muted mb-0 small">Password: ••••••••</p>
                </div>
                <Button variant="primary" className="rounded-pill px-4">
                  Update
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h6 className="mb-3 text-muted">Email Configuration</h6>
            <div className="bg-light rounded-3 p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">From Email</h6>
                  <p className="text-muted mb-0 small">{config.fromEmail}</p>
                </div>
                <Button variant="primary" className="rounded-pill px-4">
                  Update
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EmailSettingsComponent;
