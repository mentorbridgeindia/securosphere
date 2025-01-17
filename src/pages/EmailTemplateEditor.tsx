import React, { useState } from "react";
import { Button, Form, Card, Row, Col } from "react-bootstrap";

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
                    <Form.Label>Hi ,</Form.Label>
                    <Form.Control
                      as="textarea"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={10}
                    />
                  </Form.Group>
                </div>
                <div className="email-footer text-muted">
                  <p>This link will expire in minutes.</p>
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
                  <p>Hi,</p>
                  <p>{content}</p>
                </div>
                <div className="email-footer text-muted">
                  <p>This link will expire in minutes.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EmailTemplateEditor;
