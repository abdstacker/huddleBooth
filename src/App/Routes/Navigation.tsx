import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Feed } from "../Screens/Feed";
import { ForgotPassword } from "../Screens/ForgotPassword";
import { Login } from "../Screens/Login";
import { ResetPassword } from "../Screens/ResetPassword";
import { Signup } from "../Screens/Signup";
import { ProtectedRoute } from "./ProtectedRoute";

export const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
        <Route path="/resetPassword" element={<ResetPassword />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/feed" element={<Feed></Feed>}></Route>
        </Route>
      </Routes>
    </Router>
  );
};
