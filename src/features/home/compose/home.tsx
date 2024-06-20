import { AboutBlock } from "features/home/ui/about";
import { Intro } from "features/home/ui/intro";
import { NewsBlock } from "features/home/ui/news";
import { Header } from "features/home/ui/header";
import { NewInStore } from "features/home/ui/new-in-store";
import { StartPlay } from "features/home/ui/start-play";
import { ServersBlock, ServersHeader } from "features/home/ui/servers";
import {
  NEWS_LIST,
  SOCIAL_LINK_LIST,
  SERVERS_LIST,
} from "features/home/config/base";
import { Container } from "shared/ui/container";
import newInStoreImage from "assets/images/home/new-in-store-image.png";
import { Box } from "@chakra-ui/react";

const Home = () => (
  <>
    <Intro />

    <Container padding={0} marginBottom="52px">
      <Header
        title="Последние новости"
        subtitle="Следите за последними новостями мира 1WRP"
        subtitleLeftDecor
        margin="44px 0"
      />

      <NewsBlock news={NEWS_LIST} />

      <Box marginTop="20px">
        <NewInStore
          header="Новинки в магазине"
          subHeader="Заходите в магазин что бы увидеть новые предметы"
          image={newInStoreImage}
        />
      </Box>
    </Container>

    <Container padding={0} marginBottom="52px">
      <AboutBlock links={SOCIAL_LINK_LIST} />
    </Container>

    <ServersHeader header="Сервера 1wrp" marginBottom="44px" />

    <Container padding={0} marginBottom="138px">
      <ServersBlock servers={SERVERS_LIST} />
    </Container>

    <Container padding={0} marginBottom="52px">
      <StartPlay header="Как начать играть в" />
    </Container>
  </>
);

export default Home;
