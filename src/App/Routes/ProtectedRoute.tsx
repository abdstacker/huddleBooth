import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const token = window.localStorage.getItem("token");
  return token ? <Outlet></Outlet> : <Navigate to="/"></Navigate>;
};
