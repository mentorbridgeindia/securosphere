export interface Step {
  component: React.ElementType;
  label: string; 
  disabled?: boolean; 
}

export interface ReusableStepperProps {
  steps: Step[]; 
}
