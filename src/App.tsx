import AppNavbar from "@components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Container className="well-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm />} />
          </Routes>
        </BrowserRouter>
      </Container>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
