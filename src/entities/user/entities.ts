import type { Nullable } from "entities/utils";

export interface UserEntity {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Store {
  user: Nullable<UserEntity>;
  isLoaded: boolean;
}

export type Actions = {
  fetchUser: (userId: string) => Promise<void>;
  setUser: (user: UserEntity) => void;
};
