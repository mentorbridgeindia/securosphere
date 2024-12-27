import { ReactComponent as IconPlus } from "@assets/icons/icon-plus.svg";
import { ReactComponent as IconTrash } from "@assets/icons/icon-trash.svg";
import { FormLabel } from "@atoms/FormLabel";
import { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

export const LoginCallbackConfig = () => {
  const [setup, setSetup] = useState<{
    logo: string;
    origins: string[];
    callbackUrl: string;
  }>({
    logo: "",
    origins: [""],
    callbackUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSetup((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateOrigins = (index: number, value: string) => {
    setSetup((prev) => ({
      ...prev,
      origins: prev.origins.map((origin, i) => (i === index ? value : origin)),
    }));
  };

  const handleAddOrigin = () => {
    const isFilled = setup.origins.every((origin) => origin.trim() !== "");
    if (isFilled) {
      setSetup((prev) => ({ ...prev, origins: [...prev.origins, ""] }));
    }
  };

  const handleRemoveOrigin = (index: number) => {
    setSetup((prev) => ({
      ...prev,
      origins: prev.origins.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(setup);
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setSetup((prev) => ({ ...prev, [name]: reader.result }));
        console.log(reader.result);
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
              <Form.Group controlId="domain">
                <FormLabel>Organization Logo</FormLabel>
                <Form.Control
                  className="mt-2"
                  type="file"
                  name="logo"
                  onChange={handleUpload}
                />
              </Form.Group>
              <Form.Group controlId="website" className="mt-3">
                <FormLabel className="d-flex align-items-center justify-content-between">
                  <div>Authorized Origins</div>
                  <button className="ms-2 empty-btn" onClick={handleAddOrigin}>
                    <IconPlus />
                  </button>
                </FormLabel>
                {setup.origins.map((origin, index) => (
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
                    {setup.origins.length > 1 && (
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
              <Form.Group controlId="callbackUrls" className="mt-3">
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
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
