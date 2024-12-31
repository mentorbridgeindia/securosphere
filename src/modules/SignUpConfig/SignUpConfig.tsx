import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { signUpConfigAtom } from "./atoms/signUpConfigAtom";
import SignUpOptionsCard from "./components/SignUpOptionsCard";
import { SignUpPreview } from "./components/SignUpPreview";
import "./SignUpConfig.scss";
import { SocialProvider } from "./SignUpConfig.types";

export const SignUpConfig = () => {
  const [signUpConfig, setSignUpConfig] = useAtom(signUpConfigAtom);
  

  const [appName, setAppName] = useState(signUpConfig?.appName || "");
  const [signupOptions, setSignupOptions] = useState<Record<string, boolean>>({
    email: signUpConfig?.socialProviders?.includes("email") || false,
    google: signUpConfig?.socialProviders?.includes("google") || false,
    facebook: signUpConfig?.socialProviders?.includes("facebook") || false,
    github: signUpConfig?.socialProviders?.includes("github") || false,
    microsoft: signUpConfig?.socialProviders?.includes("microsoft") || false,
    twitter: signUpConfig?.socialProviders?.includes("twitter") || false,
    linkedin: signUpConfig?.socialProviders?.includes("linkedin") || false,
  });

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setSignUpConfig({
      appName,
      socialProviders: Object.keys(signupOptions).filter(
        (key) => signupOptions[key as SocialProvider]
      ) as SocialProvider[],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appName, signupOptions]);

  return (
    <Container fluid className="py-4">
      <Row className="justify-content-center g-4">
        <Col lg={5} xs={12}>
          <SignUpOptionsCard
            appName={appName}
            setAppName={setAppName}
            signupOptions={signupOptions}
            setSignupOptions={setSignupOptions}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        </Col>
        <Col lg={2} className="d-none d-lg-block"></Col>
        <Col
          lg={5}
          xs={12}
          className="d-flex justify-content-center align-items-center"
        >
          <SignUpPreview appName={appName} signupOptions={signupOptions} />
        </Col>
      </Row>
    </Container>
  );
};
