import emailIcon from "../assets/icons/mail.svg";
import googleIcon from "../assets/icons/google.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import githubIcon from "../assets/icons/github.svg";
import gitlabIcon from "../assets/icons/gitlab.svg";
import microsoftIcon from "../assets/icons/microsoft.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import "./utils.scss";

export const ICONS: Record<string, JSX.Element> = {
  email: <img className="social-icon" src={emailIcon} alt="Email" />,
  google: <img className="social-icon" src={googleIcon} alt="Google" />,
  facebook: <img className="social-icon" src={facebookIcon} alt="Facebook" />,
  github: <img className="social-icon" src={githubIcon} alt="GitHub" />,
  gitlab: <img className="social-icon" src={gitlabIcon} alt="GitLab" />,
  microsoft: (
    <img className="social-icon" src={microsoftIcon} alt="Microsoft" />
  ),
  twitter: <img className="social-icon" src={twitterIcon} alt="Twitter" />,
  linkedin: <img className="social-icon" src={linkedinIcon} alt="LinkedIn" />,
};

export const renderIcon = (icon: JSX.Element) => <div>{icon}</div>;
