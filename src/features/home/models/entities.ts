export interface News {
  isNew: boolean;
  header: string;
  subHeader: string;
  to: string;
  image: {
    src: string;
    alt: string;
    title: string;
  };
}

export interface SocialLink {
  id: "youTube" | "discord" | "vk";
  to: string;
  label: string;
}
