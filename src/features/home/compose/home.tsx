import { About } from "features/home/ui/about";
import { Intro } from "features/home/ui/intro";
import { NewsBlock } from "features/home/ui/news";
import { Header } from "features/home/ui/header";
import { NewInStore } from "features/home/ui/new-in-store";
import { NEWS_LIST, LINKS } from "features/home/config/base";
import { Container } from "shared/ui/container";
import newInStoreImage from "assets/images/home/new-in-store-image.png";
import { Box } from "@chakra-ui/react";

const Home = () => (
  <>
    <Intro />

    <Container padding={0}>
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

    <Container padding={0} marginTop="52px" marginBottom="52px">
      <About links={LINKS} />
    </Container>
  </>
);

export default Home;
