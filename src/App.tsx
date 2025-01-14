import { AppNavbar } from "@modules/Navbar";
import { AuthConfiguration } from "@pages/AuthConfiguration";
import { Login } from "@pages/Login/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import ComponentsList from "./components/ComponentsList";
import { ForgotPassword } from "./pages/ForgotPassword";
import { OAuth } from "./pages/OAuth/OAuth";
import { Register } from "./pages/Register";
import { ResetPassword } from "./pages/ResetPassword";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
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
              <Route path="/oauth" element={<OAuth />} />
              <Route element={<PrivateRoute />}>
                <Route
                  path="/auth-configuration"
                  element={<AuthConfiguration />}
                />
              </Route>
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
