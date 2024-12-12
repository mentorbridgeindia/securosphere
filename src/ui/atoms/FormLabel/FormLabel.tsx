import "./FormLabel.scss";

export const FormLabel = ({ children, className, ...rest }: any) => {
  return (
    <label className={`label ${className || ""}`} {...rest}>
      {children}
    </label>
  );
};
