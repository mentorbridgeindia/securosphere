import React, { useState } from "react";
import { Form, Card, Button, Image } from "react-bootstrap";
import { Settings } from "lucide-react";
import { AppSettingsProps } from "@modules/settings/types/config";

type AppSettingsComponentProps = AppSettingsProps & { isEditing: boolean };

const AppSettingsComponent = ({ config, onUpdateConfig, isEditing }: AppSettingsComponentProps) => {
  const [logoPreview, setLogoPreview] = useState<string | null>(
    config.applicationLogo || null
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

  const handleAddDomain = () => {
    if (!isEditing) return;
    onUpdateConfig({
      authorizedDomains: [...config.authorizedDomains, ""],
    });
  };

  const handleRemoveDomain = (index: number) => {
    if (!isEditing) return;
    const newDomains = config.authorizedDomains.filter((_, i) => i !== index);
    onUpdateConfig({ authorizedDomains: newDomains });
  };

  const handleDomainChange = (index: number, value: string) => {
    if (!isEditing) return;
    const newDomains = [...config.authorizedDomains];
    newDomains[index] = value;
    onUpdateConfig({ authorizedDomains: newDomains });
  };

  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <Settings className="me-2 text-primary" size={24} />
          <h5 className="mb-0 fw-bold">Application Settings</h5>
        </div>
      </Card.Header>
      <Form className="p-4">
        <Form.Group className="mb-3">
          <Form.Label>Application Logo</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            disabled={!isEditing}
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
          <Form.Label>Subdomain</Form.Label>
          <Form.Control type="text" value={config.subDomain} readOnly />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Application Name</Form.Label>
          <Form.Control
            type="text"
            value={config.applicationName}
            onChange={(e) =>
              onUpdateConfig({ applicationName: e.target.value })
            }
            disabled={!isEditing}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Organization Name</Form.Label>
          <Form.Control
            type="text"
            value={config.organizationName}
            onChange={(e) =>
              onUpdateConfig({ organizationName: e.target.value })
            }
            disabled={!isEditing}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Authorized Domains</Form.Label>
          {config.authorizedDomains.map((domain, index) => (
            <div key={index} className="d-flex mb-2">
              <Form.Control
                type="text"
                value={domain}
                onChange={(e) => handleDomainChange(index, e.target.value)}
                disabled={!isEditing}
                className="me-2"
              />
              {isEditing && (
                <Button
                  variant="outline-danger"
                  onClick={() => handleRemoveDomain(index)}
                >
                  Remove
                </Button>
              )}
            </div>
          ))}
          {isEditing && (
            <Button variant="outline-success" onClick={handleAddDomain}>
              Add Domain
            </Button>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Social Login Providers</Form.Label>
          {Object.keys(config.socialProviders).map((provider) => (
            <Form.Check
              key={provider}
              type="checkbox"
              label={provider.charAt(0).toUpperCase() + provider.slice(1)}
              checked={config.socialProviders[provider]}
              onChange={(e) =>
                onUpdateConfig({
                  socialProviders: {
                    ...config.socialProviders,
                    [provider]: e.target.checked,
                  },
                })
              }
              disabled={!isEditing}
            />
          ))}
        </Form.Group>
      </Form>
    </Card>
  );
};

export default AppSettingsComponent;
