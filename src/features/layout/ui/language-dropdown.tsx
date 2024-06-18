import { useState } from "react";
import type { MenuProps } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";
import type { SelectOption } from "entities/utils";
import { Arrow } from "assets/icons/arrow";
import { colors } from "shared/config/colors";

const defaultoption = {
  label: "RU",
  value: "ru",
};

interface LanguageDropdownProps extends Omit<MenuProps, "children"> {
  languages: Array<SelectOption>;
  onChage: (option: SelectOption) => void;
}

export const LanguageDropdown = ({
  languages = [],
  onChage,
  ...otherMenuProps
}: LanguageDropdownProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState(defaultoption);

  const handelChangeLanguage =
    (selectedOption: typeof selectedLanguage) => () => {
      if (typeof onChage === "function") {
        onChage(selectedOption);
      }
      setSelectedLanguage(selectedOption);
    };

  return (
    <Menu {...otherMenuProps}>
      <MenuButton
        as={Button}
        padding={0}
        variant="ghost"
        color={colors.white}
        rightIcon={<Box as={Arrow} width="14px" height="14px" />}
        iconSpacing="4px"
        fontSize="16px"
        fontWeight={500}
        textTransform="uppercase"
        lineHeight="80%"
      >
        {selectedLanguage.label}
      </MenuButton>
      <MenuList>
        {languages.map((language) => (
          <MenuItem
            key={language.label}
            onClick={handelChangeLanguage(language)}
          >
            {language.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
