import { Outlet } from "react-router-dom";
import { Container, Card, Flex } from "@chakra-ui/react";

export const Layout = () => (
  <Container flexGrow={1}>
    <Flex
      height="100%"
      paddingY={3}
      alignItems="center"
      justifyContent="center"
    >
      <Card flexBasis="70%">
        <Outlet />
      </Card>
    </Flex>
  </Container>
);
