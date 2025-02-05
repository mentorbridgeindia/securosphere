import React, { useState } from "react";
import { Form, Card, Button, Image } from "react-bootstrap";
import { Settings, Edit } from "lucide-react";
import { AppSettingsProps } from "@modules/settings/types/config";

const AppSettingsComponent = ({ config, onUpdateConfig }: AppSettingsProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localConfig, setLocalConfig] = useState(config);
  const [logoPreview, setLogoPreview] = useState<string | null>(
    config.applicationLogo || null
  );
  const handleSave = () => {
    onUpdateConfig(localConfig);
    setIsEditing(false);
  };

  const handleChange = (field: keyof typeof localConfig, value: any) => {
    setLocalConfig({ ...localConfig, [field]: value });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setLogoPreview(base64String);
        handleChange("applicationLogo", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddDomain = () => {
    if (!isEditing) return;
    handleChange("authorizedDomains", [...localConfig.authorizedDomains, ""]);
  };

  const handleRemoveDomain = (index: number) => {
    if (!isEditing) return;
    const newDomains = localConfig.authorizedDomains.filter(
      (_, i) => i !== index
    );
    handleChange("authorizedDomains", newDomains);
  };

  const handleDomainChange = (index: number, value: string) => {
    if (!isEditing) return;
    const newDomains = [...localConfig.authorizedDomains];
    newDomains[index] = value;
    handleChange("authorizedDomains", newDomains);
  };

  return (
    <Card className="mb-4">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Settings className="me-2 text-primary" size={24} />
          <h5 className="mb-0 fw-bold">Application Settings</h5>
        </div>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
        >
          {isEditing ? (
            <>Save</>
          ) : (
            <>
              <Edit size={16} />
            </>
          )}
        </Button>
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
          <Form.Control type="text" value={localConfig.subDomain} readOnly />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Application Name</Form.Label>
          <Form.Control
            type="text"
            value={localConfig.applicationName}
            onChange={(e) => handleChange("applicationName", e.target.value)}
            disabled={!isEditing}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Organization Name</Form.Label>
          <Form.Control
            type="text"
            value={localConfig.organizationName}
            onChange={(e) => handleChange("organizationName", e.target.value)}
            disabled={!isEditing}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Authorized Domains</Form.Label>
          {localConfig.authorizedDomains.map((domain, index) => (
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
            <Button
              variant="outline-primary"
              onClick={handleAddDomain}
              className="mt-2"
            >
              Add Domain
            </Button>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Social Login Providers</Form.Label>
          {Object.keys(localConfig.socialProviders).map((provider) => (
            <Form.Check
              key={provider}
              type="checkbox"
              label={provider.charAt(0).toUpperCase() + provider.slice(1)}
              checked={localConfig.socialProviders[provider]}
              onChange={(e) =>
                handleChange("socialProviders", {
                  ...localConfig.socialProviders,
                  [provider]: e.target.checked,
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
