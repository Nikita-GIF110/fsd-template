import type { Nullable } from "entities/utils";

export interface SignInFormFields {
  login: string;
  password: string;
}

export interface Store {
  token: Nullable<string>;
  isAuthorized: boolean;
}

export type Actions = {
  signIn: (fields: SignInFormFields) => Promise<void>;
  logOut: () => void;
  checkUser: () => void;
};
