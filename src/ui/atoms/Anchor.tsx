import './atoms.css';  
              
// Anchor is the name of the function
const Anchor = ({ children, href, className, ...rest }: any) => {  // props
  return (
    <a href={href} className={`anchor ${className || ''}`} {...rest}>
      {children}
    </a>
  );
};

export default Anchor;
