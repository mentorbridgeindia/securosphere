import "./FormInput.css";

const FormInput = ({ className, ...rest }: any) => {
  return <input className={`input ${className || ""}`} {...rest} />;
};

export default FormInput;
