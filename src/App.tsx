import "bootstrap/dist/css/bootstrap.min.css";
import { Register } from "./pages/Register";
import "./App.scss";
import ColorPaletteShowcase from "./components/Colors";
import LoginForm from "@components/LoginForm";
import AppNavbar from "@components/Navbar";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Register />
      <LoginForm />
      <ColorPaletteShowcase />
    </div>
  );
}


export default App;
