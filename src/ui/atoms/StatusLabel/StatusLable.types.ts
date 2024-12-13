export type LabelType =
  | "primary"
  | "secondary"
  | "warning"
  | "success"
  | "info"
  | "danger";

export interface LabelProps {
  children: React.ReactNode;
  type: LabelType;
}
