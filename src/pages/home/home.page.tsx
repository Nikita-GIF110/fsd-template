import type { RouteObject } from "react-router-dom";
import { Home } from "features/home";
import { RouteGuard } from "features/route-guard";

export const HomeRoute: RouteObject = {
  path: "/",
  element: (
    <RouteGuard>
      <Home />
    </RouteGuard>
  ),
};
