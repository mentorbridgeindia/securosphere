import { Anchor } from "@atoms/Anchor";
import { Button, Card } from "react-bootstrap";
import SignUpForm from "./SignUpForm";
import SocialSignUp from "./SocialSignUp";

export const SignUpPreview = ({
  appName,
  signupOptions,
}: {
  appName: string;
  signupOptions: Record<string, boolean>;
}) => {
  return (
    <Card className="shadow-sm w-100 px-2">
      <Card.Body className="text-center">
        <h4 className={`fs-4 ${signupOptions.email ? "mb-3" : "mb-5"}`}>
          Sign up to {appName || "Your Application"}
        </h4>
        <SocialSignUp signupOptions={signupOptions} />
        {signupOptions.email && (
          <>
            <SignUpForm />
            <div className="d-flex justify-content-center">
              <Button className="custom-button px-4 mt-3 w-75">Sign Up</Button>
            </div>
          </>
        )}
        <div className={`${signupOptions.email ? "mt-3" : "mt-5"}`}>
          Already have an account? <Anchor href="#">Log In</Anchor>
        </div>
      </Card.Body>
    </Card>
  );
};
