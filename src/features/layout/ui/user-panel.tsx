import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { UserIcon } from "assets/icons/user-icon";
import { colors } from "shared/config/colors";

// interface UserPanelProps {
//   isAuthorized: boolean;
// }

export const UserPanel = () => (
  <Flex
    as={ReactRouterLink}
    alignItems="center"
    backgroundColor={colors.white}
    color={colors.black}
    padding="16px 24px"
    gap="12px"
    maxWidth="240px"
    borderRadius="base"
  >
    <Box as={UserIcon} width="24px" height="24px" textTransform="uppercase" />

    <Box fontWeight={700}>Личный кабинет</Box>
  </Flex>
);
