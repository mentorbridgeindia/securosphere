import React from "react";
import { useStepper } from "headless-stepper";
import { ReusableStepperProps } from "./ReusableStepper.types";
import "./ReusableStepper.css";

export const ReusableStepper = ({ steps }: ReusableStepperProps) => {
  const { state, nextStep, prevStep, stepsProps, stepperProps } = useStepper({
    steps,
  });

  const progressWidth = `${((state.currentStep + 1) / steps.length) * 100}%`;

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
            key={index}
            className={`stepper-step ${
              steps[index].disabled ? "step-disabled" : ""
            } ${state.currentStep === index ? "step-active" : ""}`}
          >
            <div className="step-count">{index + 1}</div>
            <span className="step-label">{steps[index].label}</span>
          </div>
        ))}
      </nav>

      <div className="stepper-content">
        {steps[state.currentStep].disabled ? (
          <p className="step-disabled-message">
            This step is currently disabled.
          </p>
        ) : (
          React.createElement(steps[state.currentStep].component)
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
          onClick={nextStep}
          disabled={
            !state.hasNextStep || steps[state.currentStep + 1]?.disabled
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ReusableStepper;
