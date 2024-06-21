import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Heading, Flex, Text, Link } from "@chakra-ui/react";
import videoPlaceholder from "assets/images/home/video-placeholder.png";
import introImage from "assets/images/home/home-intro.png";
import BottomRightDecor from "assets/images/home/intro-decor-svg.svg?react";
import ArrowUp from "assets/icons/arrow-up.svg?react";
import { colors } from "shared/config/colors";

const BottomLeftDecor = () => (
  <Flex alignItems="flex-end">
    <Box
      width="63px"
      height="63px"
      borderBottom="8px"
      borderLeft="8px"
      borderColor={colors.white}
    />

    <Box
      fontSize="38px"
      fontWeight={700}
      textTransform="uppercase"
      lineHeight="80%"
      color={colors.white}
      marginLeft="35px"
      fontFamily="Halvar Engschrift"
    >
      GTA V Project
    </Box>
  </Flex>
);

const PlayersOnlineCount = ({ count }: { count: number }) => (
  <Flex gap="12px" alignItems="center">
    <Box
      fontSize="27px"
      fontWeight={500}
      textTransform="uppercase"
      lineHeight="98%"
      color={colors.white}
      fontFamily="Halvar Engschrift"
    >
      Сейчас
      <br />
      играют
    </Box>

    <Box fontSize="67px" color={colors.green.primary} fontWeight={900}>
      {count}
    </Box>
  </Flex>
);

export const Intro = () => (
  <Flex
    height="930px"
    backgroundImage={videoPlaceholder}
    backgroundSize="contain"
    backgroundPosition="bottom center"
    padding="60px"
    alignItems="flex-end"
    justifyContent="center"
    position="relative"
    overflow="hidden"
  >
    <Flex
      position="absolute"
      width="100%"
      height="100%"
      bottom={0}
      left={0}
      alignItems="flex-end"
      justifyContent="space-between"
      padding="60px"
    >
      <BottomLeftDecor />
      <BottomRightDecor />
    </Flex>

    <Box
      as="img"
      src={introImage}
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
      objectFit="contain"
      pointerEvents="none"
    />

    <Flex
      flexDirection="column"
      position="relative"
      textAlign="center"
      gap="50px"
      maxWidth="1010px"
      margin="0 auto"
    >
      <Flex flexDirection="column" gap="20px">
        <Heading
          as="h1"
          textTransform="uppercase"
          fontSize="100px"
          fontWeight={900}
          color={colors.white}
          maxWidth="1010px"
          margin="0 auto"
          lineHeight="80%"
        >
          место, где
          <br />
          все возможно
        </Heading>

        <Text
          fontSize="24px"
          fontWeight={900}
          letterSpacing="0.96px"
          textTransform="uppercase"
          color={colors.white}
        >
          Ваша история, ваш выбор, ваша игра
        </Text>
      </Flex>

      <Flex alignItems="center" justifyContent="center" gap="43px">
        <Link
          as={ReactRouterLink}
          to="/"
          variant="large"
          display="flex"
          alignItems="center"
          gap="19px"
          size="lg"
        >
          <span>Начать игру</span>
          <ArrowUp width={28} height={28} />
        </Link>

        <PlayersOnlineCount count={7420} />
      </Flex>
    </Flex>
  </Flex>
);
