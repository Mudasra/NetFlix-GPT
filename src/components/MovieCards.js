import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath, movie, onClick }) => {
  return (
    <div
      onClick={onClick ? () => onClick(movie) : undefined}
      className="cursor-pointer transform hover:scale-105 transition-all duration-300"
    >
      <img
        className="w-full h-72 object-cover rounded"
        src={IMG_CDN_URL + posterPath}
        alt={movie?.title || "Movie Poster"}
      />
    </div>
  );
};

export default MovieCards;