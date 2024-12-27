import { ReactNode } from "react";

export interface Step {
  component: ReactNode;
  label: string;
  disabled?: boolean;
}

export interface ReusableStepperProps {
  steps: Step[];
  onSubmit?: () => void;
}
