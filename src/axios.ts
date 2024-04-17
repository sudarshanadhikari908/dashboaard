import axios from "axios";

const axiosInstance = axios.create({
  // It is better to put the base url in .env file
  baseURL: "https://jp-dev.cityremit.global/web-api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
