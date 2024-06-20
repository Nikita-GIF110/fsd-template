import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Flex } from "@chakra-ui/react";
import type { CharactersEntity } from "features/home/models";
import { CharactersHeader } from "../ui/characters-header";
import { CharactersListHeader } from "../ui/characters-list-header";
import { CharacterTile } from "../ui/character-tile";
import { colors } from "shared/config/colors";

interface CharactersBlockProps {
  government: Array<CharactersEntity>;
  groups: Array<CharactersEntity>;
  mafia: Array<CharactersEntity>;
}

export const CharactersBlock = ({
  government = [],
  groups = [],
  mafia = [],
}: CharactersBlockProps) => (
  <Box>
    <CharactersHeader marginBottom="24px" />

    <Flex rowGap="40px" flexDirection="column">
      {/* Row start */}
      <Flex columnGap="20px" maxHeight="300px" paddingLeft="57px">
        <CharactersListHeader
          header="Государственные структуры"
          color={colors.violet.primary}
        />

        <Box minWidth="0%" flexGrow={1} height="300px">
          <Swiper slidesPerView={8} spaceBetween={20}>
            {government.map((character) => (
              <SwiperSlide key={character.id}>
                <CharacterTile {...character} gradientVariant="blue" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>
      {/* Row start */}

      {/* Row start */}
      <Flex columnGap="20px" maxHeight="300px" paddingLeft="57px">
        <CharactersListHeader
          header="Уличные группировки"
          color={colors.violet.primary}
        />

        <Box minWidth="0%" flexGrow={1} height="300px">
          <Swiper slidesPerView={3} spaceBetween={20}>
            {groups.map((character) => (
              <SwiperSlide key={character.id}>
                <CharacterTile
                  {...character}
                  gradientVariant="violet"
                  size="medium"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>
      {/* Row start */}

      {/* Row start */}
      <Flex columnGap="20px" maxHeight="300px" paddingLeft="57px">
        <CharactersListHeader
          header="Уличные группировки"
          color={colors.violet.primary}
        />

        <Box minWidth="0%" flexGrow={1} height="300px">
          <Swiper slidesPerView={3} spaceBetween={20}>
            {mafia.map((character) => (
              <SwiperSlide key={character.id}>
                <CharacterTile
                  {...character}
                  gradientVariant="red"
                  size="medium"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>
      {/* Row start */}
    </Flex>
  </Box>
);
