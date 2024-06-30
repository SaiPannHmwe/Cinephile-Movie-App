import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../component/Card";

function Search() {
  const { title } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getSearchMovie();
    // eslint-disable-next-line
  }, [title]);

  const getSearchMovie = async () => {
    const KEY = "7113f19ed773b92b5651ab16ff2cadff";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${title}&page=1&include_adult=false`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
    
  };

  return (
    <section className="px-8 my-10">
      <h1 className="text-4xl font-bold font-mono text-white">
        Search results for : {title}
      </h1>
      <div className="grid grid-cols-10 gap-3 mt-3">
        {movies.length &&
          movies.map((movie) => {
            return <Card movie={movie} key={movie.id} />;
          })}
      </div>
    </section>
  );
}

export default Search;
