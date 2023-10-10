const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

// 라우트 모듈들 import
const users = require("./routes/users");
const posts = require("./routes/posts");
const my_page = require("./routes/my_page");
const seat_reserve = require("./routes/seat_reserve");
const user_change = require("./routes/user_change");
const bookmark = require("./routes/bookmark");
const shopping = require("./routes/shopping");
const order = require("./routes/order");
const saler_page = require("./routes/saler/saler_page");
const saler_change = require("./routes/saler/saler_change");
const saler_menu = require("./routes/saler/menu");

const app = express();

// Body 파서 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// 허용 가능한 호스트를 설정
const allowedHosts = ["https://ddukbab.netlify.app", "https://ddukbab-160bd6fc13f3.herokuapp.com"];

// CORS 설정
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedHosts.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

/*
// CORS 설정
app.use(
  cors({
    origin: ["https://ddukbab.netlify.app", "https://ddukbab-160bd6fc13f3.herokuapp.com"],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization,Accept",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHosts: ["ddukbab.netlify.app", "ddukbab-160bd6fc13f3.herokuapp.com"],
  })
);

// 프리플라이트 요청에 대한 응답을 처리하기 위한 미들웨어 추가
app.options("*", (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": ["https://ddukbab.netlify.app", "https://ddukbab-160bd6fc13f3.herokuapp.com"],
    "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "Access-Control-Allow-Headers": "Content-Type,Authorization,Accept",
    "Access-Control-Allow-Credentials": true,
  });
  res.status(204).end();
});
*/

// API 라우트 추가
app.use("/api", users);
app.use("/api/users", user_change);
app.use("/api/users", my_page);
app.use("/api/users/reservation", seat_reserve);
app.use("/api/users/posts", posts);
app.use("/api/users/bookmarks", bookmark);
app.use("/api/users/shopping", shopping);
app.use("/api/users/order", order);

app.use("/api/salers", saler_menu);
app.use("/api/salers", saler_page);
app.use("/api/salers", saler_change);

// 정적 파일 서빙
app.use(express.static(path.join(__dirname, "public")));

// 서버 시작
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
