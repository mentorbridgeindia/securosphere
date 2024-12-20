import LoginForm from "@components/LoginForm";
import AppNavbar from "@components/Navbar";
import "./App.scss";
import { Login } from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Login />
      <ToastContainer />
    </div>
  );
}

export default App;
