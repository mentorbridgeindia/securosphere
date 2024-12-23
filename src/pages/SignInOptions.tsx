// SignInOptions.tsx
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Stack,
} from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import "./SignInOptions.css";

interface SignInOptionsState {
  email: boolean;
  username: boolean;
  google: boolean;
  facebook: boolean;
  apple: boolean;
  github: boolean;
  gitlab: boolean;
  microsoft: boolean;
  twitter: boolean;
  linkedin: boolean;
}

interface IconMappingType {
  [key: string]: JSX.Element | string;
}

const iconMapping: IconMappingType = {
  email: <MdEmail size={20} />,
  username: <FaUser size={20} />,
  google: "/assets/google.svg",
  facebook: "/assets/facebook.svg",
  apple: "/assets/apple.svg",
  github: "/assets/github.svg",
  gitlab: "/assets/gitlab.svg",
  microsoft: "/assets/microsoft.svg",
  twitter: "/assets/twitter.svg",
  linkedin: "/assets/linkedin.svg",
};

const socialColors: { [key: string]: string } = {
  google: "#DB4437",
  facebook: "#4267B2",
  apple: "#000000",
  github: "#333",
  gitlab: "#FC6D26",
  microsoft: "#00A4EF",
  twitter: "#1DA1F2",
  linkedin: "#0A66C2",
};

const renderIcon = (icon: JSX.Element | string) => {
  if (typeof icon === "string") {
    return <img src={icon} alt="" width={20} height={20} />;
  }
  return icon;
};

const SignInOptions = () => {
  const [applicationName, setApplicationName] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<SignInOptionsState>({
    email: true,
    username: false,
    google: true,
    facebook: false,
    apple: false,
    github: false,
    gitlab: false,
    microsoft: false,
    twitter: false,
    linkedin: false,
  });

  const handleOptionChange = (key: keyof SignInOptionsState) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Container fluid className="py-4">
      <Row className="justify-content-center g-4">
        {/* Configuration Panel */}
        <Col md={5}>
          <Card className="configuration-panel ">
            <Card.Body>
              <h4>
                Let's build your <code>&lt;SignIn /&gt;</code>
              </h4>
              <p className="text-muted small mb-4">
                The configurations can be changed anytime in the dashboard.
              </p>

              <Form>
                <Form.Group className="mb-4">
                  <Form.Label>Application name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="My Application"
                    value={applicationName}
                    onChange={(e) => setApplicationName(e.target.value)}
                  />
                </Form.Group>

                <div className="options-container">
                  <h6 className="mb-3">Sign in options</h6>
                  <Stack gap={2}>
                    {(
                      Object.keys(selectedOptions) as Array<
                        keyof SignInOptionsState
                      >
                    ).map((key) => (
                      <div
                        key={key}
                        className="d-flex justify-content-between align-items-center option-row"
                      >
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="option-icon"
                            style={{ color: socialColors[key] }}
                          >
                            {renderIcon(
                              iconMapping[key as keyof IconMappingType]
                            )}
                          </span>
                          <span>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </span>
                        </div>
                        <Form.Check
                          type="switch"
                          checked={selectedOptions[key]}
                          onChange={() => handleOptionChange(key)}
                        />
                      </div>
                    ))}
                  </Stack>
                </div>

                <Button variant="primary" className="w-100 mt-4">
                  Create application
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Preview Panel */}
        <Col md={5}>
          <Card className="preview-panel ">
            <Card.Body className="text-center d-flex flex-column">
              <div>
                <h4>Sign into {applicationName || "My Application"}</h4>
                <p className="text-muted">
                  Welcome back! Please sign in to continue
                </p>

                {/* Social Buttons Section */}
                {Object.entries(selectedOptions).some(
                  ([key, value]) =>
                    value &&
                    [
                      "google",
                      "facebook",
                      "apple",
                      "github",
                      "gitlab",
                      "microsoft",
                      "twitter",
                      "linkedin",
                    ].includes(key)
                ) && (
                  <div className="social-buttons-container my-4">
                    {/* First Row */}
                    <div className="d-flex justify-content-center gap-2 mb-2">
                      {Object.entries(selectedOptions)
                        .filter(
                          ([key, value]) =>
                            value &&
                            ["google", "facebook", "apple", "github"].includes(
                              key
                            )
                        )
                        .map(([key]) => (
                          <Button
                            key={key}
                            variant="outline-secondary"
                            className={`social-btn ${key}-btn`}
                            style={{
                              borderColor: socialColors[key],
                              color: socialColors[key],
                            }}
                          >
                            {renderIcon(
                              iconMapping[key as keyof IconMappingType]
                            )}
                          </Button>
                        ))}
                    </div>
                    {/* Second Row */}
                    <div className="d-flex justify-content-center gap-2">
                      {Object.entries(selectedOptions)
                        .filter(
                          ([key, value]) =>
                            value &&
                            [
                              "gitlab",
                              "microsoft",
                              "twitter",
                              "linkedin",
                            ].includes(key)
                        )
                        .map(([key]) => (
                          <Button
                            key={key}
                            variant="outline-secondary"
                            className={`social-btn ${key}-btn`}
                            style={{
                              borderColor: socialColors[key],
                              color: socialColors[key],
                            }}
                          >
                            {renderIcon(
                              iconMapping[key as keyof IconMappingType]
                            )}
                          </Button>
                        ))}
                    </div>
                  </div>
                )}

                {(selectedOptions.email || selectedOptions.username) && (
                  <>
                    <div className="divider">or</div>
                    <div className="input-section">
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder={
                            selectedOptions.email && selectedOptions.username
                              ? "Email address or username"
                              : selectedOptions.email
                              ? "Email address"
                              : "Username"
                          }
                        />
                      </Form.Group>
                    </div>
                  </>
                )}
              </div>

              {/* Footer Section */}
              <div className="mt-5">
                {(selectedOptions.email || selectedOptions.username) && (
                  <Button variant="primary" className="w-100 mb-3">
                    Continue →
                  </Button>
                )}
                <p className="mb-0">
                  Don't have an account? <a href="#">Sign up</a>
                </p>
              </div>
            </Card.Body>
          </Card>
          <div className="text-muted text-center small mt-2">
            This is a preview
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignInOptions;
