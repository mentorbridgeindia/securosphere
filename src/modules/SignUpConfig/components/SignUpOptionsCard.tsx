import { FormLabel } from "@atoms/FormLabel";
import { useAtom } from "jotai";
import React from "react";
import { Card, Form, Stack } from "react-bootstrap";
import { SocialProvider } from "../../../types/auth";
import { signUpConfigAtom } from "../atoms/signUpConfigAtom";
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

const SignUpOptionsCard = () => {
  const [signUpConfig, setSignUpConfig] = useAtom(signUpConfigAtom);

  const signUpOptions = [
    "Email",
    "Google",
    "Facebook",
    "Github",
    "Microsoft",
    "Twitter",
    "LinkedIn",
  ];

  const updateSocialProvider = (checked: boolean, option: SocialProvider) => {
    if (checked) {
      setSignUpConfig({
        ...signUpConfig,
        socialProviders: [...signUpConfig.socialProviders, option],
      });
    } else {
      setSignUpConfig({
        ...signUpConfig,
        socialProviders: signUpConfig.socialProviders.filter(
          (p) => p !== option
        ),
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
              type="text"
              placeholder="Enter application name"
              value={signUpConfig?.appName}
              onChange={(e) =>
                setSignUpConfig({ ...signUpConfig, appName: e.target.value })
              }
            />
          </Form.Group>

          <div className="signup-options-container">
            <h6 className="mb-3">Select Sign Up Methods</h6>
            <Stack>
              {signUpOptions.map((option) => (
                <div
                  key={option}
                  className="d-flex justify-content-between align-items-center p-2 rounded hover-bg-light mb-2"
                >
                  <div className="d-flex align-items-center gap-3">
                    {SocialLoginIcons[option.toLowerCase() as SocialProvider]}
                    <span className="fw-medium">{option}</span>
                  </div>
                  <Form.Check
                    type="switch"
                    checked={signUpConfig?.socialProviders?.includes(
                      option.toLowerCase() as SocialProvider
                    )}
                    onChange={(e) =>
                      updateSocialProvider(
                        e.target.checked,
                        option.toLowerCase() as SocialProvider
                      )
                    }
                    className="custom-switch"
                  />
                </div>
              ))}
            </Stack>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SignUpOptionsCard;
