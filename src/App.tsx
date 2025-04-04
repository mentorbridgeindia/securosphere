import { AppNavbar } from "@modules/Navbar";
import VerifyEmail from "@modules/VerifyEmail";
import { AuthConfiguration } from "@pages/AuthConfiguration";
import { ChangePassword } from "@pages/ChangePassword/ChangePassword";
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
import { TeamManagement } from "@pages/TeamManagement/TeamManagement";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import { PrivateRoute } from "./routes/PrivateRoute";

import PrivacyPolicy from "@pages/PrivacyPolicy/PrivacyPolicy";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import TermsAndContiditions from "./pages/TermsAndContiditions/TermsAndContiditions";
import Roles from "./pages/Roles/Roles";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ToastContainer />
      <Container className="well-container">
        <QueryClientProvider client={queryClient}>
          <GoogleReCaptchaProvider reCaptchaKey="6LcGntkqAAAAAIBxjVl7MxCIirQlvERk3Y1IQf6q">
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/oauth" element={<OAuth />} />
                <Route path="/team-management" element={<TeamManagement />} />
                <Route path="/roles" element={<Roles/>}/>
                <Route path="/verify-email" element={<VerifyEmail />} />
                <Route path="/mfa" element={<Mfa />} />
                <Route path="/terms" element={<TermsAndContiditions />} />
                <Route path="/policy" element={<PrivacyPolicy />} />
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
          </GoogleReCaptchaProvider>
        </QueryClientProvider>
      </Container>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
