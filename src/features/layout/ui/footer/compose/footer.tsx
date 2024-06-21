import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Container } from "shared/ui/container";
import { colors } from "shared/config/colors";
import { SocialLinkSmall } from "../ui/social-links-small";

interface FooterProps {
  logo: ReactNode;
}

export const Footer = ({ logo }: FooterProps) => (
  <Box as="footer" paddingY={2} marginTop="auto" padding="119px 0">
    <Container padding={0}>
      {/* Top */}
      {logo}

      <Box
        backgroundColor={colors.blue.primary}
        margin="37px 0 40px 0"
        width="100%"
        height="1px"
      />

      {/* Middle */}
      <Flex justifyContent="space-between" fontSize="16px" color={colors.white}>
        <Box maxWidth="297px" lineHeight="148%" opacity={0.5}>
          ООО “Один Гейм
          <br />
          Девелопмент”
          <br />
          ИНН 9703149875
          <br />
          ОГРН 1237700457862
          <br />
          26, Vyronos Street. 3105.
          <br />
          Limassol. LB. CY120009.
        </Box>

        <Box lineHeight="146%" opacity={0.5} paddingLeft="57px">
          <Box as={Link} to="/" display="block">
            Политика конфиденциальности
          </Box>
          <Box as={Link} to="/" display="block">
            Пользовательское соглашение
          </Box>
          <Box as={Link} to="/" display="block">
            Публичная оферта
          </Box>
          <Box as={Link} to="/" display="block">
            Политика Cookie файлов
          </Box>
          <Box as={Link} to="/" display="block">
            Правила сервера
          </Box>
        </Box>

        <Box opacity={0.5} maxWidth="293px">
          <Box marginRight="28px" lineHeight="148%">
            Канал поддержки в Discord
            <br />
            Поддержка в ВК
          </Box>

          <SocialLinkSmall marginTop="24px" />
        </Box>
      </Flex>

      <Box
        backgroundColor={colors.white}
        margin="40px 0"
        width="100%"
        height="1px"
        opacity={0.1}
      />

      {/* Bottom */}
      <Box
        fontSize="16px"
        lineHeight="152%"
        letterSpacing="16px"
        textTransform="uppercase"
        opacity={0.5}
        color={colors.white}
      >
        One Role Play © {new Date().getFullYear()}
      </Box>
    </Container>
  </Box>
);
