/*
import cors from "koa2-cors";

const express = require("express");
// const cors = require("cors");
const cors = require("koa2-cors");
const path = require("path");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
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
// const port = process.env.PORT || 5000;

// Body 파서 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS 설정
const corsOptions = {
  origin: "https://ddukbab.netlify.app",
  credentials: true, // 필요한 경우 설정 (쿠키 및 기타 인증 정보를 전송하기 위함)
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// API 라우트 추가
app.use("/api", users);
app.use("/api/users", user_change);
app.use("/api/users", my_page);
app.use("/api/users/reservation", seat_reserve);
app.use("/api/users/posts", posts);
app.use("/api/users/bookmarks", bookmark);
app.use("/api/users/shopping", shopping);
app.use("/api/users/order", order); // 많은 수량으로 인해 자동적으로 품절 처리 ? 가능하면 구현

app.use("/api/salers", saler_menu);
app.use("/api/salers", saler_page);
app.use("/api/salers", saler_change);

// 서버 시작
app.listen(process.env.PORT, () => {
  console.log(`서버가 포트 ${process.env.PORT}에서 실행 중입니다.`);
});

app.use(express.static(path.join(__dirname, "public")));
*/

import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cookieParser from "cookie-parser";
import cors from "koa2-cors";
import serve from "koa-static";
import path from "path";

// 라우트 모듈들 import
import users from "./routes/users";
import posts from "./routes/posts";
import my_page from "./routes/my_page";
import seat_reserve from "./routes/seat_reserve";
import user_change from "./routes/user_change";
import bookmark from "./routes/bookmark";
import shopping from "./routes/shopping";
import order from "./routes/order";
import saler_page from "./routes/saler/saler_page";
import saler_change from "./routes/saler/saler_change";
import saler_menu from "./routes/saler/menu";

const app = new Koa();

// Body 파서 설정
app.use(bodyParser());
app.use(cookieParser());

// CORS 설정
app.use(
  cors({
    origin: "https://ddukbab.netlify.app",
    credentials: true,
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"],
  })
);

// API 라우트 추가
app.use(users.routes());
app.use(user_change.routes());
app.use(my_page.routes());
app.use(seat_reserve.routes());
app.use(posts.routes());
app.use(bookmark.routes());
app.use(shopping.routes());
app.use(order.routes());

app.use(saler_menu.routes());
app.use(saler_page.routes());
app.use(saler_change.routes());

// 정적 파일 서빙
app.use(serve(path.join(__dirname, "public")));

// 서버 시작
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
