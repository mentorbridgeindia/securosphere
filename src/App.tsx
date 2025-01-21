import AppNavbar from "@components/Navbar";
import "./App.scss";
import { Login } from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FinalSetup from "./pages/FinalSetup";
import { ReusableStepper } from "./ui/molecules/StepperComponent";
import SignUpOptions from "./pages/SignUpOptions";
import SocialLogin from "./components/SocialLogin";
import ErrorBoundary from "./ErrorBoundary";
import EmailTemplateConfig from "./pages/EmailTemplateConfig";

function App() {
  const steps = [
    { label: "Sign-up Options", component: SignUpOptions, disabled: false },
    { label: "Final Setup", component: FinalSetup, disabled: false },
  ];
  return (
    <div className="App">
      <AppNavbar />
      <EmailTemplateConfig />
      <Login />
      <ToastContainer />
      <ErrorBoundary>
        <SocialLogin />
      </ErrorBoundary>
    </div>
  );
}

export default App;
