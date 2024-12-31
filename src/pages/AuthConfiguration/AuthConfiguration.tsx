import { LoginCallbackConfig } from "@modules/LoginCallbackConfig";
import { loginCallbackConfigAtom } from "@modules/LoginCallbackConfig/atoms/loginCallbackConfigAtom";
import { SignUpConfig } from "@modules/SignUpConfig";
import { signUpConfigAtom } from "@modules/SignUpConfig/atoms/signUpConfigAtom";
import { Step, Stepper } from "@molecules/Stepper";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";

export const AuthConfiguration = () => {
  const signUpConfig = useAtomValue(signUpConfigAtom);
  const loginCallbackConfig = useAtomValue(loginCallbackConfigAtom);

  const [steps, setSteps] = useState<Step[]>([
    {
      label: "Sign up Configuration",
      component: <SignUpConfig />,
      isValid: false,
    },
    {
      label: "Login Callback Configuration",
      component: <LoginCallbackConfig />,
      isValid: false,
    },
  ]);

  const validateSignUpConfig =
    signUpConfig &&
    signUpConfig?.appName !== "" &&
    signUpConfig?.socialProviders?.length > 0;

  const validateLoginCallbackConfig =
    loginCallbackConfig &&
    loginCallbackConfig?.orgName !== "" &&
    loginCallbackConfig?.website !== "" &&
    loginCallbackConfig?.callbackUrl !== "" &&
    loginCallbackConfig?.authorizedOrigins?.length > 0 &&
    loginCallbackConfig?.authorizedOrigins.every((origin) => origin !== "");

  useEffect(() => {
    setSteps((prev) => [
      { ...prev[0], isValid: validateSignUpConfig },
      { ...prev[1], isValid: validateLoginCallbackConfig },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signUpConfig, loginCallbackConfig]);

  const onFinalSubmit = () => {
    console.log("Form submitted!", signUpConfig, loginCallbackConfig);
  };

  return <Stepper steps={steps} onSubmit={onFinalSubmit} />;
};
