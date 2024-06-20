import type { NewsEntity } from "features/home/models";
import type { SocialLinkEntity } from "features/home/models";
import type { ServerEntity } from "features/home/models";

export const NEWS_LIST: Array<NewsEntity> = [
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
];

export const SOCIAL_LINK_LIST: Array<SocialLinkEntity> = [
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

export const SERVERS_LIST: Array<ServerEntity> = [
  {
    id: 1,
    name: "сервер 1",
    onlineCount: 7457,
    registeredCount: 7457,
    link: "server1.oneroleplay.com:22005",
  },
  {
    id: 2,
    name: "сервер 1",
    onlineCount: 7457,
    registeredCount: 7457,
    link: "server1.oneroleplay.com:22005",
  },
  {
    id: 3,
    name: "сервер 1",
    onlineCount: 7457,
    registeredCount: 7457,
    link: "server1.oneroleplay.com:22005",
  },
  {
    id: 4,
    name: "сервер 1",
    onlineCount: 7457,
    registeredCount: 7457,
    link: "server1.oneroleplay.com:22005",
  },
  {
    id: 5,
    name: "сервер 1",
    onlineCount: 7457,
    registeredCount: 7457,
    link: "server1.oneroleplay.com:22005",
  },
  {
    id: 6,
    name: "сервер 1",
    onlineCount: 7457,
    registeredCount: 7457,
    link: "server1.oneroleplay.com:22005",
  },
];
