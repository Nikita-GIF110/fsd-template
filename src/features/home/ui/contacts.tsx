import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import GraffitiLogo1Win from "assets/images/home/graffiti-logo-1Win.svg?react";
import GraffitiLogoYouTube from "assets/images/home/graffiti-logo-YouTube.svg?react";
import GraffitiLogoTelegram from "assets/images/home/graffiti-logo-Telegram.svg?react";
import GraffitiLogoDiscord from "assets/images/home/graffiti-logo-Discord.svg?react";
import GraffitiLogoVK from "assets/images/home/graffiti-logo-VK.svg?react";
import { colors } from "shared/config/colors";
import bg from "assets/images/home/contacts-bg.png";

export const Contacts = () => (
  <Box
    padding="80px 0 143px 0"
    position="relative"
    overflow="hidden"
    _before={{
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "500px",
      backgroundImage: bg,
      backgroundPosition: "center",
      backgroundSize: "cover",
      mixBlendMode: "overlay",
    }}
    _after={{
      content: "''",
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      height: "500px",
      opacity: 0.56,
      background:
        "radial-gradient(51.6% 143.73% at 50% 156.46%, #00A3FF 0%, rgba(12, 13, 17, 0.00) 100%)",
      pointerEvents: "none",
      zIndex: -1,
    }}
    // _after={{
    //   content: "''",
    //   position: "absolute",
    //   top: 0,
    //   left: 0,
    //   width: "100%",
    //   height: "100%",
    //   backgroundImage: bg,
    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: "center",
    //   backgroundSize: "cover",
    //   opacity: 0.8,
    //   mixBlendMode: "overlay",
    //   pointerEvents: "none",
    //   background: "radial-gradient(51.6% 143.73% at 50% 156.46%, #00A3FF 0%, rgba(12, 13, 17, 0.00) 100%)"
    // }}
  >
    {/* <Box
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
      pointerEvents="none"
      mixBlendMode="overlay"
    >
      <Box as="img" src={bg} objectFit="cover"  />
    </Box> */}
    {/* <Box as="img" src={bg} opacity={0.56} /> */}

    <Flex
      position="relative"
      columnGap="80px"
      padding=""
      justifyContent="center"
    >
      <Link to="/">
        <Box as={GraffitiLogoYouTube} width="190px" height="190px" />
      </Link>

      <Link to="/">
        <Box as={GraffitiLogoDiscord} width="190px" height="190px" />
      </Link>

      <Link to="/">
        <Box as={GraffitiLogoVK} width="190px" height="190px" />
      </Link>

      <Link to="/">
        <Box as={GraffitiLogoTelegram} width="190px" height="190px" />
      </Link>

      <Link to="/">
        <Box as={GraffitiLogo1Win} width="190px" height="190px" />
      </Link>
    </Flex>

    <Box
      fontSize="80px"
      fontWeight={900}
      lineHeight="130%"
      textTransform="uppercase"
      textAlign="center"
      color={colors.black}
      position="absolute"
      bottom="-35px"
      left="50%"
      transform="translate(-50%, 0)"
    >
      контакты
    </Box>
  </Box>
);
