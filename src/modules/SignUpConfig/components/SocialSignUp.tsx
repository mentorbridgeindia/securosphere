import { useAtomValue } from "jotai";
import { signUpConfigAtom } from "../atoms/signUpConfigAtom";
import { SocialLoginIcons } from "./SocialLoginIcons";

const SocialSignUp = () => {
  const signUpConfig = useAtomValue(signUpConfigAtom);
  return (
    <div className="my-3">
      <div className="d-flex flex-wrap justify-content-center gap-2">
        {signUpConfig.socialProviders.map((provider) => (
          <button
            key={provider}
            className="empty-btn social-login"
            style={{ pointerEvents: "none" }}
          >
            {SocialLoginIcons[provider]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialSignUp;
