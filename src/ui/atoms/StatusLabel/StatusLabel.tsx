import "./StatusLabel.scss";
import { LabelProps } from "./StatusLable.types";

export function StatusLabel(props: Readonly<LabelProps>) {
  return (
    <span className={`status-label status-label-${props.type}`}>
      {props.children}
    </span>
  );
}

export default StatusLabel;
