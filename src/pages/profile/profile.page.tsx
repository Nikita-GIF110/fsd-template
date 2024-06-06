import type { RouteObject } from "react-router-dom";
import { RouteGuard } from "features/route-guard";
import Profile from "features/profile";

export const ProfileRoute: RouteObject = {
  path: "/profile",
  element: (
    <RouteGuard>
      <Profile />
    </RouteGuard>
  ),
};
