import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import GraffitiLogo1Win from "assets/images/home/graffiti-logo-1Win.svg?react";
import GraffitiLogoYouTube from "assets/images/home/graffiti-logo-YouTube.svg?react";
import GraffitiLogoTelegram from "assets/images/home/graffiti-logo-Telegram.svg?react";
import GraffitiLogoDiscord from "assets/images/home/graffiti-logo-Discord.svg?react";
import GraffitiLogoVK from "assets/images/home/graffiti-logo-VK.svg?react";
// import bg from "assets/images/home/contacts-bg.png";

export const Contacts = () => (
  <Box
    position="relative"
    // backgroundImage={bg}
    backgroundRepeat="no-repeat"
    backgroundPosition="center"
    backgroundSize="cover"
    _before={{
      //   content: "''",
      position: "absolute",
      top: "52px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      height: "1465px",
      background:
        "linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, #BFBFBF 25.06%, #9C9C9C 60.17%, rgba(121, 121, 121, 0.14) 87.82%, rgba(115, 115, 115, 0.00) 97.91%)",
    }}
  >
    <Flex columnGap="40px" padding="80px 0" justifyContent="center">
      <Link to="/">
        <Box as={GraffitiLogoYouTube} width="180px" height="180px" />
      </Link>

      <Link to="/">
        <Box as={GraffitiLogoDiscord} width="180px" height="180px" />
      </Link>

      <Link to="/">
        <Box as={GraffitiLogoVK} width="180px" height="180px" />
      </Link>

      <Link to="/">
        <Box as={GraffitiLogoTelegram} width="180px" height="180px" />
      </Link>

      <Link to="/">
        <Box as={GraffitiLogo1Win} width="180px" height="180px" />
      </Link>
    </Flex>

    <Box
      fontSize="80px"
      fontWeight={900}
      lineHeight="100%"
      textTransform="uppercase"
      textAlign="center"
    >
      контакты
    </Box>
  </Box>
);
