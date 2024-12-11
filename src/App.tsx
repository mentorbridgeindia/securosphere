import { useEffect } from "react";
import { fetchData } from "./api";
import "./App.scss";
import ColorPaletteShowcase from "./components/Colors";
import LoginForm from "@components/LoginForm";
import AppNavbar from "@components/Navbar";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <LoginForm />
      <ColorPaletteShowcase />
    </div>
  );
}

export default App;
