import './atoms.css';  


const Input = ({ className, ...rest }: any) => {
  return <input className={`input ${className || ""}`} {...rest} />;
};

export default Input;
