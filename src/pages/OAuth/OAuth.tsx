import { Spinner } from "@atoms/Spinner";
import { useSocialLogin } from "@entities/Login";
import { useSocialRegister } from "@entities/Register/useRegister";
import { SocialLogin } from "@modules/SocialLogin";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { SocialProvider } from "./OAuth.types";

declare global {
  interface Window {
    childWindows?: Window[];
  }
}

export const OAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  const { provider, path } = useLocation().state || {};
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const error = searchParams.get("error");

  const { mutate: registerSocialUser } = useSocialRegister({
    onSuccess: () => {
      navigate(path);
    },
    onError: () => {
      navigate(path);
    },
  });

  const { mutate: loginSocialUser } = useSocialLogin({
    onSuccess: () => {
      navigate(path);
    },
    onError: () => {
      navigate(path);
    },
  });

  const onSuccess = (data: any) => {
    console.log("data", data);
    if (path.includes("register")) {
      registerSocialUser(data);
    } else {
      loginSocialUser(data);
    }
    setData(data);
  };

  const onError = (error: unknown) => {
    console.error("An error occurred:", error);
    toast.error("Something went wrong");
    navigate(path);
  };

  if (error) {
    window.close();
  }

  if (!provider) {
    window.history.back();
  }

  useEffect(() => {
    if (data) {
      setIsLoading(true);
    }
  }, [data]);

  return (
    <>
      <Spinner isLoading={isLoading} />
      <SocialLogin
        provider={provider as SocialProvider}
        onSuccess={onSuccess}
        onError={onError}
      />
    </>
  );
};
