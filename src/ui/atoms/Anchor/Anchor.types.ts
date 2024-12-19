import { PropsWithChildren } from "react";
export interface AnchorProps extends PropsWithChildren {
  className?: string;
  href: string;
}
