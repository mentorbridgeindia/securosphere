import { FormLabel } from "@atoms/FormLabel";
import React from "react";
import { Card, Form, Stack } from "react-bootstrap";
import { SocialLoginIcons } from "./SocialLoginIcons";

interface SignUpOptionsCardProps {
  appName: string;
  setAppName: React.Dispatch<React.SetStateAction<string>>;
  signupOptions: Record<string, boolean>;
  setSignupOptions: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

const SignUpOptionsCard = ({
  appName,
  setAppName,
  signupOptions,
  setSignupOptions,
  errorMessage,
  setErrorMessage,
}: SignUpOptionsCardProps) => {
  const handleOptionToggle = (option: keyof typeof signupOptions) => {
    const hasSelectedOptions =
      Object.values(signupOptions).filter(Boolean).length >= 2;
    if (!signupOptions[option] || hasSelectedOptions) {
      setSignupOptions((prevOptions) => {
        const updatedOptions = {
          ...prevOptions,
          [option]: !prevOptions[option],
        };
        return updatedOptions;
      });
    }
  };

  return (
    <Card className="shadow-sm px-2">
      <Card.Body>
        <h4 className="fs-4 mb-2">Configure Sign Up Options</h4>
        <p className="text-muted fs-8 mb-2">
          Customize sign up settings. You can modify these later.
        </p>

        <Form>
          <Form.Group className="mb-4">
            <FormLabel>Application Name</FormLabel>
            <Form.Control
              className="mt-2"
              type="text"
              placeholder="Enter application name"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
            />
          </Form.Group>

          <div className="signup-options-container">
            <h6 className="mb-3">Select Sign Up Methods</h6>
            <Stack>
              {Object.keys(signupOptions).map((option) => (
                <div
                  key={option}
                  className="d-flex justify-content-between align-items-center p-2 rounded hover-bg-light mb-2"
                >
                  <div className="d-flex align-items-center gap-3">
                    {SocialLoginIcons[option]}
                    <span className="fw-medium">
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </span>
                  </div>
                  <Form.Check
                    type="switch"
                    checked={signupOptions[option]}
                    onChange={() => handleOptionToggle(option)}
                    className="custom-switch"
                  />
                </div>
              ))}
            </Stack>
          </div>

          {errorMessage && (
            <p className="text-danger small mt-3">{errorMessage}</p>
          )}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SignUpOptionsCard;
