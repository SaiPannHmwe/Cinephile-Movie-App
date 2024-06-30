import { PlayCircleIcon } from "@heroicons/react/24/solid";

function HeaderCard({ movie }) {
  return (
    <div className="w-full h-screen relative">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
        className="w-full h-full object-cover"
      />

      <div className="dark-hv"> </div>
      <div className="text-box">
        <h1 className="text-5xl font-extrabold">{movie.original_title}</h1>
        <p className="text-lg font-medium">{movie.overview}</p>
        <button className="flex items-center bg-white text-black px-6 py-3 rounded-md font-medium text-lg mt-2">
          <PlayCircleIcon className="w-6 h-6 inline-block me-2" />
          Watch Now
        </button>
      </div>
    </div>
  );
}

export default HeaderCard;
