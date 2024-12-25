import React from "react";
import { Button } from "react-bootstrap";
import { ICONS, renderIcon } from "../utils";

interface SocialSignUpProps {
  signupOptions: Record<string, boolean>;
}

const SocialSignUp = ({ signupOptions }: SocialSignUpProps) => {
  return (
    <div className="my-3">
      <div className="d-flex flex-wrap justify-content-center gap-2">
        {Object.entries(signupOptions)
          .filter(([provider, isSelected]) => isSelected && ICONS[provider])
          .map(([provider]) => (
            <Button
              key={provider}
              variant="outline-secondary"
              className="social-btn d-flex align-items-center justify-content-center"
            >
              {renderIcon(ICONS[provider])}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default SocialSignUp;
