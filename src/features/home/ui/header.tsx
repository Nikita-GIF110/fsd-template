import type { FlexProps } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";
import { colors } from "shared/config/colors";

interface HeaderProps extends FlexProps {
  title: string;
  subtitle: string;
  subtitleLeftDecor?: boolean;
}

export const Header = ({
  title,
  subtitle,
  subtitleLeftDecor = true,
  ...otherProsp
}: HeaderProps) => (
  <Flex flexDirection="column" gap="16px" {...otherProsp}>
    <Box
      color={colors.white}
      fontSize="40px"
      fontWeight={900}
      lineHeight="80%"
      textTransform="uppercase"
    >
      {title}
    </Box>

    <Flex
      alignItems="center"
      color={colors.white}
      fontSize="16px"
      fontWeight={500}
      lineHeight="80%"
      textTransform="uppercase"
      opacity={0.4}
      gap="8px"
      _before={{
        content: "''",
        display: subtitleLeftDecor ? "inline-block" : "none",
        width: "64px",
        height: "2px",
        opacity: 0.4,
        backgroundColor: colors.white,
      }}
    >
      {subtitle}
    </Flex>
  </Flex>
);
