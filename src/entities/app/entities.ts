import type { Nullable } from "entities/utils";

export interface Store {
  appRady: boolean;
  language: Nullable<string>;
}

export type Actions = {
  appRun: () => void;
};
