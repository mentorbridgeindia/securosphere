import { LoginCallbackConfig } from "@modules/LoginCallbackConfig";
import { SignUpConfig } from "@modules/SignUpConfig";
import { ReusableStepper } from "@molecules/StepperComponent";

export const AuthConfiguration = () => {
  const onFinalSubmit = () => {
    console.log("Form submitted!");
  };

  const steps = [
    {
      label: "Sign up Configuration",
      component: <SignUpConfig />,
    },
    {
      label: "Login Callback Configuration",
      component: <LoginCallbackConfig />,
    },
  ];

  return <ReusableStepper steps={steps} onSubmit={onFinalSubmit} />;
};
