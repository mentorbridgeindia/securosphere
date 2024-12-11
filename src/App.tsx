import React, { useState } from "react";
import "./App.css";
import AppNavbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/LoginForm";
import Sentry from "./components/Sentry";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Sentry />
      <LoginForm />
    </div>
  );
}

export default App;
