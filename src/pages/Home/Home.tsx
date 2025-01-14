import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetOrganization } from "@entities/Organization";
import { Spinner } from "../../ui/atoms/Spinner";

export const Home = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetOrganization({
    queryConfig: {
      enabled: sessionStorage.getItem("accessToken") !== null,
    },
  });

  useEffect(() => {
    if (data && data?.organizationName === null) {
      navigate("auth-configuration");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="d-flex align-items-center justify-content-center">
      <Spinner isLoading={isLoading} />
      {/* TODO: Add Dashboard details */}
      {!isLoading && (
        <h2 className="text-center mt-5">
          Welcome to {data?.organizationName} Dashboard
        </h2>
      )}
    </div>
  );
};
