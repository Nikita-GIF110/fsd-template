import { Box, Flex } from "@chakra-ui/react";
import Logo from "assets/icons/logo.svg?react";
import { colors } from "shared/config/colors";

export const AboutHeader = () => (
  <Flex alignItems="center" columnGap="16px">
    <Logo />
    <Box
      fontSize="44px"
      fontWeight={700}
      lineHeight="80%"
      textTransform="uppercase"
      color={colors.white}
    >
      — это
    </Box>
  </Flex>
);
