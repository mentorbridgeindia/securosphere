import { ReactNode } from "react";

export interface Step {
  component: ReactNode;
  label: string;
  disabled?: boolean;
  isValid?: boolean;
}

export interface StepperProps {
  steps: Step[];
  onSubmit?: () => void;
  isLoading?: boolean; 
}
