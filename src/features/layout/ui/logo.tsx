import { Link as ReactRouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import type { LinkProps } from "@chakra-ui/react";
import { LogoIcon } from "assets/icons/logo-icon";

interface LogoProps extends Omit<LinkProps, "to"> {}

export const Logo = (linkProps: LogoProps) => (
  <Link as={ReactRouterLink} to="/" width="146px" height="38px" {...linkProps}>
    <LogoIcon />
  </Link>
);
