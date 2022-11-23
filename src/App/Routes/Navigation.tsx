import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { ForgotPassword } from "../Screens/ForgotPassword";
import { LandingPage } from "../Screens/LandingPage";
import { Login } from "../Screens/Login";
import { ResetPassword } from "../Screens/ResetPassword";
import { Signup } from "../Screens/Signup";
import { ProtectedRoute } from "./ProtectedRoute";

export const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login/admin" />} />
        <Route path="/login" element={<Navigate to="/login/admin" />} />
        <Route path="login/:userType" element={<Login />}></Route>
        <Route path="signup/:userType" element={<Signup />}></Route>
        <Route path="/forgotPassword/:userType" element={<ForgotPassword />} />
        <Route path="/resetPassword/:userType" element={<ResetPassword />} />
        <Route path="/404" element={<>Page not found</>} />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/landingPage/:userType/:screen"
            element={<LandingPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
};
