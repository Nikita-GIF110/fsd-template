import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { UserPanel } from "features/layout/ui/user-panel";
import { MenuList } from "features/layout/ui/menu-list";
import { Header } from "features/layout/ui/header";
import { Footer } from "features/layout/ui/footer";
import { PageLoader } from "features/layout/ui/page-loader";
import { LayoutContainer } from "features/layout/ui/layout-container";
import { Logo } from "features/layout/ui/logo";
import { NAVIGATION } from "features/layout/config/base";
// import { useTranslate } from "shared/lib/useTranslate";

export const Layout = () => {
  // const translate = useTranslate();

  return (
    <>
      <Header
        leftNode={
          <Flex maxWidth="240px" flexGrow={1} alignItems="center">
            <Logo />
          </Flex>
        }
        centerNode={<MenuList list={NAVIGATION} margin="0 auto" />}
        rightNode={<UserPanel />}
      />

      <LayoutContainer height="100%" display="flex" flexDirection="column">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>

        <Footer>footer</Footer>
      </LayoutContainer>
    </>
  );
};
