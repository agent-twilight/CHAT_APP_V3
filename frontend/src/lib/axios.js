import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-app-v3-backend.onrender.com/" : "/api",
  withCredentials: true,
});
