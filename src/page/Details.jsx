import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PlayIcon } from "@heroicons/react/24/solid";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    getMovie();
    // eslint-disable-next-line
  }, [id]);

  const getMovie = async () => {
    const KEY = "7113f19ed773b92b5651ab16ff2cadff";
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
    );
    const data = await response.json();
    setMovie(data);
    
  };
  return (
    <div>
      {movie && (
        <section className="w-full h-screen relative">
          <div className="h-2/3 relative">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="dark-hv"></div>
          </div>
          <div className="detail-container">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.original_title}
              title={movie.original_title}
              className="w-52 object-cover rounded-md"
            />
            <div className="ms-4 text-white">
              <h1 className="text-4xl font-semibold">{movie.original_title}</h1>
              <h1 className="text-lg mb-2">
                <span className="text-red-600 font-medium">Runtime :</span>{" "}
                {movie.runtime} min
              </h1>
              {movie.genres &&
                movie.genres.map((genre) => {
                  return (
                    <span
                      key={genre.id}
                      className="bg-red-600 rounded-md px-2 py-1 me-2"
                    >
                      {genre.name}
                    </span>
                  );
                })}
              <h1 className="text-xl mt-2 mb-5">{movie.overview}</h1>
              <Link
                to={movie.homepage}
                className="text-lg font-bold rounded-md border-2 border-red-600 py-1 px-2 "
              >
                <PlayIcon className="w-6 h-6 inline-block text-red-600" />
                Watch Now
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Details;
