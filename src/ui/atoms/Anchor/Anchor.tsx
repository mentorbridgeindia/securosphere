import "./Anchor.scss";

export const Anchor = ({ children, href, className, ...rest }: any) => {
  return (
    <a href={href} className={`anchor ${className || ""}`} {...rest}>
      {children}
    </a>
  );
};
