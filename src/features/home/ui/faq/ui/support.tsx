import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Link } from "@chakra-ui/react";
import ArrowUp from "assets/icons/arrow-up.svg?react";
import { colors } from "shared/config/colors";

interface SupportProps {
  header: string;
  description: string;
  to: string;
  linkText: string;
}

export const Support = ({
  header,
  description,
  to,
  linkText,
}: SupportProps) => (
  <Box
    color={colors.white}
    padding="80px"
    backgroundColor="rgba(238, 244, 248, 0.03)"
    borderRadius="10px"
  >
    <Box
      fontSize="40px"
      fontWeight={900}
      textTransform="uppercase"
      marginBottom="32px"
      lineHeight="80%"
    >
      {header}
    </Box>

    <Box
      fontSize="20px"
      fontWeight={500}
      letterSpacing="-1px"
      lineHeight="130%"
      opacity={0.6}
      marginBottom="44px"
    >
      {description}
    </Box>

    <Link
      as={ReactRouterLink}
      to={to}
      gap="19px"
      variant="medium"
      marginLeft="auto"
      position="relative"
      size="md"
    >
      {linkText}
      <Box as={ArrowUp} height="28px" width="28px" />
    </Link>
  </Box>
);
