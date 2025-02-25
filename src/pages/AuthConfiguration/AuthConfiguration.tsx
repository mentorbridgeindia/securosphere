import { useConfiguration } from "@entities/Configuration";
import { LoginCallbackConfig } from "@modules/LoginCallbackConfig";
import { loginCallbackConfigAtom } from "@modules/LoginCallbackConfig/atoms/loginCallbackConfigAtom";
import { SignUpConfig } from "@modules/SignUpConfig";
import { signUpConfigAtom } from "@modules/SignUpConfig/atoms/signUpConfigAtom";
import { Step, Stepper } from "@molecules/Stepper";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthConfiguration = () => {
  const navigate = useNavigate();
  const signUpConfig = useAtomValue(signUpConfigAtom);
  const loginCallbackConfig = useAtomValue(loginCallbackConfigAtom);

  const { mutate: saveConfig } = useConfiguration({
    onSuccess: () => {
      toast.success("Configuration saved successfully!");
      navigate("/information");
    },
    onError: () => {
      toast.error("Failed to save configuration. Please try again.");
    },
  });

  const [steps, setSteps] = useState<Step[]>([
    {
      label: "Login Callback Configuration",
      component: <LoginCallbackConfig />,
      isValid: false,
    },
    {
      label: "Sign up Configuration",
      component: <SignUpConfig />,
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
    loginCallbackConfig?.authorizedOrigins.every((origin) => origin !== "");

  useEffect(() => {
    setSteps((prev) => [
      { ...prev[0], isValid: validateLoginCallbackConfig },
      { ...prev[1], isValid: validateSignUpConfig },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signUpConfig, loginCallbackConfig]);

  const onFinalSubmit = () => {
    const configurationData = {
      subDomain: loginCallbackConfig.subDomain,
      callbackUrl: loginCallbackConfig.callbackUrl,
      website: loginCallbackConfig.website,
      logo: loginCallbackConfig.orgLogo,
      applicationName: signUpConfig.appName,
      organizationName: loginCallbackConfig.orgName,
      termsOfServiceUrl: loginCallbackConfig.termsOfServiceUrl,
      socialProviders: signUpConfig.socialProviders.reduce((acc, provider) => {
        acc[provider] = true;
        return acc;
      }, {} as Record<string, boolean>),
    };
    console.log(configurationData);
    saveConfig(configurationData);
  };

  return <Stepper steps={steps} onSubmit={onFinalSubmit} />;
};
