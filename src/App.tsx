import { AppNavbar } from "@modules/Navbar";
import { AuthConfiguration } from "@pages/AuthConfiguration";
import { ErrorPage } from "@pages/Error";
import { ForgotPassword } from "@pages/ForgotPassword";
import { Home } from "@pages/Home";
import { Login } from "@pages/Login/Login";
import { OAuth } from "@pages/OAuth";
import { Register } from "@pages/Register";
import { ResetPassword } from "@pages/ResetPassword";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import VerifyEmail from "./modules/VerifyEmail";
import Information from "./pages/Information/Information";
import { PrivateRoute } from "./routes/PrivateRoute";
import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      
      <AppNavbar />
      <ToastContainer />
      <Container className="well-container">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/oauth" element={<OAuth />} />
            <Route path="/information" element={<Information />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route element={<PrivateRoute />}>
              <Route
                path="/auth-configuration"
                element={<AuthConfiguration />}
              />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
