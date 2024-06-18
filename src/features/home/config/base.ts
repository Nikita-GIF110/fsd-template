import type { News } from "features/home/models";
import type { SocialLink } from "features/home/models";


export const NEWS_LIST: Array<News> = [
  {
    isNew: true,
    header: "Обновление системы фракций",
    subHeader: "Представляем вам обновленную систем фракция",
    to: "/",
    image: {
      src: "/src/assets/images/home/news-image-1.png",
      alt: "",
      title: "",
    },
  },
  {
    isNew: true,
    header: "Обычная новость",
    subHeader: "Что бы увидеть новые возможности",
    to: "/",
    image: {
      src: "/src/assets/images/home/news-image-2.png",
      alt: "",
      title: "",
    },
  },
  {
    isNew: true,
    header: "Обычная новость",
    subHeader: "Что бы увидеть новые возможности",
    to: "/",
    image: {
      src: "/src/assets/images/home/news-image-3.png",
      alt: "",
      title: "",
    },
  },
  {
    isNew: true,
    header: "Обычная новость",
    subHeader: "Что бы увидеть новые возможности",
    to: "/",
    image: {
      src: "/src/assets/images/home/news-image-1.png",
      alt: "",
      title: "",
    },
  },
];

export const LINKS: Array<SocialLink> = [
  {
    to: "/",
    label: "YouTube",
    id: "youTube",
  },
  {
    to: "/",
    label: "Discord",
    id: "discord",
  },
  {
    to: "/",
    label: "Vk",
    id: "vk",
  },
];
