import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>
        Please try again later. Go back to <Link to="/">Home</Link>
      </p>
    </div>
  ) ;
};
