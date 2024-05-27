import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import type { InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  label?: string;
  helperText?: string;
  gutterBottom?: boolean;
}

export const Input = ({
  label,
  helperText,
  isInvalid,
  gutterBottom = true,
  ...inputProps
}: InputProps) => (
  <FormControl isInvalid={isInvalid} marginBottom={gutterBottom ? 3 : 0}>
    <FormLabel>{label}</FormLabel>
    <ChakraInput {...inputProps} />
    {isInvalid ? (
      <FormHelperText>{helperText}</FormHelperText>
    ) : (
      <FormErrorMessage>helperText</FormErrorMessage>
    )}
  </FormControl>
);
