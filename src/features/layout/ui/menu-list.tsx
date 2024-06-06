import { Link as ReactRouterLink } from "react-router-dom";
import { ListProps } from "@chakra-ui/react";
import { List, ListItem, Link } from "@chakra-ui/react";

interface MenuListProps extends ListProps {
  list: Array<{
    to: string;
    label: string;
  }>;
}

export const MenuList = ({ list, ...otherListProps }: MenuListProps) => (
  <List display="flex" alignItems="center" {...otherListProps}>
    {list.map((link) => (
      <ListItem key={link.label} mr={3}>
        <Link as={ReactRouterLink} to={link.to}>
          {link.label}
        </Link>
      </ListItem>
    ))}
  </List>
);
