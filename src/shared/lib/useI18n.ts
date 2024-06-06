import { i18nConfig } from "shared/config/i18n";
import { useI18N as useI18nBase } from "shared/lib/i18n";

export const useI18N = useI18nBase<typeof i18nConfig>;
