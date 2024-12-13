import "./FormInput.scss";
import { FormInputProps } from "./FormInput.types";
export const FormInput = ({ className, ...rest }: FormInputProps) => {
  return <input className={`input ${className || ""}`} {...rest} />;
};
