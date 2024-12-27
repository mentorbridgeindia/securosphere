import { SocialLoginIcons } from "./SocialLoginIcons";

interface SocialSignUpProps {
  signupOptions: Record<string, boolean>;
}

const SocialSignUp = ({ signupOptions }: SocialSignUpProps) => {
  return (
    <div className="my-3">
      <div className="d-flex flex-wrap justify-content-center gap-2">
        {Object.entries(signupOptions)
          .filter(
            ([provider, isSelected]) => isSelected && SocialLoginIcons[provider]
          )
          .map(([provider]) => (
            <button key={provider} className="empty-btn social-login">
              {SocialLoginIcons[provider]}
            </button>
          ))}
      </div>
    </div>
  );
};

export default SocialSignUp;
