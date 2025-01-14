/* eslint-disable camelcase */

import { useCallback, useEffect } from "react";
import { IOauthProps, objectType } from "../../SocialLogin.types";
import { PASS_CORS_KEY } from "../helper/constants";
import {
  allow_signup,
  CLIENT_ID,
  CLIENT_SECRET,
  GITHUB_API_URL,
  GITHUB_URL,
  isOnlyGetCode,
  isOnlyGetToken,
  PREVENT_CORS_URL,
  scope,
  state,
} from "./constants";

export const useLoginSocialGithub = ({
  redirect_uri,
  onReject,
  onResolve,
  onLoginStart,
}: IOauthProps) => {
  useEffect(() => {
    const popupWindowURL = new URL(window.location.href);
    const code = popupWindowURL.searchParams.get("code");
    const state = popupWindowURL.searchParams.get("state");
    if (state?.includes("_github") && code) {
      localStorage.setItem("github", code);
      window.close();
    }
  }, []);

  const getProfile = useCallback(
    (data: objectType) => {
      fetch(`${PREVENT_CORS_URL}/${GITHUB_API_URL}/user`, {
        method: "GET",
        headers: {
          Authorization: `token ${data.access_token}`,
          "x-cors-grida-api-key": PASS_CORS_KEY,
        },
      })
        .then((res) => res.json())
        .then((response: any) => {
          onResolve({
            provider: "github",
            data: {
              email: response.email,
              avatar: response.avatar_url,
              socialId: response.id,
              name: response.name,
            },
          });
        })
        .catch((err) => {
          onReject(err);
        });
    },
    [onReject, onResolve]
  );

  const getAccessToken = useCallback(
    (code: string) => {
      if (isOnlyGetCode) {
        return onResolve({ provider: "github", data: { code } });
      }

      const params = new URLSearchParams({
        code,
        state,
        redirect_uri,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      } as any);

      const headers = new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
        "x-cors-grida-api-key": PASS_CORS_KEY,
      });

      fetch(`${PREVENT_CORS_URL}/${GITHUB_URL}/login/oauth/access_token`, {
        method: "POST",
        headers,
        body: params,
      })
        .then((response) => response.text())
        .then((response) => {
          const data: objectType = Object.fromEntries(
            new URLSearchParams(response)
          );
          if (data.access_token) {
            isOnlyGetToken
              ? onResolve({ provider: "github", data })
              : getProfile(data);
          } else {
            onReject("no data");
          }
        })
        .catch(onReject);
    },
    [onReject, getProfile, onResolve, redirect_uri]
  );

  const handlePostMessage = useCallback(
    async ({ type, code, provider }: objectType) =>
      type === "code" && provider === "github" && code && getAccessToken(code),
    [getAccessToken]
  );

  const onChangeLocalStorage = useCallback(() => {
    window.removeEventListener("storage", onChangeLocalStorage, false);
    const code = localStorage.getItem("github");
    if (code) {
      handlePostMessage({ provider: "github", type: "code", code });
      localStorage.removeItem("github");
    }
  }, [handlePostMessage]);

  const triggerGitHubLogin = useCallback(() => {
    onLoginStart?.();
    window.addEventListener("storage", onChangeLocalStorage);

    const oauthUrl = new URL(`${GITHUB_URL}/login/oauth/authorize`);
    oauthUrl.searchParams.append("client_id", CLIENT_ID ?? "");
    oauthUrl.searchParams.append("scope", scope);
    oauthUrl.searchParams.append("state", `${state}_github`);
    oauthUrl.searchParams.append("redirect_uri", redirect_uri);
    oauthUrl.searchParams.append("allow_signup", String(allow_signup));

    const width = 450;
    const height = 730;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;

    window.open(
      oauthUrl.toString(),
      "Github",
      `menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=${width},height=${height},top=${top},left=${left}`
    );
  }, [redirect_uri, onLoginStart, onChangeLocalStorage]);

  return { triggerGitHubLogin };
};
