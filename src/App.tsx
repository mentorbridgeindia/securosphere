import AppNavbar from "@components/Navbar";
import "./App.scss";
import FinalSetup from "./pages/FinalSetup";
import { ReusableStepper } from "./ui/molecules/StepperComponent";
import SignUpOptions from "./pages/SignUpOptions";

function App() {
  const steps = [
    { label: "Sign-up Options", component: SignUpOptions, disabled: false },
    { label: "Final Setup", component: FinalSetup, disabled: false },
  ];
  const handleSubmit = () => {
    console.log("Form submitted!");
    // You can perform the final actions, such as API calls or validation
    // Example: sendDataToApi();
  };
  return (
    <div className="App">
      <AppNavbar />
      <ReusableStepper steps={steps} onSubmit={handleSubmit} />
      
    </div>
  );
}

export default App;
