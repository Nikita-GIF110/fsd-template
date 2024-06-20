import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { UserPanel } from "features/layout/ui/user-panel";
import { MenuList } from "features/layout/ui/menu-list";
import { Header } from "features/layout/ui/header";
import { Footer } from "features/layout/ui/footer";
import { PageLoader } from "features/layout/ui/page-loader";
import { Logo } from "features/layout/ui/logo";
import { LanguageDropdown } from "features/layout/ui/language-dropdown";
import { HEADER_NAVIGATION, LANGUAGES } from "features/layout/config/base";
import type { SelectOption } from "entities/utils";
import { useI18N } from "shared/lib/useI18n";


export const Layout = () => {
  const { setLang } = useI18N();

  const setLanguage = (selectedLanguage: SelectOption) => {
    setLang(selectedLanguage.value as "ru" | "en");
  };

  return (
    <>
      <Box position="absolute" top={0} left={0} width="100%">
        <Header
          position="relative"
          zIndex={100}
          leftNode={
            <Flex maxWidth="240px" flexGrow={1} alignItems="center">
              <Logo marginRight="auto" />

              <LanguageDropdown languages={LANGUAGES} onChage={setLanguage} />
            </Flex>
          }
          centerNode={<MenuList list={HEADER_NAVIGATION} margin="0 auto" />}
          rightNode={<UserPanel />}
        />
      </Box>

      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>

      <Footer>footer</Footer>
    </>
  );
};
