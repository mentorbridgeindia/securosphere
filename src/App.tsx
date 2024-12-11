import React from "react";
import "./App.css";
import AppNavbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/LoginForm";
import Sentry from "./components/Sentry";
import ColorPaletteShowcase from "./components/Colors";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      {/* <Sentry /> */}
      <LoginForm />
      <ColorPaletteShowcase />
    </div>
  );
}

export default App;
