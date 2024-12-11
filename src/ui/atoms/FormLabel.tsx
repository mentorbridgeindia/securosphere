import "./FormLabel.css";

const FormLabel = ({ children, className, ...rest }: any) => {
  return (
    <label className={`label ${className || ""}`} {...rest}>
      {children}
    </label>
  );
};

export default FormLabel;
