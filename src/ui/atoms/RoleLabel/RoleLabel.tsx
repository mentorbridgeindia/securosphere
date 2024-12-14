import React from "react";
import "./RoleLabel.scss";
import { RoleLabelProps } from "./RoleLabel.types";

export function RoleLabel({ color, children }: RoleLabelProps) {
  return (
    <span className={`role-label role-label-${color}`}>
      <span className="role-label-dot" /> {children}
    </span>
  );
}

export default RoleLabel;
