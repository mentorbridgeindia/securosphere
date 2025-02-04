import { useState } from "react";
import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap";
import { SecuritySettingsComponent } from "@modules/settings/SecuritySettings";
import { Shield, Settings as SettingsIcon, Edit } from "lucide-react";
import type {
  SecuritySettings,
  AppConfig,
} from "@modules/settings/types/config";
import "./settings.scss";
import AppSettingsComponent from "@/modules/settings/AppSettings";

function Settings() {
  const [activeTab, setActiveTab] = useState("application");
  const [isEditing, setIsEditing] = useState(false); 

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
    },
    applicationLogo: null,
  });

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold" style={{ color: "#002851" }}>
          Settings
        </h3>
        <Button variant="primary" onClick={() => setIsEditing(!isEditing)}>
          <Edit size={18} className="me-2" />
          {isEditing ? "Save" : "Edit"}
        </Button>
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
              </Nav>
            </Card.Body>
          </Card>
        </Col>

        <Col md={9}>
          {activeTab === "application" && (
            <AppSettingsComponent
              config={appConfig}
              isEditing={isEditing} 
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
        </Col>
      </Row>
    </Container>
  );
}

export default Settings;
