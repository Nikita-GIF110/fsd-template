import type { ReactNode } from "react";
import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

interface FooterProps extends BoxProps {
  children?: ReactNode;
}

export const Footer = ({ children, ...footerProps }: FooterProps) => (
  <Box
    as="footer"
    paddingY={2}
    display="flex"
    alignItems="center"
    {...footerProps}
  >
    {children}
  </Box>
);
