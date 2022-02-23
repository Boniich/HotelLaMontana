import { Navigate, Outlet, useLocation } from "react-router-dom";

const IsLogged = () => {
  const location = useLocation();

  return localStorage.getItem("token") ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default IsLogged;
