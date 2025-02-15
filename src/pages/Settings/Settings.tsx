import { Spinner } from "@atoms/Spinner";
import { useGetOrganization } from "@entities/Organization";
import { AppSettings } from "@modules/settings/AppSettings";
import { SecuritySettingsComponent } from "@modules/settings/SecuritySettings";
import { SecuritySettings } from "@modules/settings/SecuritySettings.types";
import SignUpOptionsCard from "@modules/SignUpConfig/components/SignUpOptionsCard";
import { Edit, Settings as SettingsIcon, X } from "lucide-react";
import { useState } from "react";
import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";
import "./settings.scss";

export const Settings = () => {
  const [activeTab, setActiveTab] = useState("application");
  const [isEditing, setIsEditing] = useState(false);

  const { isLoading } = useGetOrganization({
    queryConfig: { enabled: true },
  });

  const [security, setSecurity] = useState<SecuritySettings>({
    twoFactorEnabled: true,
    lastPasswordChange: new Date(),
  });

  if (isLoading) return <Spinner isLoading />;

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold text-primary">Settings</h3>
        <div className="d-flex gap-2">
          {isEditing && (
            <Button
              size="sm"
              variant="outline-secondary  "
              onClick={() => setIsEditing(!isEditing)}
            >
              <X size={18} />
              Cancel
            </Button>
          )}
          <Button
            size="sm"
            variant="primary"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit size={18} className="me-2" />
            {isEditing ? "Save" : "Edit"}
          </Button>
        </div>
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
                    <SettingsIcon size={18} className="me-2" />
                    Application
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    active={activeTab === "signup"}
                    onClick={() => setActiveTab("signup")}
                    className="d-flex align-items-center px-4 py-3 border-bottom custom-nav-link"
                  >
                    <SettingsIcon size={18} className="me-2" />
                    Sign Up
                  </Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link
                    active={activeTab === "security"}
                    onClick={() => setActiveTab("security")}
                    className="d-flex align-items-center px-4 py-3 border-bottom custom-nav-link"
                  >
                    <Shield size={18} className="me-2" />
                    Security
                  </Nav.Link>
                </Nav.Item> */}
              </Nav>
            </Card.Body>
          </Card>
        </Col>

        <Col md={9}>
          {activeTab === "application" && (
            <AppSettings config={null} isEditing={isEditing} />
          )}
          {activeTab === "signup" && <SignUpOptionsCard />}
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
