import type { ReactNode } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Box, ListProps } from "@chakra-ui/react";
import { List, ListItem, Link } from "@chakra-ui/react";
import { CrownIcon } from "assets/icons/crown-icon";
import { colors } from "shared/config/colors";

interface MenuListProps extends ListProps {
  list: Array<{
    to: string;
    label: string;
  }>;
}

interface MenuItemProps {
  to: string;
  children: ReactNode;
}

const MenuItem = ({ to, children }: MenuItemProps) => (
  <Link
    as={ReactRouterLink}
    to={to}
    padding="12px 24px"
    fontSize="16px"
    textTransform="uppercase"
    fontWeight={500}
    lineHeight="80%"
    color={colors.white}
  >
    {children}
  </Link>
);

export const MenuList = ({ list, ...otherListProps }: MenuListProps) => (
  <List display="flex" alignItems="center" {...otherListProps}>
    {list.map((link, index) => (
      <ListItem key={link.label} position="relative">
        <MenuItem to={link.to}>
          {link.label}

          {list.length - 1 === index && (
            <Box
              width="20px"
              height="20px"
              position="absolute"
              transform="rotate(5deg)"
              right="8px"
              top="-15px"
            >
              <CrownIcon />
            </Box>
          )}
        </MenuItem>
      </ListItem>
    ))}
  </List>
);
