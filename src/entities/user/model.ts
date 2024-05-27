import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { user } from "./api";
import type { Store, Actions } from "./entities";
import { toast, BASE_TOAST_CONFIG } from "shared/ui/toast";

export const useUser = create<Store & Actions>()(
  immer((set) => {
    return {
      user: null,
      isLoaded: false,
      fetchUser: async (userId: string) => {
        try {
          const response = await user.get(userId);
          set({ user: response, isLoaded: true });
        } catch (error) {
          toast({
            ...BASE_TOAST_CONFIG,
            description: `ERROR in fetchUser: ${error}`,
            status: "error",
          });
        }
      },
      setUser: (user) => set({ user }),
    };
  })
);
