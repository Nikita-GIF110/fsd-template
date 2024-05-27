import { createBrowserRouter } from "react-router-dom";
import { Layout } from "features/layout";
import { SignInRoute } from "./auth";
import { HomeRoute } from "./home";
import { ProfileRoute } from "./profile";
import { ErrorRoute } from "./error-page";

export const router = createBrowserRouter([
  SignInRoute,
  {
    element: <Layout />,
    children: [HomeRoute, ProfileRoute, ErrorRoute],
  },
]);
