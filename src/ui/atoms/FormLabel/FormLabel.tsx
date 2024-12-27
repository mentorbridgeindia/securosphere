import "./FormLabel.scss";
import { FormLabelProps } from "./FormLable.types";

export const FormLabel = ({ children, className, ...rest }: FormLabelProps) => {
  return (
    <label className={`form-label ${className ?? ""}`} {...rest}>
      {children}
    </label>
  );
};
