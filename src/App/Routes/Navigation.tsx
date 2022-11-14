import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Feed } from "../Screens/Feed";
import { Login } from "../Screens/Login";
import { Signup } from "../Screens/Signup";
import { ProtectedRoute } from "./ProtectedRoute";

export const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/feed" element={<Feed></Feed>}></Route>
        </Route>
      </Routes>
    </Router>
  );
};
