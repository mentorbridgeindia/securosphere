/* eslint-disable camelcase */
import { useCallback, useEffect, useRef, useState } from "react";
import { IOauthProps, objectType } from "../../SocialLogin.types";

import {
  AMAZON_PROFILE_URL,
  JS_SRC,
  SCRIPT_ID,
  _window,
  client_id,
  onlyGetToken,
  response_type,
  scope,
  scope_data,
  state,
} from "./constants";

export const useLoginSocialAmazon = ({
  redirect_uri,
  onReject,
  onResolve,
  onLoginStart,
}: IOauthProps) => {
  const scriptNodeRef = useRef<HTMLScriptElement>(null!);
  const [isSdkLoaded, setIsSdkLoaded] = useState(false);

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

  const insertScript = useCallback(
    (scriptId: string, scriptSrc: string, cb: () => void) => {
      const scriptElement = document.createElement("script");
      scriptElement.id = scriptId;
      scriptElement.src = scriptSrc;
      scriptElement.async = true;
      scriptElement.defer = true;

      const firstScriptNode = document.getElementsByTagName("script")[0];
      scriptNodeRef.current = scriptElement;

      if (firstScriptNode?.parentNode) {
        firstScriptNode.parentNode.insertBefore(scriptElement, firstScriptNode);
      }

      scriptElement.onload = cb;
    },
    []
  );

  const getUserInfo = useCallback(
    async (res: objectType) => {
      fetch(AMAZON_PROFILE_URL, {
        headers: {
          Authorization: `Bearer ${res.access_token}`,
        },
      })
        .then((data) => data.json())
        .then((data) => {
          onResolve({ provider: "amazon", data: { ...data, ...res } });
        })
        .catch((err) => {
          onReject(err);
        })
        .finally(() => {});
    },
    [onReject, onResolve]
  );

  const handleResponse = useCallback(
    (res: objectType) => {
      if (onlyGetToken) onResolve({ provider: "amazon", data: { ...res } });
      else getUserInfo(res);
    },
    [getUserInfo, onResolve]
  );

  const handleError = useCallback(
    (err: objectType | string) => {
      onReject(err);
    },
    [onReject]
  );

  const load = useCallback(() => {
    if (checkIsExistsSDKScript()) {
      setIsSdkLoaded(true);
    } else {
      insertScript(SCRIPT_ID, JS_SRC, () => {
        _window.amazon.Login.setClientId(client_id);
        setIsSdkLoaded(true);
      });
    }
  }, [checkIsExistsSDKScript, insertScript]);

  const triggerAmazonLogin = useCallback(() => {
    if (!isSdkLoaded) return;
    if (!_window.amazon) {
      load();
      onReject("Google SDK isn't loaded!");
    } else {
      onLoginStart && onLoginStart();
      _window.amazon.Login.authorize(
        { scope, scope_data, response_type, redirect_uri, state },
        (res: objectType) => {
          if (res.error) handleError(res.error);
          else handleResponse(res);
        }
      );
    }
  }, [
    load,
    onReject,
    isSdkLoaded,
    handleError,
    onLoginStart,
    redirect_uri,
    handleResponse,
  ]);

  return { triggerAmazonLogin };
};
