import { Link as ReactRouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { LogoIcon } from "assets/icons/logo-icon";

export const Logo = () => (
  <Link as={ReactRouterLink} to="/" width="146px" height="38px">
    <LogoIcon />
  </Link>
);
