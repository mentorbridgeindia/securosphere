import { useState } from "react";
import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap";
import { SecuritySettingsComponent } from "@modules/settings/SecuritySettings";
import { Shield, Settings as SettingsIcon, Edit, Mail } from "lucide-react";
import type {
  SecuritySettings,
  AppConfig,
  EmailSettingsProps,
} from "@modules/settings/types/config";
import "./settings.scss";
import AppSettingsComponent from "@/modules/settings/AppSettings";
import EmailSettingsComponent from "@/modules/settings/EmailSettings";

function Settings() {
  const [activeTab, setActiveTab] = useState("application");

  const [security, setSecurity] = useState<SecuritySettings>({
    twoFactorEnabled: true,
    lastPasswordChange: new Date(),
  });

  const [appConfig, setAppConfig] = useState<AppConfig>({
    subDomain: "example.securosphere.in",
    authorizedDomains: ["localhost"],
    callbackUrl: "http://localhost:9000/auth/config",
    applicationName: "Test App",
    organizationName: "SecuroSphere",
    socialProviders: {
      email: true,
      linkedIn: true,
      google: true,
      facebook: true,
      apple: true,
      microsoft: true,
      github: true,
      amazon: true,
      twitter: true,
    },
    applicationLogo: null,
  });

  const [emailConfig, setEmailConfig] = useState<EmailSettingsProps>({
    serverAddress: "smtp.example.com",
    port: 587,
    username: "user@example.com",
    password: "********",
    fromEmail: "noreply@example.com",
  });

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold" style={{ color: "#002851" }}>
          Settings
        </h3>
      </div>

      <Row>
        <Col md={3}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-0">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link
                    active={activeTab === "application"}
                    onClick={() => setActiveTab("application")}
                    className="d-flex align-items-center px-4 py-3 border-bottom custom-nav-link"
                  >
                    <SettingsIcon
                      size={18}
                      className="me-2"
                      style={{ color: "#002851" }}
                    />
                    Application
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    active={activeTab === "security"}
                    onClick={() => setActiveTab("security")}
                    className="d-flex align-items-center px-4 py-3 border-bottom custom-nav-link"
                  >
                    <Shield
                      size={18}
                      className="me-2"
                      style={{ color: "#002851" }}
                    />
                    Security
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    active={activeTab === "email"}
                    onClick={() => setActiveTab("email")}
                    className="d-flex align-items-center px-4 py-3 border-bottom custom-nav-link"
                  >
                    <Mail
                      size={18}
                      className="me-2"
                      style={{ color: "#002851" }}
                    />
                    Email
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
        </Col>

        <Col md={9}>
          {activeTab === "application" && (
            <AppSettingsComponent
              config={appConfig}
              onUpdateConfig={(updates) =>
                setAppConfig({ ...appConfig, ...updates })
              }
            />
          )}
          {activeTab === "security" && (
            <SecuritySettingsComponent
              security={security}
              onUpdateSecurity={(updates) =>
                setSecurity({ ...security, ...updates })
              }
            />
          )}
          {activeTab === "email" && (
            <EmailSettingsComponent
              config={emailConfig}
              onUpdateConfig={(updates) =>
                setEmailConfig({ ...emailConfig, ...updates })
              }
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Settings;
