import { Spinner } from "@atoms/Spinner";
import { useLogin } from "@entities/Login";
import { AuthCard } from "@modules/AuthCard";
import { LoginForm } from "@modules/LoginForm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();
  const { mutate: loginUser, isPending } = useLogin({
    onSuccess: () => {
      toast.success("Login successful! Welcome back!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      navigate("/");
    },
    onError: () => {
      toast.error("Login failed. Please check your credentials.");
    },
  });

  return (
    <AuthCard
      imageUrl={
        "https://cdn.vectorstock.com/i/500p/82/47/man-with-login-form-young-guy-enter-vector-54318247.jpg"
      }
    >
      <Spinner isLoading={isPending} />
      <LoginForm loginUser={loginUser} />
    </AuthCard>
  );
};
