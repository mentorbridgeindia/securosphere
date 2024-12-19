import { PropsWithChildren } from "react";
export type LabelType =
  | "primary"
  | "secondary"
  | "warning"
  | "success"
  | "info"
  | "danger";

export interface LabelProps extends PropsWithChildren {
  children: React.ReactNode;
  type: LabelType;
}
