import { MfaForm } from "@/modules/Mfa/MfaForm";
import { Spinner } from "@atoms/Spinner";
import { useMFALogin } from "@entities/MFA";
import { useNavigate } from "react-router-dom";

export const Mfa = () => {
  const navigate = useNavigate();
  const { mutate: doMfaLogin, isPending } = useMFALogin({
    onSuccess: () => {
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if (isPending) return <Spinner isLoading />;

  const handleSubmit = (code: string) => {
    const email = sessionStorage.getItem("email");
    if (email) {
      doMfaLogin({
        email,
        code,
      });
    }
  };

  return <MfaForm onSubmit={handleSubmit} />;
};
