export interface IFormAction {
  isPrimaryDisabled?: boolean;
  primaryLabel: string;
  secondaryLabel: string;
  onCancel: () => void;
  onSubmit: () => void;
}
