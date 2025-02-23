import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./SocialLoginBar.scss";

interface SocialLoginBarProps {
  type: string;
  value: number;
  color: string;
}

const SocialLoginBar = ({ type, value, color }: SocialLoginBarProps) => {
  return (
    <div className="social-login-bar mb-3">
      <div className="d-flex justify-content-between align-items-center mb-1">
        <span className="login-type">
          <i className={`bi bi-${type.toLowerCase()}`}></i>
          {type}
        </span>
        <span className="login-value">{value}%</span>
      </div>
      <ProgressBar now={value} variant={color} className="custom-progress" />
    </div>
  );
};

export default SocialLoginBar;
