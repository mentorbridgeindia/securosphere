import { LoginCallbackConfig } from "@modules/LoginCallbackConfig";
import { loginCallbackConfigAtom } from "@modules/LoginCallbackConfig/atoms/loginCallbackConfigAtom";
import { SignUpConfig } from "@modules/SignUpConfig";
import { signUpConfigAtom } from "@modules/SignUpConfig/atoms/signUpConfigAtom";
import { Step, Stepper } from "@molecules/Stepper";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { useConfiguration } from "@entities/Configuration";
import { toast } from "react-toastify";

export const AuthConfiguration = () => {
  const signUpConfig = useAtomValue(signUpConfigAtom);
  const loginCallbackConfig = useAtomValue(loginCallbackConfigAtom);

  const { mutate: saveConfig } = useConfiguration({
    onSuccess: () => {
      toast.success("Configuration saved successfully!");
    },
    onError: () => {
      toast.error("Failed to save configuration. Please try again.");
    },
  });

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
    loginCallbackConfig?.termsOfServiceUrl !== "" &&
    loginCallbackConfig?.subDomain !== "" &&
    loginCallbackConfig?.authorizedOrigins?.length > 0 &&
    loginCallbackConfig?.authorizedOrigins.every((origin) => origin !== "");

  useEffect(() => {
    setSteps((prev) => [
      { ...prev[0], isValid: validateSignUpConfig },
      { ...prev[1], isValid: validateLoginCallbackConfig },
    ]);
  }, [signUpConfig, loginCallbackConfig]);

  const onFinalSubmit = () => {
    const configurationData = {
      subDomain: loginCallbackConfig.subDomain,
      authorizedDomains: loginCallbackConfig.authorizedOrigins,
      callbackUrl: loginCallbackConfig.callbackUrl,
      website: loginCallbackConfig.website,
      applicationName: signUpConfig.appName,
      organizationName: loginCallbackConfig.orgName,
      termsOfServiceUrl: loginCallbackConfig.termsOfServiceUrl,
      socialProviders: signUpConfig.socialProviders.reduce((acc, provider) => {
        acc[provider] = true;
        return acc;
      }, {} as Record<string, boolean>),
    };

    saveConfig(configurationData);
  };

  return <Stepper steps={steps} onSubmit={onFinalSubmit} />;
};
