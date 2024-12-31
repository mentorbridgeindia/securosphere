import { FormLabel } from "@atoms/FormLabel";
import React, { useState, useEffect } from "react";
import { Card, Form, Stack, Button } from "react-bootstrap";
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
  const [isSubmitAttempted, setIsSubmitAttempted] = useState(false);

  const handleOptionToggle = (option: keyof typeof signupOptions) => {
    const enabledOptions = Object.values(signupOptions).filter(Boolean).length;

    if (enabledOptions === 1 && signupOptions[option]) {
      return;
    }

    setSignupOptions((prevOptions) => {
      const updatedOptions = { ...prevOptions, [option]: !prevOptions[option] };
      setErrorMessage(
        Object.values(updatedOptions).some(Boolean)
          ? ""
          : "Please select at least one option."
      );
      return updatedOptions;
    });
  };

  useEffect(() => {
    if (isSubmitAttempted && !appName.trim()) {
      setErrorMessage("Please enter application name.");
    } else {
      setErrorMessage("");
    }
  }, [appName, isSubmitAttempted, setErrorMessage]);

  const handleCreateApplication = () => {
    setIsSubmitAttempted(true);
    if (!appName.trim()) {
      setErrorMessage("Please enter application name.");
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
              isInvalid={isSubmitAttempted && !appName.trim()}
            />
            <Form.Control.Feedback type="invalid">
              {errorMessage}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="signup-options-container">
            <h6 className="mb-3">Select Sign Up Methods</h6>
            <Stack>
              {Object.keys(signupOptions).map((option) => {
                const isOnlyOption =
                  Object.values(signupOptions).filter(Boolean).length === 1 &&
                  signupOptions[option];

                return (
                  <div
                    key={option}
                    className={`d-flex justify-content-between align-items-center p-2 rounded ${
                      isOnlyOption ? "bg-light" : "hover-bg-light"
                    } mb-2`}
                  >
                    <div className="d-flex align-items-center gap-3">
                      {SocialLoginIcons[option]}
                      <span
                        className={`fw-medium ${
                          isOnlyOption ? "text-muted" : ""
                        }`}
                      >
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </span>
                    </div>
                    <Form.Check
                      type="switch"
                      checked={signupOptions[option]}
                      onChange={() => handleOptionToggle(option)}
                      disabled={isOnlyOption}
                      className="custom-switch"
                    />
                  </div>
                );
              })}
            </Stack>
          </div>

          <div className="mt-4">
            <Button
              variant="primary"
              onClick={handleCreateApplication}
              disabled={!!errorMessage || !appName.trim()}
            >
              Create Application
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SignUpOptionsCard;
