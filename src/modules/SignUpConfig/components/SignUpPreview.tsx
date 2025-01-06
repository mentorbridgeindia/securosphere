import { Anchor } from "@atoms/Anchor";
import { useAtomValue } from "jotai";
import { Button, Card } from "react-bootstrap";
import { signUpConfigAtom } from "../atoms/signUpConfigAtom";
import SignUpForm from "./SignUpForm";
import SocialSignUp from "./SocialSignUp";

export const SignUpPreview = () => {
  const signUpConfig = useAtomValue(signUpConfigAtom);
  const isEmailEnabled = signUpConfig.socialProviders.includes("email");

  return (
    <Card className="shadow-sm w-100 px-2">
      <Card.Body className="text-center">
        <h4 className={`fs-4 ${isEmailEnabled ? "mb-3" : "mb-5"}`}>
          Sign up to {signUpConfig.appName || "Your Application"}
        </h4>
        <SocialSignUp />
        {isEmailEnabled && (
          <>
            <SignUpForm />
            <div className="d-flex justify-content-center">
              <Button className="custom-button px-4 mt-3 w-75">Sign Up</Button>
            </div>
          </>
        )}
        <div className={`${isEmailEnabled ? "mt-3" : "mt-5"}`}>
          Already have an account? <Anchor href="#">Log In</Anchor>
        </div>
      </Card.Body>
    </Card>
  );
};
