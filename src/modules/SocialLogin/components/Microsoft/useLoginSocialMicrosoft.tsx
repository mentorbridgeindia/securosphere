/* eslint-disable camelcase */

import { useCallback, useEffect } from "react";
import { IOauthProps, objectType } from "../../SocialLogin.types";
import {
  client_id,
  code_challenge,
  code_challenge_method,
  isOnlyGetCode,
  isOnlyGetToken,
  MICROSOFT_API_URL,
  MICROSOFT_URL,
  prompt,
  response_mode,
  response_type,
  scope,
  state,
  tenant,
} from "./constants";

export const useLoginSocialMicrosoft = ({
  redirect_uri,
  onLoginStart,
  onReject,
  onResolve,
}: IOauthProps) => {
  useEffect(() => {
    const popupWindowURL = new URL(window.location.href);
    const code = popupWindowURL.searchParams.get("code");
    const state = popupWindowURL.searchParams.get("state");
    if (state?.includes("_microsoft") && code) {
      localStorage.setItem("microsoft", code);
      window.close();
    }
  }, []);

  const getProfile = useCallback(
    (data: objectType) => {
      fetch(`${MICROSOFT_API_URL}/v1.0/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.access_token}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          onResolve({ provider: "microsoft", data: { ...res, ...data } });
        })
        .catch((err) => {
          onReject(err);
        });
    },
    [onReject, onResolve]
  );

  const getAccessToken = useCallback(
    (code: string) => {
      if (isOnlyGetCode) onResolve({ provider: "microsoft", data: { code } });
      else {
        const params = {
          code,
          scope,
          client_id,
          redirect_uri,
          code_verifier: code_challenge,
          grant_type: "authorization_code",
        };
        const headers = new Headers({
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        });
        fetch(`${MICROSOFT_URL}/${tenant}/oauth2/v2.0/token`, {
          method: "POST",
          headers,
          body: new URLSearchParams(params as any),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.access_token) {
              if (isOnlyGetToken) onResolve({ provider: "microsoft", data });
              else getProfile(data);
            } else {
              onReject("no data");
            }
          })
          .catch((err) => {
            onReject(err);
          });
      }
    },
    [onReject, getProfile, onResolve, redirect_uri]
  );

  const handlePostMessage = useCallback(
    async ({ type, code, provider }: objectType) =>
      type === "code" &&
      provider === "microsoft" &&
      code &&
      getAccessToken(code),
    [getAccessToken]
  );

  const onChangeLocalStorage = useCallback(() => {
    window.removeEventListener("storage", onChangeLocalStorage, false);
    const code = localStorage.getItem("microsoft");
    if (code) {
      handlePostMessage({ provider: "microsoft", type: "code", code });
      localStorage.removeItem("microsoft");
    }
  }, [handlePostMessage]);

  const triggerMicrosoftLogin = useCallback(() => {
    onLoginStart && onLoginStart();
    window.addEventListener("storage", onChangeLocalStorage, false);
    const oauthUrl = `${MICROSOFT_URL}/${tenant}/oauth2/v2.0/authorize?client_id=${client_id}
        &response_type=${response_type}
        &redirect_uri=${redirect_uri}
        &response_mode=${response_mode}
        &scope=${scope}
        &state=${state + "_microsoft"}
        &prompt=${prompt}
        &code_challenge=${code_challenge}
        &code_challenge_method=${code_challenge_method}`;
    const width = 450;
    const height = 730;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    window.open(
      oauthUrl,
      "Microsoft",
      "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
        width +
        ", height=" +
        height +
        ", top=" +
        top +
        ", left=" +
        left
    );
  }, [onLoginStart, redirect_uri, onChangeLocalStorage]);

  return { triggerMicrosoftLogin };
};
