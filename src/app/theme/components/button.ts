import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { colors } from "shared/config/colors";

export const Button = defineStyleConfig({
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

      _hover: {
        backgroundColor: colors.green.secondary,
      },
      _active: {
        backgroundColor: colors.gray.secondary,
      },
    }),

    ghost: defineStyle({
      backgroundColor: colors.transparent,

      _hover: {
        backgroundColor: colors.transparent,
      },

      _active: {
        backgroundColor: colors.transparent,
      },
    }),
  },
});
