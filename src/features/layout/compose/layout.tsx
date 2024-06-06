import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { UserPanel } from "features/layout/ui/user-panel";
import { MenuList } from "features/layout/ui/menu-list";
import { Header } from "features/layout/ui/header";
import { Footer } from "features/layout/ui/footer";
import { PageLoader } from "features/layout/ui/page-loader";
import { LayoutContainer } from "features/layout/ui/layout-container";
import { useAuth } from "entities/auth";
import { useApp } from "entities/app";
import { useTranslate } from "shared/lib/useTranslate";

export const Layout = () => {
  const user = useAuth((state) => state.user);
  const isAuthorized = useAuth((state) => state.isAuthorized);
  const logOut = useAuth((state) => state.logOut);
  const translate = useTranslate();
  const appRady = useApp((state) => state.appRady);

  const navigation = [{ label: translate("Layout.link_home"), to: "/" }];

  return (
    <>
      <LayoutContainer height="100%" display="flex" flexDirection="column">
        <Header
          centerNode={<MenuList list={navigation} marginRight="auto" />}
          rightNode={
            <UserPanel
              user={user}
              isAuthorized={isAuthorized}
              logOut={logOut}
            />
          }
        />

        <Box flexGrow={1} position="relative">
          {appRady ? (
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          ) : (
            <PageLoader />
          )}
        </Box>

        <Footer>footer</Footer>
      </LayoutContainer>
    </>
  );
};
