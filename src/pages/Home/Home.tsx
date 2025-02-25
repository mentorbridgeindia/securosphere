import { Spinner } from "@atoms/Spinner";
import { useGetOrganization } from "@entities/Organization";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

export const Home = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(true);

  const { data, isLoading } = useGetOrganization({
    queryConfig: {
      enabled: !isPending && sessionStorage.getItem("accessToken") !== null,
    },
  });

  useEffect(() => {
    if (data && data?.organizationName === null) {
      navigate("auth-configuration");
    }

    setTimeout(() => {
      setIsPending(false);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="d-flex align-items-center justify-content-center">
      <Spinner isLoading={isLoading || isPending} />
      {/* TODO: Add Dashboard details */}
      {!isLoading && !isPending && <Dashboard />}
    </div>
  );
};
