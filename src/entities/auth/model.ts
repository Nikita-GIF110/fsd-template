import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { auth } from "./api";
import type { Store, Actions } from "./entities";
import { toast, BASE_TOAST_CONFIG } from "shared/ui/toast";
import { TOKEN_NAME } from "shared/config/base";

export const useAuth = create<Store & Actions>()(
  immer((set) => {
    return {
      token: null,
      isAuthorized: false,
      signIn: async (fields) => {
        try {
          const token = await auth.signIn(fields);
          window.localStorage.setItem(TOKEN_NAME, token);
          set({ token, isAuthorized: !!token });
        } catch (error) {
          toast({
            ...BASE_TOAST_CONFIG,
            description: `ERROR in signIn ${error}`,
            status: "error",
          });
        }
      },
      logOut: () => {
        window.localStorage.removeItem(TOKEN_NAME);
        set({ isAuthorized: false, token: null });
      },
      checkUser: () => {
        const token = window.localStorage.getItem(TOKEN_NAME);
        set({ token, isAuthorized: !!token });
      },
    };
  })
);
