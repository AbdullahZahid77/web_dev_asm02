import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "./context/UserContext"; // Adjust the path as necessary

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
  adminOnly?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  redirectTo = "/login",
  adminOnly = false,
}) => {
  const { user, token } = useUser();

  // Redirect to login if not authenticated
  if (!token) {
    return <Navigate to={redirectTo} replace />;
  }

  // Redirect to home if admin access is required but the user is not an admin
  console.log("adminOnly", adminOnly);
  if (adminOnly && !user?.isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
