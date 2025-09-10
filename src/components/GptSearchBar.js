import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS, BG_IMG } from "../utils/constants";
import lang from "../utils/languageConstants";
import MovieModal from "./MovieModal";
import MovieCards from "./MovieCards";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [query, setQuery] = useState("");

  const handleGPTSearch = async () => {
    const searchValue = searchText.current.value.trim();
    setQuery(searchValue);
    if (!searchValue) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          searchValue
        )}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`flex flex-col items-center mt-12 w-full min-h-screen transition-all duration-500 p-4 ${
        query ? "bg-gray-900" : ""
      }`}
      style={
        !query
          ? {
              backgroundImage: `url(${BG_IMG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black bg-opacity-80 p-4 sm:p-6 rounded-xl flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full max-w-2xl"
      >
        <input
          ref={searchText}
          onChange={() => setQuery(searchText.current.value)}
          className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm sm:text-base"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          type="submit"
          onClick={handleGPTSearch}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition text-sm sm:text-base"
        >
          {lang[langKey].search}
        </button>
      </form>

      {loading && (
        <p className="text-white mt-4 text-sm sm:text-base">
          Loading movies...
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 w-full max-w-6xl">
        {movies
          .filter((movie) => movie.poster_path || movie.backdrop_path)
          .map((movie) => (
            <MovieCards
              key={movie.id}
              posterPath={movie.poster_path || movie.backdrop_path}
              movie={movie}
              onClick={setSelectedMovie}
            />
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

export default GptSearchBar;
