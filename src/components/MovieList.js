import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div>
      <div className="pl-12">
        <h1 className="text-xl text-white  font-bold mb-2">{title}</h1>
        <div className="flex overflow-x-auto space-x-4 no-scrollbar">
          {movies &&
            movies.map((movie) => (
              <div key={movie.id} className="flex-shrink-0 w-48">
                <MovieCards posterPath={movie.poster_path} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

