import React, { useState } from "react";
import MovieCards from "./MovieCards";
import MovieModal from "./MovieModal";

const MovieList = ({ title, movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  if (!movies || movies.length === 0) return null;

  return (
    <div className="mb-8 px-6">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">
        {title}
      </h2>

      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
        {movies
          .filter((movie) => movie.poster_path) // skip movies without posters
          .map((movie) => (
            <div
              key={movie.id}
              onClick={() => setSelectedMovie(movie)}
              className="flex-shrink-0 w-36 sm:w-40 md:w-48 cursor-pointer"
            >
              <MovieCards posterPath={movie.poster_path} />
            </div>
          ))}
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default MovieList;
