import { ReactComponent as IconPlus } from "@assets/icons/icon-plus.svg";
import { ReactComponent as IconTrash } from "@assets/icons/icon-trash.svg";
import { FormLabel } from "@atoms/FormLabel";
import { useAtom } from "jotai";
import { useState } from "react";
import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { loginCallbackConfigAtom } from "./atoms/loginCallbackConfigAtom";
import { LoginCallbackConfigState } from "./LoginCallbackConfig.types";

export const LoginCallbackConfig = () => {
  const [loginCallbackConfig, setLoginCallbackConfig] = useAtom(
    loginCallbackConfigAtom
  );
  console.log(
    "loginCallbackConfig in LoginCallbackConfig",
    loginCallbackConfig
  );
  const [setup, setSetup] = useState<LoginCallbackConfigState>({
    orgName: loginCallbackConfig?.orgName || "",
    website: loginCallbackConfig?.website || "",
    orgLogo: loginCallbackConfig?.orgLogo || "",
    authorizedOrigins: loginCallbackConfig?.authorizedOrigins || [""],
    callbackUrl: loginCallbackConfig?.callbackUrl || "",
    subDomain: loginCallbackConfig?.subDomain || "",
    termsOfServiceUrl: loginCallbackConfig?.termsOfServiceUrl || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSetup((prev) => ({ ...prev, [name]: value }));
    setLoginCallbackConfig(setup);
  };

  const handleUpdateOrigins = (index: number, value: string) => {
    setSetup((prev) => ({
      ...prev,
      authorizedOrigins: prev.authorizedOrigins.map((origin, i) =>
        i === index ? value : origin
      ),
    }));
    setLoginCallbackConfig(setup);
  };

  const handleAddOrigin = () => {
    const isFilled = setup.authorizedOrigins.every(
      (origin) => origin.trim() !== ""
    );
    if (isFilled) {
      setSetup((prev) => ({
        ...prev,
        authorizedOrigins: [...prev.authorizedOrigins, ""],
      }));
      setLoginCallbackConfig(setup);
    }
  };

  const handleRemoveOrigin = (index: number) => {
    setSetup((prev) => ({
      ...prev,
      authorizedOrigins: prev.authorizedOrigins.filter((_, i) => i !== index),
    }));
    setLoginCallbackConfig(setup);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginCallbackConfig(setup);
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      if (
        (file.type !== "image/png" && file.type !== "image/jpeg") ||
        file.size > 3000000
      ) {
        toast.error("Please upload a PNG or JPEG file");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setSetup((prev) => ({ ...prev, [name]: reader.result }));
        setLoginCallbackConfig(setup);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow-sm w-100">
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group controlId="domain" className="mb-3">
                <FormLabel>Organization Name</FormLabel>
                <Form.Control
                  className="mt-2"
                  type="text"
                  name="orgName"
                  onChange={handleChange}
                  value={setup.orgName}
                />
              </Form.Group>
              <Form.Group controlId="subDomain" className="mb-3">
                <FormLabel>Sub Domain</FormLabel>
                <InputGroup className="mb-3">
                  <Form.Control
                    className="mt-2"
                    type="text"
                    name="subDomain"
                    onChange={handleChange}
                    value={setup.subDomain}
                  />
                  <InputGroup.Text className="text-small">
                    .securosphere.com
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="authorizedOrigins" className="mb-3">
                <FormLabel className="d-flex align-items-center justify-content-between">
                  <div>Authorized Origins</div>
                  <button className="ms-2 empty-btn" onClick={handleAddOrigin}>
                    <IconPlus />
                  </button>
                </FormLabel>
                {setup.authorizedOrigins.map((origin, index) => (
                  <div className="d-flex align-items-center" key={index}>
                    <Form.Control
                      className="mt-2"
                      type="url"
                      name="origin"
                      autoComplete="off"
                      placeholder="localhost,stublab.in"
                      value={origin}
                      onChange={(e) =>
                        handleUpdateOrigins(index, e.target.value)
                      }
                    />
                    {setup.authorizedOrigins.length > 1 && (
                      <button
                        className="ms-2 empty-btn text-danger"
                        onClick={() => handleRemoveOrigin(index)}
                      >
                        <IconTrash />
                      </button>
                    )}
                  </div>
                ))}
              </Form.Group>
              <Form.Group controlId="callbackUrls" className="mb-3">
                <FormLabel className="d-flex align-items-center justify-content-start">
                  Callback URL
                </FormLabel>
                <Form.Control
                  className="mt-2"
                  type="text"
                  name="callbackUrl"
                  placeholder="https://example.com/oauth/success"
                  value={setup.callbackUrl}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="orgLogo" className="mb-3">
                <FormLabel>Organization Logo</FormLabel>
                <Form.Control
                  className="mt-2"
                  type="file"
                  name="orgLogo"
                  onChange={handleUpload}
                />
              </Form.Group>
              <Form.Group controlId="website" className="mb-3">
                <FormLabel>Organization Website</FormLabel>
                <Form.Control
                  className="mt-2"
                  type="url"
                  name="website"
                  onChange={handleChange}
                  value={setup.website}
                />
              </Form.Group>
              <Form.Group controlId="termsOfServiceUrl" className="mb-3">
                <FormLabel>Terms of Service URL</FormLabel>
                <Form.Control
                  className="mt-2"
                  type="url"
                  name="termsOfServiceUrl"
                  onChange={handleChange}
                  value={setup.termsOfServiceUrl}
                />
              </Form.Group>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
