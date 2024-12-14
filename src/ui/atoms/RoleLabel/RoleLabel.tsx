import React from "react";
import "./RoleLabel.scss";
import { RoleLabelProps } from "./RoleLabel.types";

export function RoleLabel({ type, children }: RoleLabelProps) {
  return (
    <span className={`role-label role-label-${type}`}>
      <span className="role-label-dot" /> {children}
    </span>
  );
}

export default RoleLabel;
