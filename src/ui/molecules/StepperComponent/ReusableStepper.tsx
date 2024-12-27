import { useStepper } from "headless-stepper";
import "./ReusableStepper.scss";
import { ReusableStepperProps } from "./ReusableStepper.types";

export const ReusableStepper = ({ steps, onSubmit }: ReusableStepperProps) => {
  const { state, nextStep, prevStep, stepsProps, stepperProps } = useStepper({
    steps,
  });

  const progressWidth = `${((state.currentStep + 1) / steps.length) * 100}%`;

  // Check if the current step is the last step
  const isLastStep = state.currentStep === steps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      // Trigger the submit logic if it's the last step
      if (onSubmit) {
        onSubmit();
      }
    } else {
      nextStep();
    }
  };

  return (
    <div className="stepper-container">
      <nav className="stepper-nav" {...stepperProps}>
        <div className="stepper-progress-line"></div>
        <div
          className="stepper-progress-line-active"
          style={{ width: progressWidth }}
        ></div>
        {stepsProps.map((_step, index) => (
          <div
            key={steps[index].label}
            className={`stepper-step ${
              steps[index].disabled ? "step-disabled" : ""
            } ${state.currentStep === index ? "step-active" : ""}`}
          >
            <div className="step-count">{index + 1}</div>
            <div className="step-label">{steps[index].label}</div>
          </div>
        ))}
      </nav>

      <div className="stepper-content">
        {steps[state.currentStep].disabled ? (
          <p className="step-disabled-message">
            This step is currently disabled.
          </p>
        ) : (
          steps[state.currentStep].component
        )}
      </div>

      <div className="stepper-actions">
        <button
          className="stepper-btn"
          onClick={prevStep}
          disabled={!state.hasPreviousStep}
        >
          Prev
        </button>

        <button
          className="stepper-btn"
          onClick={handleNext}
          disabled={steps[state.currentStep + 1]?.disabled}
        >
          {isLastStep ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default ReusableStepper;
