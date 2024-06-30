import React, { useEffect, useState } from "react";
import Card from "./Card";

function CardContainer({ title, url }) {
  console.log(url)
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    getPopularMovies();
    // eslint-disable-next-line
  }, []);

  const getPopularMovies = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setPopularMovies(data.results);
  };

  return (
    <section className="px-8 my-10">
      <h1 className="text-4xl font-bold font-mono text-white">{title}</h1>
      <div className="grid grid-cols-10 gap-3 mt-3">
        {popularMovies.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </div>
    </section>
  );
}

export default CardContainer;
