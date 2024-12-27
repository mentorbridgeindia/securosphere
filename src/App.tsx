import AppNavbar from "@components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import SocialLogin from "./components/SocialLogin";
import ErrorBoundary from "./ErrorBoundary";
import { Login } from "./pages/Login";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Login />
      <ToastContainer />
      <ErrorBoundary>
        <SocialLogin />
      </ErrorBoundary>
    </div>
  );
}

export default App;
