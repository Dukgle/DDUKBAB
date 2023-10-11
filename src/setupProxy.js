// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://ddukbab-160bd6fc13f3.herokuapp.com", // 백엔드 주소 설정
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // 하위 url 초기화
      },
    })
  );
};
