import type { ReactNode } from "react";
import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { colors } from "shared/config/colors";

interface HeaderProps extends BoxProps {
  rightNode?: ReactNode;
  leftNode?: ReactNode;
  centerNode?: ReactNode;
}

export const Header = ({
  rightNode,
  centerNode,
  leftNode,
  ...headerProps
}: HeaderProps) => (
  <Box
    as="header"
    padding="32px 40px"
    display="flex"
    alignItems="center"
    _before={{
      content: "''",
      position: "absolute",
      top: "-4px",
      left: "495",
      display: "inline-block",
      backgroundColor: colors.white,
      borderRadius: "4px",
      transform: "rotate(-45deg)",
      width: "16px",
      height: "16px",
    }}
    {...headerProps}
  >
    {leftNode}
    {centerNode}
    {rightNode}
  </Box>
);
