import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HeaderCard from "./HeaderCard";
import { useState, useEffect } from "react";

function Header() {
  const [relatedMovies, setRelatedMovies] = useState([]);

  useEffect(() => {
    getRelatedMovies();
  }, []);

  const KEY = "7113f19ed773b92b5651ab16ff2cadff";
  const getRelatedMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US`
    );
    const data = await response.json();
    setRelatedMovies(data.results);
    console.log(data.results)
  };

  return (
    <section className="">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 2000,
        }}
      >
        {relatedMovies.map((movie) => {
          return (
            <SplideSlide key={movie.id}>
              <HeaderCard movie={movie} />
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
}

export default Header;
