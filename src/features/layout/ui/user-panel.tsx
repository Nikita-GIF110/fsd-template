import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { UserIcon } from "assets/icons/user-icon";
import { colors } from "shared/config/colors";

export const UserPanel = () => (
  <Flex
    as={ReactRouterLink}
    alignItems="center"
    backgroundColor={colors.white}
    color={colors.black}
    padding="14px 26px"
    gap="12px"
    borderRadius="base"
  >
    <Box width="20px" height="20px" textTransform="uppercase">
      <UserIcon />
    </Box>

    <Box
      fontWeight={700}
      fontSize="14px"
      lineHeight="80%"
      textTransform="uppercase"
    >
      Личный кабинет
    </Box>
  </Flex>
);
