import { Link as ReactRouterLink } from "react-router-dom";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Box,
  Link,
} from "@chakra-ui/react";
import type { UserEntity } from "entities/user";
import type { Nullable } from "entities/utils";

interface UserPanelProps {
  user: Nullable<UserEntity>;
  isAuthorized: boolean;
  logOut: () => void;
}

export const UserPanel = ({ user, isAuthorized, logOut }: UserPanelProps) => {
  const userName = isAuthorized ? user?.name : undefined;

  return (
    <Menu>
      <MenuButton borderRadius="100%">
        <Avatar
          size="md"
          name={isAuthorized ? userName : undefined}
          bg="red.500"
        />
      </MenuButton>
      <MenuList paddingX={2}>
        {isAuthorized ? (
          <>
            <MenuItem as={ReactRouterLink} to="/profile">
              {user?.name}
            </MenuItem>
            <MenuDivider />
            <MenuItem as={Button} onClick={logOut}>
              Выход
            </MenuItem>
          </>
        ) : (
          <Box maxWidth="250px" textAlign="center">
            Для просмотра личного кабинета нужна{" "}
            <Link as={ReactRouterLink} color="blue.500" to="/auth/sign-in">
              Авторизация
            </Link>
          </Box>
        )}
      </MenuList>
    </Menu>
  );
};
