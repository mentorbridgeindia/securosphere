import { ReactComponent as IconPlus } from "@assets/icons/icon-plus.svg";
import { ReactComponent as IconTrash } from "@assets/icons/icon-trash.svg";
import { FormLabel } from "@atoms/FormLabel";
import { useState } from "react";
import { Card, Col, Form, Row, Button } from "react-bootstrap";

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

  const [errors, setErrors] = useState<{
    logo: string;
    origins: string[];
    callbackUrl: string;
  }>({
    logo: "",
    origins: [],
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

    // Reset errors
    setErrors({
      logo: "",
      origins: [],
      callbackUrl: "",
    });

    // Validation
    let hasError = false;
    const newErrors = {
      logo: "",
      origins: [] as string[],
      callbackUrl: "",
    };

    if (!setup.logo) {
      newErrors.logo = "Please upload an organization logo.";
      hasError = true;
    }

    if (!setup.origins.some((origin) => origin.trim() !== "")) {
      newErrors.origins.push("Please enter at least one valid origin.");
      hasError = true;
    } else {
      setup.origins.forEach((origin, index) => {
        if (origin.trim() && !isValidUrl(origin)) {
          newErrors.origins[index] = "Please enter a valid URL.";
          hasError = true;
        }
      });
    }

    if (!setup.callbackUrl || !isValidUrl(setup.callbackUrl)) {
      newErrors.callbackUrl = "Please enter a valid callback URL.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
    } else {
      console.log(setup);
    }
  };

  const isValidUrl = (url: string) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // optional protocol
        "(([A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\\.)+[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?|" + // domain...
        "localhost|" + // localhost...
        "(([0-9]{1,3}\\.){3}[0-9]{1,3}))" + // ...or IP address
        "(\\:[0-9]+)?(\\/[-A-Z0-9+&@#/%=~_|$?!,;]*)*" + // port and path
        "(\\?[A-Z0-9+&@#/%=~_|$?!,;]*)?" + // query string
        "(\\#[-A-Z0-9_]*)?$",
      "i"
    );
    return pattern.test(url);
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setSetup((prev) => ({ ...prev, [name]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Disable button until all fields are valid
  const isFormValid =
    setup.logo &&
    setup.origins.some(
      (origin) => origin.trim() !== "" && isValidUrl(origin)
    ) &&
    isValidUrl(setup.callbackUrl);

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
                  isInvalid={!!errors.logo}
                />
                {errors.logo && (
                  <Form.Control.Feedback type="invalid">
                    {errors.logo}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Form.Group controlId="website" className="mt-3 w-100">
                <FormLabel className="d-flex align-items-center justify-content-between">
                  <div>Authorized Origins</div>
                  <button className="ms-2 empty-btn" onClick={handleAddOrigin}>
                    <IconPlus />
                  </button>
                </FormLabel>
                {setup.origins.map((origin, index) => (
                  <div className="d-flex align-items-center" key={index}>
                    <Form.Control
                      className="mt-2 "
                      type="url"
                      name="origin"
                      autoComplete="off"
                      placeholder="localhost,stublab.in"
                      value={origin}
                      onChange={(e) =>
                        handleUpdateOrigins(index, e.target.value)
                      }
                      isInvalid={!!errors.origins[index]}
                    />
                    {errors.origins[index] && (
                      <Form.Control.Feedback type="invalid">
                        {errors.origins[index]}
                      </Form.Control.Feedback>
                    )}
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
                <FormLabel>Callback URL</FormLabel>
                <Form.Control
                  className="mt-2"
                  type="text"
                  name="callbackUrl"
                  placeholder="https://example.com/oauth/success"
                  value={setup.callbackUrl}
                  onChange={handleChange}
                  isInvalid={!!errors.callbackUrl}
                />
                {errors.callbackUrl && (
                  <Form.Control.Feedback type="invalid">
                    {errors.callbackUrl}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Button type="submit" className="mt-3" disabled={!isFormValid}>
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
