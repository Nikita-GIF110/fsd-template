import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { colors } from "shared/config/colors";

interface CharactersHeaderProps extends BoxProps {}

export const CharactersHeader = (props: CharactersHeaderProps) => (
  <Box
    fontSize="80px"
    fontWeight={900}
    textTransform="uppercase"
    lineHeight="80%"
    color={colors.white}
    {...props}
  >
    живи{" "}
    <Box color={colors.blue.primary} display="inline-block" textAlign="right">
      уникальную жизнь
    </Box>

    <Box fontSize="64px" lineHeight="80%" textAlign="right" marginTop="3px">
      в мире{" "}
      <Box display="inline-block" color={colors.blue.primary}>
        1
      </Box>
      <Box display="inline-block">W</Box>
      <Box display="inline-block" color={colors.blue.primary}>
        RP
      </Box>
    </Box>
  </Box>
);
