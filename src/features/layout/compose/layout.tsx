import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import {
  Container,
  Flex,
  useDisclosure,
  useColorMode,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListItem,
} from "@chakra-ui/react";
import { UserPanel } from "features/layout/ui/user-panel";
import { MenuList } from "features/layout/ui/menu-list";
import { useUser } from "entities/user";
import { useAuth } from "entities/auth";
import { NAVIGATION } from "shared/config/base";

export const Layout = () => {
  const user = useUser((state) => state.user);
  const token = useAuth((state) => state.token);
  const isAuthorized = useAuth((state) => state.isAuthorized);

  const fetchUser = useUser((state) => state.fetchUser);
  const logOut = useAuth((state) => state.logOut);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode } = useColorMode();

  useEffect(() => {
    if (token) {
      fetchUser("1");
    }
  }, [fetchUser, token]);

  return (
    <>
      <Container flexGrow={1}>
        <Flex
          as="header"
          paddingY={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex>
            <List display="flex" alignItems="center">
              <ListItem mr={3}>
                <Button onClick={onOpen}>Menu</Button>
              </ListItem>
            </List>

            <MenuList list={NAVIGATION} />
          </Flex>

          <UserPanel user={user} isAuthorized={isAuthorized} logOut={logOut} />
        </Flex>

        <Outlet />
      </Container>

      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerFooter mt="auto">
            <Button onClick={toggleColorMode}>toggleColorMode</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
