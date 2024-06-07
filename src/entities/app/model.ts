import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { Store, Actions } from "./entities";

export const useApp = create<Store & Actions>()(
  immer((set) => ({
    appRady: false,
    appRun: () => set({ appRady: true }),
  }))
);
