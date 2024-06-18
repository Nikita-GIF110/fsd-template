import type { ReactNode } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import type { BoxProps } from "@chakra-ui/react";
import { Grid, GridItem, Box, Badge, Stack, Link } from "@chakra-ui/react";
import type { News } from "features/home/models";
import { colors } from "shared/config/colors";
import { ArrowUp } from "assets/icons/arrow-up";

interface NewsProps {
  news: Array<News>;
}

interface NewsItemProps extends BoxProps, News {
  isMainNews?: boolean;
}

interface NewsTileWrapperProps extends BoxProps {
  to?: string;
}

interface MoreNewsProps extends BoxProps {
  to: string;
  header: string;
  icon: ReactNode;
}

const NewsTileWrapper = ({
  children,
  as,
  ...otherProps
}: NewsTileWrapperProps) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    as={as}
    borderRadius="md"
    overflow="hidden"
    backgroundRepeat="no-repeat"
    backgroundPosition="bottom right"
    backgroundSize="cover"
    padding="22px"
    backgroundColor={colors.green.primary}
    {...otherProps}
  >
    {children}
  </Box>
);

const HewsHeader = ({ children, color, ...otherProps }: BoxProps) => (
  <Box
    fontSize="32px"
    fontWeight={900}
    lineHeight="80%"
    letterSpacing="-1px"
    color={color}
    {...otherProps}
  >
    {children}
  </Box>
);

const MoreNews = ({ to, header, icon, ...otherProps }: MoreNewsProps) => (
  <NewsTileWrapper
    as={ReactRouterLink}
    to={to}
    position="relative"
    justifyContent="flex-end"
    {...otherProps}
  >
    <Box color={colors.white}>
      <HewsHeader
        color={colors.black}
        fontSize="37px"
        fontWeight={700}
        fontFamily="Halvar Engschrift"
      >
        {header}
      </HewsHeader>
    </Box>

    <Box position="absolute" top="22px" right="22px">
      {icon}
    </Box>
  </NewsTileWrapper>
);

const NewsItem = ({
  isNew = false,
  isMainNews = false,
  header,
  subHeader,
  to,
  image,
  ...otherProps
}: NewsItemProps) => {
  if (isMainNews) {
    return (
      <NewsTileWrapper
        backgroundImage={image.src}
        padding="44px"
        alignItems="flex-start"
        {...otherProps}
      >
        {/* Top */}
        {isNew && (
          <Stack direction="row" gap="6px">
            <Badge variant="boxy">News</Badge>
            <Badge variant="boxyDark">04 марта</Badge>
          </Stack>
        )}

        {/* Center or bottom */}
        <Box color={colors.white} marginRight="220px">
          <HewsHeader fontSize="44px">{header}</HewsHeader>
          <Box
            fontSize="20px"
            fontWeight={500}
            lineHeight="130%"
            letterSpacing="-1px"
            marginTop="10px"
          >
            {subHeader}
          </Box>
        </Box>

        {/* Bottom */}
        <Link as={ReactRouterLink} to={to} variant="medium" gap="16px">
          Узнать больше
          <ArrowUp />
        </Link>
      </NewsTileWrapper>
    );
  }

  return (
    <NewsTileWrapper
      as={ReactRouterLink}
      to={to}
      backgroundImage={image.src}
      {...otherProps}
    >
      {/* Top */}
      {isNew && (
        <Stack direction="row" gap="6px">
          <Badge variant="boxy">News</Badge>
          <Badge variant="boxyDark">04 марта</Badge>
        </Stack>
      )}

      {/* Center or bottom */}
      <Box color={colors.white}>
        <HewsHeader>{header}</HewsHeader>
        <Box
          fontSize="16px"
          fontWeight={500}
          lineHeight="130%"
          letterSpacing="-0.5px"
          marginTop="10px"
          marginRight="10px"
        >
          {subHeader}
        </Box>
      </Box>
    </NewsTileWrapper>
  );
};

export const NewsBlock = ({ news = [] }: NewsProps) => {
  const [mainNews, firstNews, secondNews, thirdNews] = news;

  return (
    <Grid
      gap="20px"
      gridTemplateColumns="772px repeat(2, 1fr)"
      gridTemplateRows="repeat(2, 255px)"
    >
      <GridItem
        gridArea="1 / 1 / 3 / 2"
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
        <NewsItem
          header={mainNews.header}
          subHeader={mainNews.subHeader}
          isNew={mainNews.isNew}
          isMainNews
          to={mainNews.to}
          image={mainNews.image}
          height="100%"
        />
      </GridItem>

      <GridItem gridArea="1 / 2 / 2 / 3">
        <NewsItem
          header={firstNews.header}
          subHeader={firstNews.subHeader}
          isNew={firstNews.isNew}
          to={firstNews.to}
          image={firstNews.image}
          height="100%"
        />
      </GridItem>

      <GridItem
        gridArea="1 / 3 / 2 / 4"
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
        <NewsItem
          header={secondNews.header}
          subHeader={secondNews.subHeader}
          isNew={secondNews.isNew}
          to={secondNews.to}
          image={secondNews.image}
          height="100%"
        />
      </GridItem>

      <GridItem gridArea="2 / 2 / 3 / 3">
        <NewsItem
          header={thirdNews.header}
          subHeader={thirdNews.subHeader}
          isNew={thirdNews.isNew}
          to={thirdNews.to}
          image={thirdNews.image}
          height="100%"
        />
      </GridItem>

      <GridItem
        gridArea="2 / 3 / 3 / 4"
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
        <MoreNews
          to="/news"
          header="Больше новостей"
          height="100%"
          icon={<ArrowUp width={72} height={72} />}
        />
      </GridItem>
    </Grid>
  );
};
