import { Card, Form } from "react-bootstrap";
import { Bell } from "lucide-react";
import { NotificationSettingsProps } from "./types/config";
export const NotificationSettingsComponent = ({
  settings,
  onUpdate,
}: NotificationSettingsProps) => {
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Bell className="me-2" />
        <h5 className="mb-0">Notification Preferences</h5>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Communication Channels</Form.Label>
            <Form.Check
              type="switch"
              id="email-notifications"
              label="Email Notifications"
              checked={settings.emailNotifications}
              onChange={(e) =>
                onUpdate({ emailNotifications: e.target.checked })
              }
              className="mb-2"
            />
            <Form.Check
              type="switch"
              id="sms-notifications"
              label="SMS Notifications"
              checked={settings.smsNotifications}
              onChange={(e) => onUpdate({ smsNotifications: e.target.checked })}
            />
          </Form.Group>

          
        </Form>
      </Card.Body>
    </Card>
  );
};
