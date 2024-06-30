import React from "react";
import Nav from "../component/Nav";
import { Route, Routes } from "react-router-dom";
import Popular from "../page/Popular";
import Upcoming from "../page/Upcoming";
import Details from "../page/Details";
import Search from "../page/Search";

function Main() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Popular />} />
        <Route element={<Upcoming />} path="/upcoming" />
        <Route element={<Details/>} path="/details/:id"></Route>
        <Route element={<Search/>} path="/search/:title"></Route>
      </Routes>
    </div>
  );
}

export default Main;
