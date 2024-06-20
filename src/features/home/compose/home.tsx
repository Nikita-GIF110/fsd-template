import { AboutBlock } from "features/home/ui/about";
import { Intro } from "features/home/ui/intro";
import { NewsBlock } from "features/home/ui/news";
import { Header } from "features/home/ui/header";
import { NewInStore } from "features/home/ui/new-in-store";
import { StartPlay } from "features/home/ui/start-play";
import { ServersBlock, ServersHeader } from "features/home/ui/servers";
import { CharactersBlock } from "features/home/ui/characters";
import { Faq } from "features/home/ui/faq";
import { Contacts } from "features/home/ui/contacts";
import {
  NEWS_LIST,
  SOCIAL_LINK_LIST,
  SERVERS_LIST,
  CHARACTERS_GOVERNMENT_AGENCIES_LIST,
  CHARACTERS_STREER_GROUPS_AGENCIES_LIST,
  CHARACTERS_MAFIA_AGENCIES_LIST,
  QUESTIONS,
} from "features/home/config/base";
import { Container } from "shared/ui/container";
import newInStoreImage from "assets/images/home/new-in-store-image.png";
import { Box } from "@chakra-ui/react";
import "swiper/css";

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

    <Container padding={0} marginBottom="151px">
      <StartPlay header="Как начать играть в" />
    </Container>

    <Container padding={0} marginBottom="52px">
      <CharactersBlock
        government={CHARACTERS_GOVERNMENT_AGENCIES_LIST}
        groups={CHARACTERS_STREER_GROUPS_AGENCIES_LIST}
        mafia={CHARACTERS_MAFIA_AGENCIES_LIST}
      />
    </Container>

    <Container padding={0} marginBottom="52px">
      <Faq
        questions={QUESTIONS}
        header="появились вопросы или возникли проблемы?"
        description="Если вы не смогли найти ответ на свой вопрос из списка, то можете обратиться в нашу службу поддержки. Мы стараемся всегда улучшать нам проект что бы подарить вам как можно больше эмоций."
        linkText="чат поддержки"
        to="/questions"
      />
    </Container>

    <Contacts />

    {/* <Container padding={0} marginBottom="52px">
      
    </Container> */}
  </>
);

export default Home;
