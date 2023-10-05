import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Switch, Link, RouterProvider } from "react-router-dom";

import Splash from "./verification/Splash";
import Login from "./verification/Login";
import SignUp from "./verification/SignUp";

import MyPage from "./inform/MyPage";
import MyPageSale from "./inform/MyPageSale";
import Information from "./inform/Information";
import Reservation from "./reservation/Reservation";
import ReviewMain from "./review/ReviewMain";

import Tournament from "./tournament/Tournament";
import TournamentVote from "./tournament/TournamentVote";

import MenuMain from "./menu/MenuMain";
import Cart from "./menu/Cart";
import CartBookmark from "./menu/CartBookmark";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Splash />} /> {/* 첫 번째 페이지 */}
          <Route path="/login" element={<Login />} />
          <Route path="/review" element={<ReviewMain />} /> {/* 후기게시판 메인 페이지 */}
          <Route path="/signup" element={<SignUp />} /> {/* 회원가입 */}
          <Route path="/mypage" element={<MyPage />} /> {/* 마이페이지 - 학생/교직원 */}
          <Route path="/mypagesale" element={<MyPageSale />} /> {/* 마이페이지 - 판매자 */}
          <Route path="/information" element={<Information />} /> {/* 내 정보 */}
          <Route path="/menu" element={<MenuMain />} /> {/* 메뉴 메인 페이지 */}
          <Route path="/reservation" element={<Reservation />} /> {/* 자리 예약 */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/tournament" element={<Tournament />} />
          <Route path="/votes" element={<TournamentVote />} />
          <Route path="/bookmark" element={<CartBookmark />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
