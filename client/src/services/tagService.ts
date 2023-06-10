import { Tag } from "@interfaces";
import { axiosInstance } from "@utils/fetcher";

export const createTag = ({ name, color, domainId, readonly }: Partial<Tag>) => {
  return axiosInstance.post("/tag", { name, color, domainId, readonly });
};

export const deleteTag = (id: string) => {
  return axiosInstance.delete(`/tag/${id}`);
};

export const updateTag = ({ id, name, color }: Partial<Tag>) => {
  return axiosInstance.put(`/tag/${id}`, { name, color });
};