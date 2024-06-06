import { I18N, createPluralize } from "shared/lib/i18n";
import { en } from "assets/keysets/en-keyset";
import { ru } from "assets/keysets/ru-keyset";

const pluralizeEn = createPluralize("en");
const pluralizeRu = createPluralize("ru");

export const i18nConfig = new I18N({
  defaultLang: "ru",
  languages: {
    en: {
      keyset: en,
      pluralize: pluralizeEn,
    },
    ru: {
      keyset: ru,
      pluralize: pluralizeRu,
    },
  },
});
