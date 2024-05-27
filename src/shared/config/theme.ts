import { extendTheme, baseTheme } from "@chakra-ui/react";

const customTheme = {
  colors: {
    ...baseTheme.colors,
    brand: {
      700: "#2a69ac",
      800: "#153e75",
      900: "#1a365d",
    },
  },
};

export const theme = extendTheme(customTheme);
