import AppNavbar from "@components/Navbar";
import "./App.scss";
import SignInOptions from "./pages/SignInOptions";
import FinalSetup from "./pages/FinalSetup";
import { ReusableStepper } from "./ui/molecules/StepperComponent";

function App() {
  const steps = [
    { label: "Sign-In Options", component: SignInOptions, disabled: false },
    { label: "Final Setup", component: FinalSetup, disabled: false },
  ];
  return (
    <div className="App">
      <AppNavbar />
      {/* <LoginForm /> */}
      <ReusableStepper steps={steps} />
    </div>
  );
}

export default App;
