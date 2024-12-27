import { ReusableStepper } from "@molecules/StepperComponent";
import FinalSetup from "./FinalSetup";
import SignUpOptions from "./SignUpOptions";

export const AuthConfiguration = () => {
  const steps = [
    { label: "Sign-up Options", component: SignUpOptions, disabled: false },
    { label: "Final Setup", component: FinalSetup, disabled: false },
  ];

  const handleSubmit = () => {
    console.log("Form submitted!");
    // You can perform the final actions, such as API calls or validation
    // Example: sendDataToApi();
  };

  return <ReusableStepper steps={steps} onSubmit={handleSubmit} />;
};
