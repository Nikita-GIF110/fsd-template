import type { AxiosRequestConfig } from "axios";
import { instance } from "shared/api";
import type { UserEntity } from "./entities";

const URI = "users";

export const user = {
  get: async (id: string, config?: AxiosRequestConfig<UserEntity>) => {
    const response = await instance().get<UserEntity>(`${URI}/${id}`, config);
    return response.data;
  },
};
