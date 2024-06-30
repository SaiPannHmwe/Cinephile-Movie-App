import React from "react";
import Header from "../component/Header";
import CardContainer from "../component/CardContainer";

function Upcoming() {
  const KEY = "7113f19ed773b92b5651ab16ff2cadff";
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US`;
  return (
    <div>
      <Header />
      <CardContainer title={"Upcoming"} url={url} />
    </div>
  );
}

export default Upcoming;
