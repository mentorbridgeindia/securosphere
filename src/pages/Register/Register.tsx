import { Spinner } from "@atoms/Spinner";
import { useInit } from "@entities/Domain";
import { AuthCard } from "@modules/AuthCard";
import { RegisterForm } from "@modules/RegisterForm";
import { useEffect } from "react";

export const Register = () => {
  const { data, isLoading } = useInit();

  useEffect(() => {
    if (!isLoading && !data) {
      window.location.href = "https://securosphere.in";
    }
    sessionStorage.removeItem("accessToken");
  }, [isLoading, data]);

  if (isLoading) return <Spinner isLoading />;

  return (
    <AuthCard
      imageUrl={
        "https://cdn.vectorstock.com/i/500p/82/47/man-with-login-form-young-guy-enter-vector-54318247.jpg"
      }
    >
      <RegisterForm termsOfServiceUrl={data?.termsOfServiceUrl ?? ""} />
    </AuthCard>
  );
};
