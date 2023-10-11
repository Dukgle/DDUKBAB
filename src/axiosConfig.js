// axiosConfig.js
import axios from "axios";

const instance = axios.create({
  baseURL: "", // baseURL을 비워두세요
  withCredentials: true, // CORS 요청에 필요한 옵션
});

export default instance;
