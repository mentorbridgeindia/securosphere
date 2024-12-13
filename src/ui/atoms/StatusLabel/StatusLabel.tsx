import React from "react";
import "./StatusLabel.scss";
import { LabelProps } from "./StatusLable.types";

export function StatusLabel({ type, children }: LabelProps) {
  return (
    <span className={`status-label status-label-${type}`}>{children}</span>
  );
}

export default StatusLabel;
