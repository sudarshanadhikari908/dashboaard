import axios from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const axiosInstance = axios.create({
  // It is better to put the base url in .env file
  baseURL: "https://jp-dev.cityremit.global/web-api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + cookies.get("token"),
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
