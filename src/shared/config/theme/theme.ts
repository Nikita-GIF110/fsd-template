import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { Textarea } from "./components/textarea";
import { Modal } from "./components/modal";
import { sizes } from "./sizes";

export const theme = extendTheme({
  fonts: {
    body: "'Halvar Breit Blk', sans-serif",
    heading: "'Halvar Eng XBd', sans-serif",
  },
  sizes,
  colors,
  components: { Button, Input, Textarea, Modal },
});
