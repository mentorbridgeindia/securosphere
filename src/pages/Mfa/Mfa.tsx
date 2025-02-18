import { MfaForm } from "@/modules/Mfa/MfaForm";
import { Spinner } from "@atoms/Spinner";
import { useMFALogin } from "@entities/MFA";

export const Mfa = () => {
  const { mutate: doMfaLogin, isPending } = useMFALogin();

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
