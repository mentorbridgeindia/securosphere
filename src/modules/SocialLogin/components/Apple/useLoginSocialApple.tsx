/* eslint-disable camelcase */

import { useCallback, useEffect, useRef, useState } from "react";
import { IOauthProps, objectType } from "../../SocialLogin.types";
import {
  JS_SRC,
  SCRIPT_ID,
  _window,
  client_id,
  scope,
  state,
} from "./constants";

export const useLoginSocialApple = ({
  onLoginStart,
  onReject,
  onResolve,
  redirect_uri = "/",
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
    (id: string, jsSrc: string, cb: () => void) => {
      const appleScriptTag = document.createElement("script");
      appleScriptTag.id = id;
      appleScriptTag.src = jsSrc;
      appleScriptTag.async = true;
      appleScriptTag.defer = true;
      scriptNodeRef.current = appleScriptTag;
      const scriptNode = document.getElementsByTagName("script")[0];
      scriptNode?.parentNode?.insertBefore(appleScriptTag, scriptNode);
      appleScriptTag.onload = cb;
    },
    []
  );

  const handleResponse = useCallback(
    (res: objectType) => {
      if (res?.access_token) {
        onResolve({
          provider: "apple",
          data: res,
        });
      } else {
        const data: objectType = res;
        onResolve({
          provider: "apple",
          data,
        });
      }
    },
    [onResolve]
  );

  const load = useCallback(() => {
    if (checkIsExistsSDKScript()) {
      setIsSdkLoaded(true);
    } else {
      insertScript(SCRIPT_ID, JS_SRC, () => {
        const options = {
          clientId: client_id, // This is the service ID we created.
          scope, // To tell apple we want the user name and emails fields in the response it sends us.
          redirectURI: redirect_uri, // As registered along with our service ID
          state, // Any string of your choice that you may use for some logic. It's optional and you may omit it.
          usePopup: true, // Important if we want to capture the data apple sends on the client side.
        };
        _window.AppleID.auth.init(options);
        setIsSdkLoaded(true);
      });
    }
  }, [redirect_uri, insertScript, checkIsExistsSDKScript]);

  const triggerAppleLogin = useCallback(async () => {
    if (!isSdkLoaded) return;
    if (!_window.AppleID) {
      load();
      onReject("Apple SDK isn't loaded!");
    } else {
      onLoginStart && onLoginStart();
      try {
        const response = await _window.AppleID.auth.signIn();
        handleResponse(response);
      } catch (err) {
        onReject({ err });
      }
    }
  }, [handleResponse, isSdkLoaded, load, onLoginStart, onReject]);

  return { triggerAppleLogin };
};
