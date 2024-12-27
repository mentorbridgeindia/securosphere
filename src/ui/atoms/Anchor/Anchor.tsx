import { AnchorProps } from "./Anchor.types";

export const Anchor = ({ children, href, className, ...rest }: AnchorProps) => {
  return (
    <a href={href} className={`anchor ${className || ""}`} {...rest}>
      {children}
    </a>
  );
};
