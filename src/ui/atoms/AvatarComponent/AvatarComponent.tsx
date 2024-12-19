import * as Avatar from "@radix-ui/react-avatar";
import { AvatarProps } from "./AvatarComponent.types";
import "./AvatarComponent.scss";

export const AvatarComponent = ({
  alt,
  fallbackText,
  src,
  onClick,
}: AvatarProps) => (
  <div>
    <Avatar.Root className="AvatarRoot">
      <div onClick={onClick}>
        {src ? (
          <Avatar.Image alt={alt} className="AvatarImage" src={src} />
        ) : (
          <Avatar.Fallback className="AvatarFallback" delayMs={600}>
            {fallbackText}
          </Avatar.Fallback>
        )}
      </div>
    </Avatar.Root>
  </div>
);

export default AvatarComponent;
