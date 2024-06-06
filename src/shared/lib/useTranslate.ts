import { i18nConfig } from "shared/config/i18n";
import { useTranslate as useTranslateBase } from "shared/lib/i18n";

export const useTranslate = useTranslateBase<typeof i18nConfig>;
