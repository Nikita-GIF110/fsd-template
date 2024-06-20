import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Flex, Link } from "@chakra-ui/react";
import ArrowUp from "assets/icons/arrow-up.svg?react";
import { colors } from "shared/config/colors";

interface NewInStoreProsp {
  image: string;
  header: string;
  subHeader: string;
}

export const NewInStore = ({ image, header, subHeader }: NewInStoreProsp) => (
  <Flex
    width="100%"
    background="linear-gradient(108deg, #1781FF 13.53%, #0052B3 91.46%)"
    padding="32px 40px"
    borderRadius="md"
    overflow="hidden"
    alignItems="center"
    position="relative"
  >
    <Box
      fontFamily="Halvar Engschrift"
      fontSize="56px"
      fontWeight={700}
      textTransform="uppercase"
      lineHeight="82%"
      marginRight="24px"
      color={colors.white}
    >
      {header}
    </Box>

    <Box
      fontFamily="Halvar Breitschrift"
      fontSize="16px"
      fontWeight={500}
      lineHeight="130%"
      letterSpacing="-0.5px"
      color={colors.white}
      maxWidth="286px"
    >
      {subHeader}
    </Box>

    <Box as="img" src={image} position="absolute" top={0} right="0px" />

    <Link
      as={ReactRouterLink}
      to="/"
      gap="19px"
      variant="medium"
      marginLeft="auto"
      position="relative"
      size="md"
    >
      открыть магазин
      <ArrowUp width={26} height={26} />
    </Link>
  </Flex>
);
