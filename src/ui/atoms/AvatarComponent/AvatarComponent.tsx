import * as Avatar from "@radix-ui/react-avatar";
import "./AvatarComponent.scss";
import { AvatarProps } from "./AvatarComponent.types";

export const AvatarComponent = ({ alt, fallbackText, src }: AvatarProps) => (
  <div>
    <Avatar.Root className="AvatarRoot">
      <div>
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
