import type { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { colors } from "shared/config/colors";

interface StepProps {
  stepIndex: string;
  header: string;
  description: string;
  footer: ReactNode;
}

export const Step = ({ stepIndex, header, description, footer }: StepProps) => (
  <Box display="flex" flexDirection="column" rowGap="14px" textAlign="center">
    <Box
      color={colors.green.primary}
      fontSize="20px"
      fontWeight={900}
      lineHeight="100%"
      textTransform="uppercase"
    >
      {stepIndex}
    </Box>

    <Box
      color={colors.white}
      fontSize="28px"
      fontWeight={700}
      lineHeight="100%"
      textTransform="uppercase"
      letterSpacing="-0.56px"
    >
      {header}
    </Box>

    <Box
      color={colors.white}
      fontSize="16px"
      fontWeight={500}
      lineHeight="130%"
      textTransform="uppercase"
      opacity={0.6}
      marginBottom="48px"
      letterSpacing="-1px"
    >
      {description}
    </Box>

    <Box marginTop="auto">{footer}</Box>
  </Box>
);
