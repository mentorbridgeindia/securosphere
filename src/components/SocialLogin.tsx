import React, { useCallback, useState } from "react";
import { User } from "./User";
import {
  LoginSocialGoogle,
  LoginSocialAmazon,
  LoginSocialFacebook,
  LoginSocialGithub,
  LoginSocialInstagram,
  LoginSocialLinkedin,
  LoginSocialMicrosoft,
  LoginSocialTwitter,
  LoginSocialApple,
  IResolveParams,
} from "reactjs-social-login";

import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  AmazonLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  TwitterLoginButton,
  AppleLoginButton,
} from "react-social-login-buttons";

import { REDIRECT_URI, SOCIAL_LOGIN_IDS } from "../constants/constants"; // Import constants

const SocialLogin = () => {
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
      <div className={`App ${provider && profile ? "hide" : ""}`}>
        <h1 className="title">ReactJS Social Login</h1>
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
          <FacebookLoginButton />
        </LoginSocialFacebook>

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
          <GoogleLoginButton />
        </LoginSocialGoogle>

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
          <AppleLoginButton />
        </LoginSocialApple>

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
          <AmazonLoginButton />
        </LoginSocialAmazon>

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
          <InstagramLoginButton />
        </LoginSocialInstagram>

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
          <MicrosoftLoginButton />
        </LoginSocialMicrosoft>

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
          <LinkedInLoginButton />
        </LoginSocialLinkedin>

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
          <GithubLoginButton />
        </LoginSocialGithub>

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
          <TwitterLoginButton />
        </LoginSocialTwitter>
      </div>
    </>
  );
};

export default SocialLogin;
