import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://192.168.9.110:8000/api/",
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use((config) => {
//   const getCookie = (name: string) => {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop()?.split(";").shift();
//     return null;
//   }
//   const csrfToken = getCookie("csrftoken");
//   if (csrfToken && config.headers) {
//     config.headers["X-CSRFToken"] = csrfToken;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });
export default api;
