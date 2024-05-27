import { Flex, Center, Box, Heading } from "@chakra-ui/react";
import { useUser } from "entities/user";

export const Profile = () => {
  const user = useUser((state) => state.user);

  return (
    <Center flexDirection="column" height="100%">
      <Box paddingY={2}>
        <Flex justifyContent="space-between" width="100%">
          <Heading as="h1">{user?.name}</Heading>
        </Flex>
      </Box>
    </Center>
  );
};
