import { Card, Form, Button, Image } from "react-bootstrap";
import { Settings } from "lucide-react";
import { useState } from "react";
import type { AppSettingsProps } from "./types/config";

export const AppSettingsComponent = ({
  config,
  onUpdateConfig,
}: AppSettingsProps) => {
  const [logoPreview, setLogoPreview] = useState<string | null>(
    config.applicationLogo || null
  );
  const [faviconPreview, setFaviconPreview] = useState<string | null>(
    config.favicon || null
  );

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setLogoPreview(base64String);
        onUpdateConfig({ applicationLogo: base64String });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFaviconUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFaviconPreview(base64String);
        onUpdateConfig({ favicon: base64String });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Settings className="me-2" />
        <h5 className="mb-0">Application Settings</h5>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Application Name</Form.Label>
            <Form.Control
              type="text"
              // value={config.applicationName}
              onChange={(e) =>
                onUpdateConfig({ applicationName: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Organization Name</Form.Label>
            <Form.Control
              type="text"
              // value={config.organizationName}
              onChange={(e) =>
                onUpdateConfig({ organizationName: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Subdomain</Form.Label>
            <Form.Control
              type="text"
              // value={config.subDomain}
              onChange={(e) => onUpdateConfig({ subDomain: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Application Logo</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
            />
            {logoPreview && (
              <Image
                src={logoPreview}
                alt="Logo Preview"
                fluid
                style={{ maxWidth: "200px", marginTop: "10px" }}
              />
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Favicon</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleFaviconUpload}
            />
            {faviconPreview && (
              <Image
                src={faviconPreview}
                alt="Favicon Preview"
                fluid
                style={{ maxWidth: "50px", marginTop: "10px" }}
              />
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Authorized Domains</Form.Label>
            {config.authorizedDomains.map((domain, index) => (
              <div key={index} className="d-flex mb-2">
                <Form.Control
                  type="text"
                  // value={domain}
                  onChange={(e) => {
                    const newDomains = [...config.authorizedDomains];
                    newDomains[index] = e.target.value;
                    onUpdateConfig({ authorizedDomains: newDomains });
                  }}
                />
                <Button
                  variant="outline-danger"
                  className="ms-2"
                  onClick={() => {
                    const newDomains = config.authorizedDomains.filter(
                      (_, i) => i !== index
                    );
                    onUpdateConfig({ authorizedDomains: newDomains });
                  }}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              variant="outline-success"
              onClick={() =>
                onUpdateConfig({
                  authorizedDomains: [...config.authorizedDomains, ""],
                })
              }
            >
              Add Domain
            </Button>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Social Providers</Form.Label>
            <Form.Check
              type="switch"
              id="email-provider"
              label="Email Sign-in"
              checked={config.socialProviders.email}
              onChange={(e) =>
                onUpdateConfig({
                  socialProviders: {
                    ...config.socialProviders,
                    email: e.target.checked,
                  },
                })
              }
              className="mb-2"
            />
            <Form.Check
              type="switch"
              id="linkedin-provider"
              label="LinkedIn Sign-in"
              checked={config.socialProviders.linkedIn}
              onChange={(e) =>
                onUpdateConfig({
                  socialProviders: {
                    ...config.socialProviders,
                    linkedIn: e.target.checked,
                  },
                })
              }
              className="mb-2"
            />
            <Form.Check
              type="switch"
              id="google-provider"
              label="Google Sign-in"
              checked={config.socialProviders.google}
              onChange={(e) =>
                onUpdateConfig({
                  socialProviders: {
                    ...config.socialProviders,
                    google: e.target.checked,
                  },
                })
              }
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};
