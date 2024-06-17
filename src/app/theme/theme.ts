import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { Textarea } from "./components/textarea";
import { Modal } from "./components/modal";
import { Select } from "./components/select";
import { sizes } from "./sizes";
import { colors } from "shared/config/colors";

export const theme = extendTheme({
  fonts: {
    body: "'Halvar Breit Blk', sans-serif",
    heading: "'Halvar Eng XBd', sans-serif",
  },
  radii: {
    none: "0",
    sm: "0.125rem",
    base: "300px",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  sizes,
  colors,
  components: { Button, Input, Textarea, Modal, Select },
  fonts: {
    body: "Halvar Breitschrift, system-ui, sans-serif",
  },
});
