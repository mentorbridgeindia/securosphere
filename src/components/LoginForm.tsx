// LoginForm.tsx for example to use atomics
import Anchor from "../ui/atoms/Anchor";
import Input from "../ui/atoms/Input";
import Label from "../ui/atoms/Label";

const LoginForm = () => {
  return (
    <form className="d-flex flex-column">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />

      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="Enter your password" />

      <Anchor href="/forgot-password">Forgot Password?</Anchor>
    </form>
  );
};

export default LoginForm;
