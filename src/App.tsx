import { AppNavbar } from "@modules/Navbar";
import { AuthConfiguration } from "@pages/AuthConfiguration";
import { Login } from "@pages/Login/Login";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import ComponentsList from "./components/ComponentsList";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Register } from "./pages/Register";
import { ResetPassword } from "./pages/ResetPassword";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
<<<<<<< HEAD

function App() {
  
=======
import { ToastContainer } from "react-toastify";

function App() {
>>>>>>> 7a55698ae10e77038761100de53638b88c0666d9
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <AppNavbar />
      <ToastContainer />
      <Container className="well-container">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ComponentsList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route
                path="/auth-configuration"
                element={<AuthConfiguration />}
              />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </Container>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
