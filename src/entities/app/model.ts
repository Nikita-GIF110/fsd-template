import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { LANGUAGE_NAME, DEFAULT_LANGUAGE } from "shared/config/base";
import type { Store, Actions } from "./entities";

export const useApp = create<Store & Actions>()(
  immer((set) => ({
    appRady: false,
    language: "ru",
    appRun: () => {
      const selectedlanguage = window.localStorage.getItem(LANGUAGE_NAME);

      if (!selectedlanguage) {
        set({ language: DEFAULT_LANGUAGE });
        window.localStorage.setItem(LANGUAGE_NAME, DEFAULT_LANGUAGE);
      } else {
        set({ language: selectedlanguage });
      }

      set({ appRady: true });
    },
  }))
);
