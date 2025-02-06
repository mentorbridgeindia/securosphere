import { Card, Form, Button } from "react-bootstrap";
import { Shield, Globe } from "lucide-react";
import type { SecuritySettingsProps } from "@modules/settings/types/config";

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
                  checked={true} 
                  disabled 
                />
              </div>
            </div>
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
            <h6 className="mb-3 text-muted">Last Login</h6>
            <div className="bg-light rounded-3 p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Last Login</h6>
                  <p className="text-muted mb-0 small">
                    {security.lastPasswordChange.toLocaleDateString()}{" "}
                    {security.lastPasswordChange.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
