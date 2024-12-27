import React from "react";
import "./RoleLabel.scss";
import { RoleLabelProps } from "./RoleLabel.types";

export function RoleLabel(props: Readonly<RoleLabelProps>) {
  return (
    <span className={`role-label role-label-${props.color}`}>
      <span className="role-label-dot" /> {props.children}
    </span>
  );
}

export default RoleLabel;
