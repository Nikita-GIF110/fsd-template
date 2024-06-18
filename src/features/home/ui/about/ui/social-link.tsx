import type { FunctionComponent } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import type { SocialLink as SocialLinkType } from "features/home/models";
import { colors } from "shared/config/colors";
import YouTubeIcon from "assets/icons/logo-youtube.svg?react";
import DiscordIcon from "assets/icons/logo-discord.svg?react";
import VkIcon from "assets/icons/logo-vk.svg?react";

const IconsMap: Record<
  SocialLinkType["id"],
  FunctionComponent<React.SVGAttributes<SVGElement>>
> = {
  discord: DiscordIcon,
  youTube: YouTubeIcon,
  vk: VkIcon,
};

export const SocialLink = ({ to, label, id }: SocialLinkType) => {
  const IconComponent = IconsMap[id];

  return (
    <Link
      as={ReactRouterLink}
      to={to}
      variant="medium"
      title={label}
      padding="24px"
      color={colors.black}
    >
      <IconComponent width={28} height={28} />
    </Link>
  );
};
