import { AppNavbar } from "@modules/Navbar";
import VerifyEmail from "@modules/VerifyEmail";
import { AuthConfiguration } from "@pages/AuthConfiguration";
import { ChangePassword } from "@pages/ChangePassword/ChangePassword";
import Dashboard from "@pages/Dashboard/Dashboard";
import { ErrorPage } from "@pages/Error";
import { ForgotPassword } from "@pages/ForgotPassword";
import { Home } from "@pages/Home";
import { Information } from "@pages/Information";
import { Login } from "@pages/Login/Login";
import { Mfa } from "@pages/Mfa";
import { OAuth } from "@pages/OAuth";
import { Profile } from "@pages/Profile";
import { Register } from "@pages/Register";
import { ResetPassword } from "@pages/ResetPassword";
import { Settings } from "@pages/Settings";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import { PrivateRoute } from "./routes/PrivateRoute";
import Swagger from "./pages/Swagger";

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
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/oauth" element={<OAuth />} />
            <Route path="/swagger" element={<Swagger />}/>
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mfa" element={<Mfa />} />
            <Route element={<PrivateRoute />}>
              <Route
                path="/auth-configuration"
                element={<AuthConfiguration />}
              />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/information" element={<Information />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/settings" element={<Settings />} />
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
