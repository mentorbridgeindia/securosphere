import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';  // Import toast styles
// import ColorPaletteShowcase from "./components/Colors";
// import LoginForm from "@components/LoginForm";
import AppNavbar from "@components/Navbar";
import Register from "@pages/Register";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      {/* <Register /> */}
      <Register />
      {/* <LoginForm /> */}
      
      {/* Add ToastContainer to show toasts */}
      <ToastContainer />
    </div>
  );
}

export default App;
