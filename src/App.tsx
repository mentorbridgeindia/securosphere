import AppNavbar from "@components/Navbar";
import "./App.scss";
import FinalSetup from "./pages/FinalSetup";
import { ReusableStepper } from "./ui/molecules/StepperComponent";
import SignUpOptions from "./pages/SignUpOptions";
import SocialLogin from "./components/SocialLogin";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const steps = [
    { label: "Sign-up Options", component: SignUpOptions, disabled: false },
    { label: "Final Setup", component: FinalSetup, disabled: false },
  ];
  return (
    <div className="App">
      <ErrorBoundary>
        <AppNavbar />
        <SocialLogin />
      </ErrorBoundary>
    </div>
  );
}

export default App;
