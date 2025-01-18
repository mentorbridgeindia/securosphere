/* eslint-disable camelcase */
/**
 *
 * LoginSocialLinkedin
 *
 */
import { useCallback, useEffect } from "react";
import { IOauthProps, objectType } from "../../SocialLogin.types";
import { PASS_CORS_KEY } from "../helper/constants";
import {
  client_id,
  client_secret,
  isOnlyGetCode,
  isOnlyGetToken,
  LINKEDIN_API_URL,
  LINKEDIN_URL,
  PREVENT_CORS_URL,
  response_type,
  scope,
  state,
} from "./constants";

export const useLoginSocialLinkedIn = ({
  redirect_uri,
  onLoginStart,
  onReject,
  onResolve,
}: IOauthProps) => {
  useEffect(() => {
    const popupWindowURL = new URL(window.location.href);
    const code = popupWindowURL.searchParams.get("code");
    const state = popupWindowURL.searchParams.get("state");
    if (state?.includes("_linkedin") && code) {
      localStorage.setItem("linkedin", code);
      window.close();
    }
  }, []);

  const getProfile = useCallback(
    (data: objectType) => {
      fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          LINKEDIN_API_URL +
            "/v2/me?oauth2_access_token=" +
            data.access_token +
            "&projection=(id,profilePicture(displayImage~digitalmediaAsset:playableStreams),localizedLastName, firstName,lastName,localizedFirstName)"
        )}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((res) => {
          const response = { ...data };
          if (res.contents) {
            const contents = JSON.parse(res.contents);
            if (typeof data === "object") {
              Object.entries(contents).forEach(([key, value]) => {
                response[key] = value;
              });
            }
          }

          onResolve({ provider: "linkedin", data: response });
        })
        .catch((err) => {
          onReject(err);
          window.close();
        });
    },
    [onReject, onResolve]
  );

  const getAccessToken = useCallback(
    (code: string) => {
      if (isOnlyGetCode) onResolve({ provider: "linkedin", data: { code } });
      else {
        const params = {
          code,
          grant_type: "authorization_code",
          redirect_uri,
          client_id,
          client_secret,
        };
        const headers = new Headers({
          "Content-Type": "application/x-www-form-urlencoded",
          "x-cors-grida-api-key": PASS_CORS_KEY,
        });

        fetch(`${PREVENT_CORS_URL}/${LINKEDIN_URL}/accessToken`, {
          method: "POST",
          headers,
          body: new URLSearchParams(params as any),
        })
          .then((response) => response.json())
          .then((response) => {
            if (isOnlyGetToken)
              onResolve({ provider: "linkedin", data: response });
            else getProfile(response);
          })
          .catch((err) => {
            onReject(err);
            window.close();
          });
      }
    },
    [onReject, onResolve, getProfile, redirect_uri]
  );

  const handlePostMessage = useCallback(
    async ({ type, code, provider }: objectType) =>
      type === "code" &&
      provider === "linkedin" &&
      code &&
      getAccessToken(code),
    [getAccessToken]
  );

  const onChangeLocalStorage = useCallback(() => {
    window.removeEventListener("storage", onChangeLocalStorage, false);
    const code = localStorage.getItem("linkedin");
    if (code) {
      handlePostMessage({ provider: "linkedin", type: "code", code });
      localStorage.removeItem("linkedin");
    }
  }, [handlePostMessage]);

  const triggerLinkedInLogin = useCallback(() => {
    onLoginStart && onLoginStart();
    window.addEventListener("storage", onChangeLocalStorage, false);
    const oauthUrl = `${LINKEDIN_URL}/authorization?response_type=${response_type}&client_id=${client_id}&scope=${scope}&state=${
      state + "_linkedin"
    }&redirect_uri=${redirect_uri}`;
    const width = 450;
    const height = 730;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    window.open(
      oauthUrl,
      "Linkedin",
      "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
        width +
        ", height=" +
        height +
        ", top=" +
        top +
        ", left=" +
        left
    );
  }, [onLoginStart, onChangeLocalStorage, redirect_uri]);

  return { triggerLinkedInLogin };
};
