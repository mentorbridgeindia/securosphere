import React, { useState } from "react";
import { Button, Form, Card, Container, Row, Col } from "react-bootstrap";

type EmailTemplateProps = {
  templateType: string;
  initialContent: string;
  onSave: (content: string) => void;
};

const EmailTemplateEditor: React.FC<EmailTemplateProps> = ({
  templateType,
  initialContent,
  onSave,
}) => {
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    onSave(content);
  };

  return (
    <Card className="mb-4">
      <Card.Header as="h2">{templateType} Template</Card.Header>
      <Card.Body>
        <Row>
          <Col md={6}>
            <Form>
              <div className="email-template">
                <div className="email-header mb-3">
                  <img src="/path/to/logo.png" alt="App Logo" />
                </div>
                <div className="email-body mb-3">
                  <Form.Group controlId="emailContent">
                    <Form.Label>Hi {"{{ Recipient’s Name }}"},</Form.Label>
                    <Form.Control
                      as="textarea"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={10}
                    />
                  </Form.Group>
                </div>
                <div className="email-footer text-muted">
                  <p>
                    This link will expire in {"{{ link_expiration_time }}"}{" "}
                    minutes.
                  </p>
                </div>
              </div>
              <Button variant="primary" onClick={handleSave}>
                Save
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <div className="preview">
              <h4>Preview</h4>
              <div className="email-template">
                <div className="email-header mb-3">
                  <img src="/path/to/logo.png" alt="App Logo" />
                </div>
                <div className="email-body mb-3">
                  <p>
                    Hi <strong>{"{{ Recipient’s Name }}"}</strong>,
                  </p>
                  <p>{content}</p>
                </div>
                <div className="email-footer text-muted">
                  <p>
                    This link will expire in{" "}
                    <strong>{"{{ link_expiration_time }}"}</strong> minutes.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const EmailTemplateConfig: React.FC = () => {
  const handleSave = (templateType: string, content: string) => {
    // Save the content to your server or state management
    console.log(`Saved ${templateType} content:`, content);
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Email Templates</h1>
      <Row>
        <Col md={12}>
          <EmailTemplateEditor
            templateType="Invitation"
            initialContent="Welcome to our platform! You have been invited by {{inviter_name}}. This invitation will expire in {{invitation_expires_in_days}} days."
            onSave={(content) => handleSave("Invitation", content)}
          />
        </Col>
        <Col md={12}>
          <EmailTemplateEditor
            templateType="Email Verification"
            initialContent="Welcome to SecureSpheres! To complete your registration, please verify your email address by clicking the button below."
            onSave={(content) => handleSave("Email Verification", content)}
          />
        </Col>
        <Col md={12}>
          <EmailTemplateEditor
            templateType="Reset Password"
            initialContent="We received a request to reset your password for your SecureSpheres account. To reset your password, click the button below."
            onSave={(content) => handleSave("Reset Password", content)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default EmailTemplateConfig;
