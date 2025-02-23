import { ReactComponent as IconApple } from "@assets/icons/apple.svg";
import { ReactComponent as IconFacebook } from "@assets/icons/facebook.svg";
import { ReactComponent as IconGithub } from "@assets/icons/github.svg";
import {
  ReactComponent as IconGoogle,
  ReactComponent as IconInstagram,
} from "@assets/icons/google.svg";
import { ReactComponent as IconLinkedin } from "@assets/icons/linkedin.svg";
import {
  ReactComponent as IconAmazon,
  ReactComponent as IconMicrosoft,
} from "@assets/icons/microsoft.svg";
import { ReactComponent as IconTwitter } from "@assets/icons/twitter.svg";

import { SocialProvider } from "../../pages/OAuth/OAuth.types";
import { ISocialLoginButtonsProps } from "./SocialLogin.types";
export const SocialLoginButtons = ({
  isGoogleAvailable,
  isAppleAvailable,
  isAmazonAvailable,
  isFacebookAvailable,
  isMicrosoftAvailable,
  isInstagramAvailable,
  isLinkedinAvailable,
  isGithubAvailable,
  isTwitterAvailable,
}: ISocialLoginButtonsProps) => {
  const handleClick = (provider: string) => {
    const providerMap = {
      facebook: isFacebookAvailable,
      google: isGoogleAvailable,
      apple: isAppleAvailable,
      amazon: isAmazonAvailable,
      instagram: isInstagramAvailable,
      microsoft: isMicrosoftAvailable,
      linkedin: isLinkedinAvailable,
      github: isGithubAvailable,
      twitter: isTwitterAvailable,
    };

    if (providerMap[provider as SocialProvider]) {
      const { hostname } = window.location;
      const isLocalHost = hostname.includes("localhost");

      const baseURL = isLocalHost
        ? "http://localhost:8080"
        : "https://api.securosphere.in";
      window.location.href = `${baseURL}/oauth2/authorization/${provider}`;
    }
  };

  const providers = [
    {
      available: isFacebookAvailable,
      provider: "facebook",
      Icon: IconFacebook,
    },
    { available: isGoogleAvailable, provider: "google", Icon: IconGoogle },
    { available: isAppleAvailable, provider: "apple", Icon: IconApple },
    { available: isAmazonAvailable, provider: "amazon", Icon: IconAmazon },
    {
      available: isInstagramAvailable,
      provider: "instagram",
      Icon: IconInstagram,
    },
    {
      available: isMicrosoftAvailable,
      provider: "microsoft",
      Icon: IconMicrosoft,
    },
    {
      available: isLinkedinAvailable,
      provider: "linkedin",
      Icon: IconLinkedin,
    },
    { available: isGithubAvailable, provider: "github", Icon: IconGithub },
    { available: isTwitterAvailable, provider: "twitter", Icon: IconTwitter },
  ];

  return (
    <div className="social-login d-flex justify-content-center gap-5">
      {providers.map(({ available, provider, Icon }) =>
        available ? (
          <button
            key={provider}
            className="btn-bg"
            onClick={() => handleClick(provider)}
          >
            <Icon />
          </button>
        ) : null
      )}
    </div>
  );
};
