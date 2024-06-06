import type { ReactNode } from "react";
import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

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
    paddingY={2}
    display="flex"
    alignItems="center"
    {...headerProps}
  >
    {leftNode}
    {centerNode}
    {rightNode}
  </Box>
);
