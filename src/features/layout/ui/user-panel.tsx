import { Box, Button } from "@chakra-ui/react";
import UserIcon from "assets/icons/user-icon.svg?react";

export const UserPanel = () => (
  <Button
    variant="smallRoundedLight"
    size="sm"
    paddingTop="14px"
    paddingBottom="14px"
  >
    <Box as={UserIcon} width="20px" height="20px" marginRight="12px"></Box>
    Личный кабинет
  </Button>
);
