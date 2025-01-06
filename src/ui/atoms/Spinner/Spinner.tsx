import { ISpinnerProps } from "./Spinner.types";
import "./Spinner.scss";

export const Spinner = ({ isLoading }: ISpinnerProps) => {
  if (!isLoading) return null;
  return (
    <div className="progress-overlay">
      <div className="progress_bar"></div>
    </div>
  );
};
