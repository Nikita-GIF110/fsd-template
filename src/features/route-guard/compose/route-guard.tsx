import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { TOKEN_NAME } from "shared/config/base";

interface RouteGuardProps {
  children: ReactNode;
}

export const RouteGuard = ({ children }: RouteGuardProps) => {
  const token = window.localStorage.getItem(TOKEN_NAME);

  // if (!token) {
  //   console.log("!isAuthorized && !token");
  //   return <Navigate to="/auth/sign-in" />;
  // }

  return children;
};
