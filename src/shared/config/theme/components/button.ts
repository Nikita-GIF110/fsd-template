import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../colors";

const roundedOutline = {
  borderRadius: "32px",
  border: `1px solid ${colors.black}`,
  textAlign: "center",
  backgroundColor: colors.white,
  fontWeight: "medium",

  _hover: {
    backgroundColor: colors.black,
    color: colors.white,
  },
};
const roundedSolid = {
  borderRadius: "32px",
  border: `1px solid ${colors.black}`,
  textAlign: "center",
  backgroundColor: colors.black,
  color: colors.white,
  fontWeight: "medium",

  _hover: {
    backgroundColor: colors.white,
    color: colors.black,
  },
};

// const buttonSm = defineStyle({
//   padding: "10px",
//   fontSize: "16px",
//   height: "32px",
//   minWidth: "32px",
// });
// const buttonMd = defineStyle({
//   padding: "10px 20px",
//   fontSize: "16px",
//   height: "52px",
//   minWidth: "52px",
// });

export const Button = defineStyleConfig({
  variants: {
    roundedOutline: defineStyle(roundedOutline),
    roundedSolid: defineStyle(roundedSolid),
    circleOutline: defineStyle({
      ...roundedOutline,
      borderRadius: "50%",
      padding: "10px",
    }),
    circleSolid: defineStyle({
      ...roundedSolid,
      borderRadius: "50%",
      padding: "10px",
    }),
    outline: defineStyle({
      border: `1px solid ${colors.gray.primary}`,
      backgroundColor: colors.white,
      color: colors.black,
      fontWeight: "medium",

      _hover: {
        backgroundColor: colors.black,
        color: colors.white,
      },
    }),
    solid: defineStyle({
      border: `1px solid ${colors.black}`,
      backgroundColor: colors.black,
      color: colors.white,
      fontWeight: "medium",

      _hover: {
        backgroundColor: colors.white,
        color: colors.black,
        borderColor: colors.gray.primary,
      },
    }),
  },
});
