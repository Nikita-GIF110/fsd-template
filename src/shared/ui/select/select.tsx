import { useState } from "react";
import type { SelectProps as ChakraSelectProps } from "@chakra-ui/react";
import {
  Select as ChakraSelect,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import type { SelectOption } from "entities/utils";
import { colors } from "shared/config/theme";

interface SelectProps extends ChakraSelectProps {
  label?: string;
  helperText?: string;
  gutterBottom?: boolean;
  options: Array<SelectOption>;
}

export const Select = ({
  label,
  helperText,
  isInvalid,
  gutterBottom = true,
  placeholder,
  options = [],
  ...otherSelectProps
}: SelectProps) => {
  const [isFocused, setFocused] = useState<boolean>(false);
  const HelperTextComponent = isInvalid ? FormErrorMessage : FormHelperText;

  const onFocus = () => setFocused((prevValue) => !prevValue);
  const onBlur = () => setFocused((prevValue) => !prevValue);

  return (
    <FormControl
      isInvalid={isInvalid}
      marginBottom={gutterBottom ? 3 : 0}
      display="flex"
      alignItems="center"
      backgroundColor={colors.gray.primary}
      borderRadius="8px"
      padding="13px 20px"
      className="select"
      onBlur={onBlur}
      onFocus={onFocus}
      border={`1px solid ${isFocused ? colors.black : "transparent"}`}
    >
      {label && (
        <FormLabel marginBottom={0} flexGrow={1} lineHeight="120%">
          {label}
        </FormLabel>
      )}

      <ChakraSelect
        placeholder={placeholder || label}
        flexShrink={1}
        width="auto"
        textAlign="right"
        display="flex"
        alignItems="center"
        _focusVisible={{
          borderColor: "transparent",
          boxShadow: "none",
        }}
        _hover={{
          borderColor: "transparent",
        }}
        {...otherSelectProps}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </ChakraSelect>

      {isInvalid && <HelperTextComponent>{helperText}</HelperTextComponent>}
    </FormControl>
  );
};
