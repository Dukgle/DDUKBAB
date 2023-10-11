// axiosConfig.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://ddukbab-160bd6fc13f3.herokuapp.com", // 백엔드 주소 설정
  withCredentials: true, // CORS 요청에 필요한 옵션
});

export default instance;
