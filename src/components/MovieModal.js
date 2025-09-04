import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const MovieModal = ({ movie, onClose }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
          API_OPTIONS
        );
        const data = await res.json();
        const trailer = data.results.find(
          (v) => v.type === "Trailer" && v.site === "YouTube"
        );
        setTrailerKey(trailer ? trailer.key : null);
      } catch (err) {
        console.error("Error fetching trailer:", err);
      }
    };

    if (movie) fetchTrailer();
  }, [movie]);

  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl p-6 max-w-2xl w-full relative overflow-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold"
        >
          &times;
        </button>

        {trailerKey ? (
          <iframe
            title={`${movie.title} Trailer`}
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="rounded-lg mb-4"
          />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-72 object-cover rounded-lg mb-4"
          />
        )}

        <h2 className="text-white text-2xl font-bold mb-2">{movie.title}</h2>
        <p className="text-gray-400 mb-1">Release Date: {movie.release_date}</p>
        <p className="text-gray-300 mb-2">Rating: {movie.vote_average} / 10</p>
        <p className="text-gray-300">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieModal;
