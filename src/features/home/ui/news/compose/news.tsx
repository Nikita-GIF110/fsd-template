import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Flex, Link } from "@chakra-ui/react";
import type { NewsEntity } from "features/home/models";
import ArrowUp from "assets/icons/arrow-up.svg?react";
import { NewsLargeTile } from "../ui/news-large-tile";
import { NewsSmallTile } from "../ui/news-small-tile";

interface NewsBlockProps {
  news: Array<NewsEntity>;
}

export const NewsBlock = ({ news }: NewsBlockProps) => {
  const [mainNews, firstNews, secondNews, thirdNews] = news;

  return (
    <Flex gap="20px">
      <Box
        flex="0 1 772px"
        height="530px"
        position="relative"
        _before={{
          content: "''",
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "530px",
          height: "100%",
          borderRadius: "12px",
          opacity: 0.2,
          transform: "translateX(calc(-100% + -20px)) rotate(90deg)",
          background:
            "linear-gradient(180deg, #3EB6F8 0%, rgba(62, 182, 248, 0.00) 91%)",
        }}
      >
        <NewsLargeTile {...mainNews} height="100%" />
      </Box>

      {/*   Gap + Large Tile width  */}
      <Flex gap="20px" flexWrap="wrap" flex="1 1 calc(100% - (20px + 772px))">
        <Box flex="1 0 calc(50% - 20px)">
          <NewsSmallTile {...firstNews} height="100%" />
        </Box>

        <Box
          flex="1 0 calc(50% - 20px)"
          position="relative"
          _before={{
            content: "''",
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "116px",
            borderRadius: "12px",
            opacity: 0.2,
            transform: "translateY(calc(-100% + -20px)) rotate(180deg)",
            background:
              "linear-gradient(180deg, #D3FF26 0%, rgba(211, 255, 38, 0.00) 87.5%)",
          }}
          _after={{
            content: "''",
            display: "block",
            position: "absolute",
            top: 0,
            right: 0,
            width: "254px",
            height: "100%",
            borderRadius: "12px",
            opacity: 0.2,
            transform: "translateX(calc(100% + 20px)) rotate(270deg)",
            background:
              "linear-gradient(180deg, #3EB6F8 0%, rgba(62, 182, 248, 0.00) 91%)",
          }}
        >
          <NewsSmallTile {...secondNews} height="100%" />
        </Box>

        <Box flex="1 0 calc(50% - 20px)">
          <NewsSmallTile {...thirdNews} height="100%" />
        </Box>

        <Box
          flex="1 0 calc(50% - 20px)"
          position="relative"
          _before={{
            content: "''",
            display: "block",
            position: "absolute",
            top: 0,
            right: 0,
            width: "254px",
            height: "100%",
            borderRadius: "12px",
            opacity: 0.2,
            transform: "translateX(calc(100% + 20px)) rotate(270deg)",
            background:
              "linear-gradient(180deg, #D3FF26 0%, rgba(211, 255, 38, 0.00) 87.5%)",
          }}
        >
          <Link
            as={ReactRouterLink}
            to="/"
            variant="medium"
            gap="16px"
            size="md"
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-start"
            fontSize="32px"
            fontWeight={700}
            padding="22px"
          >
            <Box
              as={ArrowUp}
              width="72.32px"
              height="72.32px"
              marginLeft="auto"
            />
            Больше новостей
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};
