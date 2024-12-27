import { AppNavbar } from "@modules/Navbar";
import { AuthConfiguration } from "@pages/AuthConfiguration";
import { Login } from "@pages/Login/Login";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import ComponentsList from "./components/ComponentsList";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Container className="well-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ComponentsList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/auth-configuration" element={<AuthConfiguration />} />
          </Routes>
        </BrowserRouter>
      </Container>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
