import { useCallback, useState } from "react";
import {
  IResolveParams,
  LoginSocialAmazon,
  LoginSocialApple,
  LoginSocialFacebook,
  LoginSocialGithub,
  LoginSocialGoogle,
  LoginSocialInstagram,
  LoginSocialLinkedin,
  LoginSocialMicrosoft,
  LoginSocialTwitter,
} from "reactjs-social-login";
import { User } from "../../components/User";

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

import { ISocialLoginProps } from "./SocialLogin.types";
import { REDIRECT_URI, SOCIAL_LOGIN_IDS } from "./social-constants";
export const SocialLogin = ({
  isGoogleAvailable,
  isAppleAvailable,
  isAmazonAvailable,
  isFacebookAvailable,
  isMicrosoftAvailable,
  isInstagramAvailable,
  isLinkedinAvailable,
  isGithubAvailable,
  isTwitterAvailable,
}: ISocialLoginProps) => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState<any>();

  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);

  const onLogout = useCallback(() => {}, []);

  return (
    <>
      {provider && profile && (
        <User provider={provider} profile={profile} onLogout={onLogout} />
      )}
      <div
        className={`social-login d-flex justify-content-center gap-5 ${
          provider && profile ? "hide" : ""
        }`}
      >
        {isFacebookAvailable && (
          <LoginSocialFacebook
            appId={SOCIAL_LOGIN_IDS.FACEBOOK_APP_ID || ""}
            fieldsProfile={
              "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
            }
            onLoginStart={onLoginStart}
            onLogoutSuccess={onLogoutSuccess}
            redirect_uri={REDIRECT_URI}
            onResolve={({ provider, data }: IResolveParams) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <IconFacebook />
          </LoginSocialFacebook>
        )}

        {isGoogleAvailable && (
          <LoginSocialGoogle
            client_id={SOCIAL_LOGIN_IDS.GOOGLE_CLIENT_ID || ""}
            onLoginStart={onLoginStart}
            redirect_uri={REDIRECT_URI}
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={({ provider, data }: IResolveParams) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <IconGoogle />
          </LoginSocialGoogle>
        )}

        {isAppleAvailable && (
          <LoginSocialApple
            client_id={SOCIAL_LOGIN_IDS.APPLE_CLIENT_ID || ""}
            scope={"name email"}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }: IResolveParams) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <IconApple />
          </LoginSocialApple>
        )}

        {isAmazonAvailable && (
          <LoginSocialAmazon
            client_id={SOCIAL_LOGIN_IDS.AMAZON_CLIENT_ID || ""}
            redirect_uri={REDIRECT_URI}
            onResolve={({ provider, data }: IResolveParams) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err: any) => {
              console.log(err);
            }}
            onLoginStart={onLoginStart}
          >
            <IconAmazon />
          </LoginSocialAmazon>
        )}

        {isInstagramAvailable && (
          <LoginSocialInstagram
            client_id={SOCIAL_LOGIN_IDS.INSTAGRAM_APP_ID || ""}
            client_secret={SOCIAL_LOGIN_IDS.INSTAGRAM_APP_SECRET || ""}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onLogoutSuccess={onLogoutSuccess}
            onResolve={({ provider, data }: IResolveParams) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err: any) => {
              console.log(err);
            }}
          >
            <IconInstagram />
          </LoginSocialInstagram>
        )}

        {isMicrosoftAvailable && (
          <LoginSocialMicrosoft
            client_id={SOCIAL_LOGIN_IDS.MICROSOFT_APP_ID || ""}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }: IResolveParams) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err: any) => {
              console.log(err);
            }}
          >
            <IconMicrosoft />
          </LoginSocialMicrosoft>
        )}

        {isLinkedinAvailable && (
          <LoginSocialLinkedin
            client_id={SOCIAL_LOGIN_IDS.LINKEDIN_APP_ID || ""}
            client_secret={SOCIAL_LOGIN_IDS.LINKEDIN_APP_SECRET || ""}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }: IResolveParams) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err: any) => {
              console.log(err);
            }}
          >
            <IconLinkedin />
          </LoginSocialLinkedin>
        )}

        {isGithubAvailable && (
          <LoginSocialGithub
            client_id={SOCIAL_LOGIN_IDS.GITHUB_APP_ID || ""}
            client_secret={SOCIAL_LOGIN_IDS.GITHUB_APP_SECRET || ""}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onLogoutSuccess={onLogoutSuccess}
            onResolve={({ provider, data }: IResolveParams) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err: any) => {
              console.log(err);
            }}
          >
            <IconGithub />
          </LoginSocialGithub>
        )}

        {isTwitterAvailable && (
          <LoginSocialTwitter
            client_id={SOCIAL_LOGIN_IDS.TWITTER_V2_APP_KEY || ""}
            // client_secret={SOCIAL_LOGIN_IDS.TWITTER_V2_APP_SECRET || ''}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onLogoutSuccess={onLogoutSuccess}
            onResolve={({ provider, data }: IResolveParams) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err: any) => {
              console.log(err);
            }}
          >
            <IconTwitter />
          </LoginSocialTwitter>
        )}
      </div>
    </>
  );
};
