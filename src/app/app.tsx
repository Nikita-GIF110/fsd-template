import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { router } from "pages/router";
import { useAuth } from "entities/auth";
import { theme } from "shared/config/theme";
import { ToastContainer } from "shared/ui/toast";
import "./app.css";

export const App = () => {
  const checkUser = useAuth((state) => state.checkUser);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
      <ToastContainer />
    </ChakraProvider>
  );
};

export default App;
