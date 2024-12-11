import "./FormInput.scss";

export const FormInput = ({ className, ...rest }: any) => {
  return <input className={`input ${className || ""}`} {...rest} />;
};
