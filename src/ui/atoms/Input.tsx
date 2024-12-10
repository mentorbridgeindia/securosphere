import './atoms.css';  // Import the CSS file


const Input = ({ className, ...rest }: any) => {
  return <input className={`input ${className || ""}`} {...rest} />;
};

export default Input;
