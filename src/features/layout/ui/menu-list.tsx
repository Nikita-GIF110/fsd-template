import { Link as ReactRouterLink } from "react-router-dom";
import { List, ListItem, Link } from "@chakra-ui/react";

interface MenuListProps {
  list: Array<{
    to: string;
    label: string;
  }>;
}

export const MenuList = ({ list }: MenuListProps) => (
  <List display="flex" alignItems="center">
    {list.map((link) => (
      <ListItem key={link.label} mr={3}>
        <Link as={ReactRouterLink} to={link.to}>
          {link.label}
        </Link>
      </ListItem>
    ))}
  </List>
);
