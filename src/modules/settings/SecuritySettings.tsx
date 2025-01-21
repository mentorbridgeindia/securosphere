import { Card, Form, Button, ListGroup } from "react-bootstrap";
import { Shield, Globe, LogOut } from "lucide-react";
import type { SecuritySettingsProps } from "./types/config";

export const SecuritySettingsComponent = ({
  security,
  onUpdateSecurity,
}: SecuritySettingsProps) => {
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <Shield className="me-2 text-primary" size={24} />
          <h5 className="mb-0 fw-bold">Security Settings</h5>
        </div>
      </Card.Header>
      <Card.Body className="py-4">
        <Form>
          <div className="mb-4">
            <h6 className="mb-3 text-muted">Two-Factor Authentication</h6>
            <div className="bg-light rounded-3 p-4 mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="mb-1">Enable 2FA</h6>
                  <p className="text-muted mb-0 small">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Form.Check
                  type="switch"
                  id="2fa-toggle"
                  checked={security.twoFactorEnabled}
                  onChange={(e) =>
                    onUpdateSecurity({ twoFactorEnabled: e.target.checked })
                  }
                />
              </div>
            </div>
            {security.twoFactorEnabled && (
              <Form.Select
                value={security.twoFactorMethod}
                onChange={(e) =>
                  onUpdateSecurity({ twoFactorMethod: e.target.value as any })
                }
                className="rounded-pill"
              >
                <option value="app">Authenticator App</option>
                <option value="sms">SMS</option>
                <option value="email">Email</option>
              </Form.Select>
            )}
          </div>

          <div className="mb-4">
            <h6 className="mb-3 text-muted">Password</h6>
            <div className="bg-light rounded-3 p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Change Password</h6>
                  <p className="text-muted mb-0 small">
                    Last changed:{" "}
                    {security.lastPasswordChange.toLocaleDateString()}
                  </p>
                </div>
                <Button variant="primary" className="rounded-pill px-4">
                  Update
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h6 className="mb-3 text-muted">Active Sessions</h6>
            <ListGroup variant="flush">
              {security.activeSessions.map((session) => (
                <ListGroup.Item
                  key={session.id}
                  className="px-4 py-3 bg-light rounded-3 mb-2 border-0"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div className="d-flex align-items-center mb-1">
                        <Globe size={16} className="me-2 text-primary" />
                        <h6 className="mb-0">{session.device}</h6>
                      </div>
                      <small className="text-muted">
                        {session.location} • {session.ip}
                      </small>
                    </div>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="rounded-pill px-3"
                    >
                      <LogOut size={14} className="me-1" />
                      Terminate
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
