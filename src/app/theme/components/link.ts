import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { colors } from "shared/config/colors";

export const Link = defineStyleConfig({
  variants: {
    large: defineStyle({
      textAlign: "center",
      fontFamily: "Halvar Engschrift",
      fontSize: "42px",
      fontWeight: 700,
      lineHeight: "80%",
      textTransform: "uppercase",
      color: colors.black,
      padding: "28px 32px",
      backgroundColor: colors.green.primary,
      height: "auto",
      borderRadius: "md",
      display: "flex",
      alignItems: "center",

      _hover: {
        backgroundColor: colors.green.secondary,
      },
      _active: {
        backgroundColor: colors.gray.secondary,
      },
    }),
    medium: defineStyle({
      textAlign: "center",
      fontFamily: "Halvar Engschrift",
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "80%",
      textTransform: "uppercase",
      color: colors.black,
      padding: "20px 28px",
      backgroundColor: colors.green.primary,
      height: "auto",
      borderRadius: "md",
      display: "flex",
      alignItems: "center",

      _hover: {
        backgroundColor: colors.green.secondary,
      },
      _active: {
        backgroundColor: colors.gray.secondary,
      },
    }),
  },
});
