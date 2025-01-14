/* eslint-disable camelcase */

import { useCallback, useEffect, useRef, useState } from "react";
import { IOauthProps, objectType } from "../../SocialLogin.types";

import {
  SCRIPT_ID,
  SDK_URL,
  _window,
  appId,
  auth_type,
  cookie,
  fieldsProfile,
  isOnlyGetToken,
  language,
  response_type,
  return_scopes,
  scope,
  state,
  version,
  xfbml,
} from "./constants";

export const useLoginSocialFacebook = ({
  onLoginStart,
  onReject,
  onResolve,
  redirect_uri,
}: IOauthProps) => {
  const scriptNodeRef = useRef<HTMLElement>(null!);
  const [isSdkLoaded, setIsSdkLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

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

  const insertSDKScript = useCallback((cb: () => void) => {
    const fbScriptTag = document.createElement("script");
    fbScriptTag.id = SCRIPT_ID;
    fbScriptTag.src = SDK_URL;
    const scriptNode = document.getElementsByTagName("script")[0];
    scriptNode?.parentNode?.insertBefore(fbScriptTag, scriptNode);
    cb();
  }, []);

  const checkIsExistsSDKScript = useCallback(() => {
    return !!document.getElementById(SCRIPT_ID);
  }, []);

  const initFbSDK = useCallback((config: objectType) => {
    const fbRoot = document.getElementById("fb-root") || createFbRoot();
    const _window = window as any;
    _window.fbAsyncInit = () => {
      _window.FB?.init({ ...config });
      setIsSdkLoaded(true);
    };
    scriptNodeRef.current = fbRoot;
  }, []);

  const createFbRoot = () => {
    const fbRoot = document.createElement("div");
    fbRoot.id = "fb-root";
    document.body.appendChild(fbRoot);
    return fbRoot;
  };

  const getMe = useCallback(
    (authResponse: objectType) => {
      _window.FB.api(
        "/me",
        { locale: language, fields: fieldsProfile },
        (me: any) => {
          onResolve({
            provider: "facebook",
            data: {
              email: me.email,
              name: me.name,
              avatar: me.picture?.data?.url,
              id: me.id,
            },
          });
        }
      );
    },
    [onResolve]
  );

  const handleResponse = useCallback(
    (response: objectType) => {
      if (response.authResponse) {
        if (isOnlyGetToken)
          onResolve({
            provider: "facebook",
            data: { ...response.authResponse },
          });
        else getMe(response.authResponse);
      } else {
        onReject(response);
      }
      setIsProcessing(false);
    },
    [getMe, onReject, onResolve]
  );

  const load = useCallback(() => {
    if (checkIsExistsSDKScript()) {
      setIsSdkLoaded(true);
    } else {
      insertSDKScript(() => {
        initFbSDK({
          appId,
          xfbml,
          version,
          state,
          cookie,
          redirect_uri,
          response_type,
        });
      });
    }
  }, [initFbSDK, redirect_uri, insertSDKScript, checkIsExistsSDKScript]);

  const triggerFacebookLogin = useCallback(() => {
    if (!isSdkLoaded || isProcessing) return;

    if (!_window.FB) {
      load();
      onReject("Fb isn't loaded!");
      setIsProcessing(false);
    } else {
      setIsProcessing(true);
      onLoginStart && onLoginStart();
      _window.FB.login(handleResponse, {
        scope,
        return_scopes,
        auth_type,
      });
    }
  }, [load, onReject, isSdkLoaded, onLoginStart, isProcessing, handleResponse]);

  return {
    triggerFacebookLogin,
  };
};
