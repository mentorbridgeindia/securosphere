export interface IFormActionButtons {
  isPrimaryDisabled?: boolean;
  primaryLabel: string;
  secondaryLabel: string;
  onCancel: () => void;
  onSubmit: () => void;
}
