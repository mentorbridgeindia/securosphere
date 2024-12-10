import './atoms.css';  

const Label = ({ children, className, ...rest }: any) => {
  return (
    <label className={`label ${className || ""}`} {...rest}>
      {children}
    </label>
  );
};

export default Label;
