import axios, { AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error.response.data);
  }
);

export const fetcher = (url: any, config?: AxiosRequestConfig) => {
  return axiosInstance.get(url, config).then((res) => res.data);
};
