import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { colors } from "shared/config/colors";

const linkStyles = {
  textAlign: "center",
  fontFamily: "Halvar Engschrift",
  fontWeight: 700,
  lineHeight: "80%",
  textTransform: "uppercase",
  height: "auto",
  display: "inline-flex",
  alignItems: "center",
};

export const Link = defineStyleConfig({
  variants: {
    large: defineStyle({
      ...linkStyles,
      color: colors.black,
      backgroundColor: colors.green.primary,
      borderRadius: "md",

      _hover: {
        backgroundColor: colors.green.secondary,
      },
      _active: {
        backgroundColor: colors.gray.secondary,
      },
    }),

    medium: defineStyle({
      ...linkStyles,
      color: colors.black,
      backgroundColor: colors.green.primary,
      borderRadius: "md",

      _hover: {
        backgroundColor: colors.green.secondary,
      },
      _active: {
        backgroundColor: colors.gray.secondary,
      },
    }),

    smallRoundedPrimary: defineStyle({
      ...linkStyles,
      fontFamily: "Halvar Breitschrift",
      backgroundColor: colors.green.primary,
      borderRadius: "base",
      position: "relative",

      _before: {
        content: "''",
        display: "block",
        width: "50%",
        height: "10px",
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "inherit",
        transition: "top 0.1s ease-in",
      },
      _after: {
        content: "''",
        display: "block",
        width: "50%",
        height: "10px",
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "inherit",
        transition: "bottom 0.1s ease-in",
      },

      _hover: {
        _before: {
          top: "-5px",
        },
        _after: {
          bottom: "-5px",
        },
      },
    }),
    smallRoundedLight: defineStyle({
      ...linkStyles,
      fontFamily: "Halvar Breitschrift",
      backgroundColor: colors.white,
      borderRadius: "base",
      position: "relative",

      _before: {
        content: "''",
        display: "block",
        width: "50%",
        height: "10px",
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "inherit",
        transition: "top 0.1s ease-in",
      },
      _after: {
        content: "''",
        display: "block",
        width: "50%",
        height: "10px",
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "inherit",
        transition: "bottom 0.1s ease-in",
      },

      _hover: {
        _before: {
          top: "-5px",
        },
        _after: {
          bottom: "-5px",
        },
      },
    }),
  },
  sizes: {
    lg: {
      fontSize: "42px",
      padding: "28px 32px",
    },
    md: {
      fontSize: "32px",
      padding: "20px 28px",
    },
    sm: {
      fontSize: "14px",
      padding: "16px 26px",
    },
  },
});
