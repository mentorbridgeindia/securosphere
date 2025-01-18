import { Spinner } from "@atoms/Spinner";
import { useCallback, useEffect, useState } from "react";
import { IResolveParams, ISocialLoginProps } from "./SocialLogin.types";
import { useLoginSocialAmazon } from "./components/Amazon";
import { useLoginSocialApple } from "./components/Apple";
import { useLoginSocialFacebook } from "./components/Facebook";
import { useLoginSocialGithub } from "./components/GitHub";
import { useLoginSocialGoogle } from "./components/Google";
import { useLoginSocialLinkedIn } from "./components/LinkedIn";
import { useLoginSocialMicrosoft } from "./components/Microsoft";
import { useLoginSocialTwitter } from "./components/Twitter";
export const SocialLogin = ({
  onSuccess,
  onError,
  provider,
}: ISocialLoginProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const onLoginStart = useCallback(() => {
    // Posthog analytics
  }, []);

  const params = {
    redirect_uri: process.env.REACT_APP_REDIRECT_URI ?? "",
    onReject: onError,
    onResolve: ({ provider, data }: IResolveParams) => {
      setIsLoading(false);
      if (data) {
        const response = {
          firstName: data.name.split(" ")[0],
          lastName: data.name.split(" ")?.[1] ?? "",
          password: "",
          profilePicture: data.avatar,
          email: data.email,
          socialProvider: provider,
          socialId: data.socialId,
        };

        onSuccess(response);
      }
    },
    onLoginStart: onLoginStart,
  };
  const { triggerGitHubLogin } = useLoginSocialGithub(params);
  const { triggerFacebookLogin } = useLoginSocialFacebook(params);
  const { triggerGoogleLogin } = useLoginSocialGoogle(params);
  const { triggerAppleLogin } = useLoginSocialApple(params);
  const { triggerAmazonLogin } = useLoginSocialAmazon(params);
  const { triggerLinkedInLogin } = useLoginSocialLinkedIn(params);
  const { triggerMicrosoftLogin } = useLoginSocialMicrosoft(params);
  const { triggerTwitterLogin } = useLoginSocialTwitter(params);

  const triggerLogin = useCallback(() => {
    switch (provider) {
      case "github":
        triggerGitHubLogin();
        break;
      case "facebook":
        triggerFacebookLogin();
        break;
      case "google":
        triggerGoogleLogin();
        break;
      case "apple":
        triggerAppleLogin();
        break;
      case "amazon":
        triggerAmazonLogin();
        break;
      case "linkedin":
        triggerLinkedInLogin();
        break;
      case "microsoft":
        triggerMicrosoftLogin();
        break;
      case "twitter":
        triggerTwitterLogin();
        break;
    }
  }, [
    provider,
    triggerGitHubLogin,
    triggerFacebookLogin,
    triggerGoogleLogin,
    triggerAppleLogin,
    triggerAmazonLogin,
    triggerLinkedInLogin,
    triggerMicrosoftLogin,
    triggerTwitterLogin,
  ]);

  useEffect(() => {
    if (provider) {
      triggerLogin();
    }
  }, [provider, triggerLogin]);

  return (
    <div>
      <Spinner isLoading={isLoading} />
    </div>
  );
};
