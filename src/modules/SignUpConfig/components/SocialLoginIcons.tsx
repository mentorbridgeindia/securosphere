import { ReactComponent as IconFacebook } from "@assets/icons/facebook.svg";
import { ReactComponent as IconGithub } from "@assets/icons/github.svg";
import { ReactComponent as IconGitlab } from "@assets/icons/gitlab.svg";
import { ReactComponent as IconGoogle } from "@assets/icons/google.svg";
import { ReactComponent as IconLinkedin } from "@assets/icons/linkedin.svg";
import { ReactComponent as IconMicrosoft } from "@assets/icons/microsoft.svg";
import { ReactComponent as IconTwitter } from "@assets/icons/twitter.svg";

export const SocialLoginIcons: Record<string, JSX.Element> = {
  google: <IconGoogle />,
  facebook: <IconFacebook />,
  github: <IconGithub />,
  gitlab: <IconGitlab />,
  microsoft: <IconMicrosoft />,
  twitter: <IconTwitter />,
  linkedin: <IconLinkedin />,
};
