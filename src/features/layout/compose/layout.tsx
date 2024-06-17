import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import { UserPanel } from "features/layout/ui/user-panel";
import { MenuList } from "features/layout/ui/menu-list";
import { Header } from "features/layout/ui/header";
import { Footer } from "features/layout/ui/footer";
import { PageLoader } from "features/layout/ui/page-loader";
import { LayoutContainer } from "features/layout/ui/layout-container";
// import { useAuth } from "entities/auth";
import { useTranslate } from "shared/lib/useTranslate";

export const Layout = () => {
  // const user = useAuth((state) => state.user);
  // const logOut = useAuth((state) => state.logOut);
  const translate = useTranslate();

  return (
    <>
      <LayoutContainer height="100%" display="flex" flexDirection="column">
        <Header
          centerNode={
            <MenuList
              list={[
                { label: translate("Layout.link_home"), to: "/" },
                { label: "protected", to: "/protected" },
              ]}
              marginRight="auto"
            />
          }
          // rightNode={
          //   <UserPanel
          //     user={user}
          //     isAuthorized={isAuthorized}
          //     logOut={logOut}
          //   />
          // }
        />

        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>

        <Footer>footer</Footer>
      </LayoutContainer>
    </>
  );
};
