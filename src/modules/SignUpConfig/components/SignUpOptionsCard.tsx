import { SocialProvider } from "@/types/auth";
import { FormLabel } from "@atoms/FormLabel";
import {
  SocialProvidersObject,
  useGetOrganization,
} from "@entities/Organization";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { Card, Form, Stack } from "react-bootstrap";
import { signUpConfigAtom } from "../atoms/signUpConfigAtom";
import { SocialLoginIcons } from "./SocialLoginIcons";

const SignUpOptionsCard = () => {
  const [signUpConfig, setSignUpConfig] = useAtom(signUpConfigAtom);

  const { data } = useGetOrganization({
    queryConfig: { enabled: true },
  });

  console.log(data);

  const signUpOptions = [
    "Email",
    "Google",
    "Facebook",
    "Github",
    "Microsoft",
    "Twitter",
    "LinkedIn",
  ];

  useEffect(() => {
    if (data?.socialProviders) {
      const socialProviders = Object.keys(data?.socialProviders).map(
        (provider) => {
          if (data?.socialProviders[provider as keyof SocialProvidersObject]) {
            return provider.toLowerCase() as SocialProvider;
          }
        }
      ) as SocialProvider[];
      setSignUpConfig({
        appName: data?.applicationName,
        socialProviders: socialProviders,
      });
    }
  }, [data]);

  console.log(signUpConfig);

  const updateSocialProvider = (isChecked: boolean, option: SocialProvider) => {
    setSignUpConfig((prevConfig) => ({
      ...prevConfig,
      socialProviders: isChecked
        ? [...prevConfig.socialProviders, option]
        : prevConfig.socialProviders.filter((p) => p !== option),
    }));
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
