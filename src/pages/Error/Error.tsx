import { ReactComponent as IconErrorPage } from "@assets/icons/error-page.svg";
import { Link, useSearchParams } from "react-router-dom";

export const ErrorPage = () => {
  const [searchParams] = useSearchParams();
  const error = searchParams.get("error");
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 gap-4">
      <div>
        <IconErrorPage style={{ width: "150px", height: "150px" }} />
      </div>
      <h2 className="text-center">Something went wrong!</h2>
      {error && <h6 className="text-center text-danger fw-bold">{error}</h6>}
      <p>
        Please try again later. Go back to <Link to="/">Home</Link>
      </p>
    </div>
  );
};
