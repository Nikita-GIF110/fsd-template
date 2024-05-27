import type { RouteObject } from "react-router-dom";
import { Profile } from "features/profile";
import { RouteGuard } from "features/route-guard";

export const ProfileRoute: RouteObject = {
  path: "/profile",
  element: (
    <RouteGuard>
      <Profile />
    </RouteGuard>
  ),
};
