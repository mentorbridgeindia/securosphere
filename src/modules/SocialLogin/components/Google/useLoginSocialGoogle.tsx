/* eslint-disable camelcase */

import { useCallback, useEffect, useRef, useState } from "react";
import { IOauthProps, objectType } from "../../SocialLogin.types";
import { PASS_CORS_KEY } from "../helper/constants";
import {
  GOOGLE_OAUTH_URL,
  JS_SRC,
  PREVENT_CORS_URL,
  SCRIPT_ID,
  _window,
  access_type,
  client_id,
  cookie_policy,
  discoveryDocs,
  fetch_basic_profile,
  hosted_domain,
  isOnlyGetToken,
  login_hint,
  prompt,
  scope,
  ux_mode,
} from "./constants";

export const useLoginSocialGoogle = ({
  onLoginStart,
  onReject,
  onResolve,
  redirect_uri = "/",
}: IOauthProps) => {
  const scriptNodeRef = useRef<HTMLScriptElement>(null!);
  const [isSdkLoaded, setIsSdkLoaded] = useState(false);
  const [instance, setInstance] = useState<any>(null!);

  useEffect(() => {
    !isSdkLoaded && load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSdkLoaded]);

  useEffect(
    () => () => {
      if (scriptNodeRef.current) scriptNodeRef.current.remove();
    },
    []
  );

  const checkIsExistsSDKScript = useCallback(() => {
    return !!document.getElementById(SCRIPT_ID);
  }, []);

  const insertScriptGoogle = useCallback(
    (id: string, jsSrc: string, onLoad: () => void) => {
      const ggScriptTag = document.createElement("script");
      ggScriptTag.id = id;
      ggScriptTag.src = jsSrc;
      ggScriptTag.async = true;
      ggScriptTag.defer = true;

      scriptNodeRef.current = ggScriptTag;
      const firstScriptNode = document.getElementsByTagName("script")[0];
      firstScriptNode?.parentNode?.insertBefore(ggScriptTag, firstScriptNode);

      ggScriptTag.onload = onLoad;
    },
    []
  );

  const onGetMe = useCallback((res: objectType) => {
    const headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      "x-cors-grida-api-key": PASS_CORS_KEY,
      Authorization: "Bearer " + res.access_token,
    });

    fetch(`${PREVENT_CORS_URL}/${GOOGLE_OAUTH_URL}`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((response) => {
        const data: objectType = { ...res, ...response };
        onResolve({
          provider: "google",
          data,
        });
      })
      .catch((err) => {
        onReject(err);
      });
  }, []);

  const handleResponse = useCallback(
    (res: objectType) => {
      if (res?.access_token) {
        if (isOnlyGetToken)
          onResolve({
            provider: "google",
            data: res,
          });
        else onGetMe(res);
      } else {
        const data: objectType = res;
        onResolve({
          provider: "google",
          data,
        });
      }
    },
    [onGetMe, onResolve]
  );

  const load = useCallback(() => {
    if (checkIsExistsSDKScript()) {
      setIsSdkLoaded(true);
    } else {
      insertScriptGoogle(SCRIPT_ID, JS_SRC, () => {
        const params = {
          client_id,
          cookie_policy,
          login_hint,
          hosted_domain,
          fetch_basic_profile,
          discoveryDocs,
          ux_mode,
          redirect_uri,
          access_type,
          scope,
          immediate: true,
          prompt,
        };
        const client = _window.google.accounts.oauth2.initTokenClient({
          ...params,
          callback: handleResponse,
        });
        setInstance(client);
        setIsSdkLoaded(true);
      });
    }
  }, [
    redirect_uri,
    handleResponse,
    insertScriptGoogle,
    checkIsExistsSDKScript,
  ]);

  const triggerGoogleLogin = useCallback(() => {
    if (!isSdkLoaded) return;
    if (!_window.google) {
      load();
      onReject("Google SDK isn't loaded!");
    } else {
      onLoginStart && onLoginStart();
      if (instance) instance.requestAccessToken();
    }
  }, [instance, isSdkLoaded, load, onLoginStart, onReject]);

  return { triggerGoogleLogin };
};
