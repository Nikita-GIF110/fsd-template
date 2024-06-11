import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { router } from "pages/router";
import { useApp } from "entities/app";
import { ToastContainer } from "shared/ui/toast";
import { I18NProvider } from "shared/lib/i18n";
import { i18nConfig } from "shared/config/i18n";
import "./app.css";
import { theme } from "./theme";

export const App = () => {
  const appRun = useApp((state) => state.appRun);

  useEffect(() => {
    appRun();
  }, [appRun]);

  return (
    <I18NProvider i18n={i18nConfig}>
      <ChakraProvider theme={theme} cssVarsRoot="body">
        <RouterProvider router={router} />
        <ToastContainer />
      </ChakraProvider>
    </I18NProvider>
  );
};

export default App;
