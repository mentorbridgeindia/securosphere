import { useEffect } from "react";
import { fetchData } from "./api";
import "./App.scss";
import ColorPaletteShowcase from "./components/Colors";
import LoginForm from "@components/LoginForm";
import AppNavbar from "@components/Navbar";
import OrgPage from "./pages/OrgPage";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <LoginForm />
      <ColorPaletteShowcase />
      <OrgPage/>
    </div>
  );
}

export default App;
