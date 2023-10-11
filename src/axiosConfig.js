// axiosConfig.js
import axios from "axios";

const instance = axios.create({
  //   baseURL: "process.env.REACT_APP_API_URL", // 백엔드 주소 설정
  withCredentials: true, // CORS 요청에 필요한 옵션
});

export default instance;
