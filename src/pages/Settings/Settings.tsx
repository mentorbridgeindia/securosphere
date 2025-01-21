import { useState } from "react";
import { Container, Row, Col, Nav, Card } from "react-bootstrap";
import { SecuritySettingsComponent } from "@modules/settings/SecuritySettings";
import { NotificationSettingsComponent } from "@modules/settings/NotificationSettings";
import { AppSettingsComponent } from "@modules/settings/AppSettings";
import { Shield, Bell, Settings as SettingsIcon } from "lucide-react";
import type {
  SecuritySettings,
  AppConfig,
} from "@modules/settings/types/config";
import "./settings.scss";

function Settings() {
  const [activeTab, setActiveTab] = useState("security");
  const [security, setSecurity] = useState<SecuritySettings>({
    twoFactorEnabled: false,
    twoFactorMethod: "app",
    lastPasswordChange: new Date(),
    activeSessions: [
      {
        id: "1",
        device: "Chrome on Windows",
        location: "Chennai, India",
        lastActive: new Date(),
        ip: "192.168.1.1",
      },
    ],
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const [appConfig, setAppConfig] = useState<AppConfig>({
    subDomain: "",
    authorizedDomains: ["localhost"],
    callbackUrl: "http://localhost:9000/auth/config",
    website: "http://localhost:9000",
    applicationName: "Test App",
    organizationName: "",
    termsOfServiceUrl: "https://www.securosphere.in/auth-configuration",
    socialProviders: {
      email: true,
      linkedIn: true,
      google: true,
    },
    applicationLogo: null, 
    favicon: null, 
  });

  return (
    <Container className="py-5">
      <h3 className="mb-4 fw-bold" style={{ color: "#002851" }}>
        Settings
      </h3>
      <Row>
        <Col md={3}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-0">
              <Nav variant="pills" className="flex-column">
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
                    active={activeTab === "notifications"}
                    onClick={() => setActiveTab("notifications")}
                    className="d-flex align-items-center px-4 py-3 border-bottom custom-nav-link"
                  >
                    <Bell
                      size={18}
                      className="me-2"
                      style={{ color: "#002851" }}
                    />
                    Notifications
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    active={activeTab === "application"}
                    onClick={() => setActiveTab("application")}
                    className="d-flex align-items-center px-4 py-3 custom-nav-link"
                  >
                    <SettingsIcon
                      size={18}
                      className="me-2"
                      style={{ color: "#002851" }}
                    />
                    Application
                  </Nav.Link>
                </Nav.Item>
                
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          {activeTab === "security" && (
            <SecuritySettingsComponent
              security={security}
              onUpdateSecurity={(updates) =>
                setSecurity({ ...security, ...updates })
              }
            />
          )}
          {activeTab === "notifications" && (
            <NotificationSettingsComponent
              settings={notifications}
              onUpdate={(updates) =>
                setNotifications({ ...notifications, ...updates })
              }
            />
          )}
          {activeTab === "application" && (
            <AppSettingsComponent
              config={appConfig}
              onUpdateConfig={(updates) =>
                setAppConfig({ ...appConfig, ...updates })
              }
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Settings;
