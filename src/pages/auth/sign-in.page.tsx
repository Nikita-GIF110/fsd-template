import type { RouteObject } from "react-router-dom";
import { SignIn, Layout } from "features/auth";

export const SignInRoute: RouteObject = {
  path: "/auth",
  element: <Layout />,
  children: [
    {
      path: "/auth/sign-in",
      element: <SignIn />,
    },
  ],
};
