import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
  fullwidth?: boolean;
}

export const Button = ({
  children,
  fullwidth,
  variant = "roundedOutline",
  ...otherButtonProps
}: ButtonProps) => (
  <ChakraButton
    width={fullwidth ? "100%" : "auto"}
    variant={variant}
    {...otherButtonProps}
  >
    {children}
  </ChakraButton>
);
