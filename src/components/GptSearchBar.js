import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS , BG_IMG } from "../utils/constants";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [query, setQuery] = useState("");

  const handleGPTSearch = async () => {
    const searchValue = searchText.current.value.trim();
    setQuery(searchValue); // update query state
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
      className={`flex flex-col items-center mt-12 w-full min-h-screen transition-all duration-500 p-4 sm:p-6 md:p-8 lg:p-12 ${
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
      {/* Search Bar */}
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

      {/* Loading Indicator */}
      {loading && <p className="text-white mt-4 text-sm sm:text-base">Loading movies...</p>}

      {/* Movie Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 w-full max-w-6xl transition-all duration-500">
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => setSelectedMovie(movie)}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
          >
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 sm:h-72 md:h-80 object-cover"
              />
            ) : (
              <div className="w-full h-64 sm:h-72 md:h-80 flex items-center justify-center bg-gray-700 text-white text-sm sm:text-base">
                No Image
              </div>
            )}
            <div className="p-3 sm:p-4">
              <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg">{movie.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">{movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for selected movie */}
      {selectedMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 sm:p-6">
          <div className="bg-gray-900 rounded-xl p-4 sm:p-6 md:p-8 max-w-xl w-full relative overflow-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              &times;
            </button>
            {selectedMovie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                alt={selectedMovie.title}
                className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-lg mb-4"
              />
            )}
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              {selectedMovie.title}
            </h2>
            <p className="text-gray-400 mb-1 sm:mb-2 text-sm sm:text-base">
              Release Date: {selectedMovie.release_date}
            </p>
            <p className="text-gray-300 mb-2 text-sm sm:text-base">
              Rating: {selectedMovie.vote_average} / 10
            </p>
            <p className="text-gray-300 text-sm sm:text-base">{selectedMovie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;




















// import React, { useRef } from "react";
// import lang from "../utils/languageConstants";
// import { useSelector } from "react-redux";
// import openAI from "../utils/openAI";
// import { API_OPTIONS } from "../utils/constants";


// const GptSearchBar = () => {
//   const langKey = useSelector((store) => store.config.lang);
//   const searchText = useRef(null);

//   const handleGPTSearch =async () => {
//     console.log(searchText.current.value);

//    const searchMovieTMDB = async (movie) => {
//   const data = await fetch(
//     "https://api.themoviedb.org/3/search/movie?query=" +
//       movie +
//       "&include_adult=false&language=en-US&page=1",
//     API_OPTIONS
//   );

//   const json = await data.json();

// return json.results;
// };
//   }




//   //   const gptQuesry = "Act as a movie recommendation system and suggest some movies for the query : " + searchText.current.value + ". only give names of 5 movies, make it comma seperated, example: Train to busan, fabricated city, oldboy, the host , parasite. i want my result to be like this.";

//   //   const GptResults = await openAI.chat.completions.create({
//   //   model: "gpt-3.5-turbo",
//   //   messages: [
//   //     { role: "user", content: gptQuesry },
//   //   ],
//   // });
//   //   console.log(GptResults.choices[0].message);

//   // }


//   return (
//     <div className="flex justify-center mt-44 z-20">
//       <form
//         onSubmit={(e) => e.preventDefault()}
//         className="bg-black bg-opacity-80 p-6 rounded-xl flex space-x-3 w-full max-w-2xl"
//       >
//         <input
//         ref={searchText}
//           className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           type="text"
//           placeholder={lang[langKey].gptSearchPlaceholder}
//         />
//         <button
//           type="submit"
//           onClick={handleGPTSearch}
//           className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition"
//         >
//           {lang[langKey].search}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default GptSearchBar;







// import React, { useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import { API_OPTIONS , BG_IMG } from "../utils/constants";
// import lang from "../utils/languageConstants";

// const GptSearchBar = () => {
//   const langKey = useSelector((store) => store.config.lang);
//   const searchText = useRef(null);
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [query, setQuery] = useState("");

//   const handleGPTSearch = async () => {
//     const searchValue = searchText.current.value.trim();
//     setQuery(searchValue); // update query state
//     if (!searchValue) return;

//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
//           searchValue
//         )}&include_adult=false&language=en-US&page=1`,
//         API_OPTIONS
//       );

//       const data = await response.json();
//       setMovies(data.results || []);
//     } catch (error) {
//       console.error("Error fetching movies:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className={`flex flex-col items-center mt-12 w-full min-h-screen transition-all duration-500 p-6 ${
//         query ? "bg-gray-900" : ""
//       }`}
//       style={
//         !query
//           ? {
//               backgroundImage: `url(${BG_IMG})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }
//           : {}
//       }
//     >
//       {/* Search Bar */}
//       <form
//         onSubmit={(e) => e.preventDefault()}
//         className="bg-black bg-opacity-80 p-6 rounded-xl flex space-x-3 w-full max-w-2xl"
//       >
//         <input
//           ref={searchText}
//           onChange={() => setQuery(searchText.current.value)}
//           className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           type="text"
//           placeholder={lang[langKey].gptSearchPlaceholder}
//         />
//         <button
//           type="submit"
//           onClick={handleGPTSearch}
//           className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition"
//         >
//           {lang[langKey].search}
//         </button>
//       </form>

//       {/* Loading Indicator */}
//       {loading && <p className="text-white mt-4">Loading movies...</p>}

//       {/* Movie Results */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full max-w-5xl transition-all duration-500">
//         {movies.map((movie) => (
//           <div
//             key={movie.id}
//             onClick={() => setSelectedMovie(movie)}
//             className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
//           >
//             {movie.poster_path ? (
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//                 className="w-full h-72 object-cover"
//               />
//             ) : (
//               <div className="w-full h-72 flex items-center justify-center bg-gray-700 text-white">
//                 No Image
//               </div>
//             )}
//             <div className="p-4">
//               <h3 className="text-white font-semibold">{movie.title}</h3>
//               <p className="text-gray-400 text-sm mt-1">{movie.release_date}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal for selected movie */}
//       {selectedMovie && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//           <div className="bg-gray-900 rounded-xl p-6 max-w-xl w-full relative">
//             <button
//               onClick={() => setSelectedMovie(null)}
//               className="absolute top-4 right-4 text-white text-2xl font-bold"
//             >
//               &times;
//             </button>
//             {selectedMovie.poster_path && (
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
//                 alt={selectedMovie.title}
//                 className="w-full h-96 object-cover rounded-lg mb-4"
//               />
//             )}
//             <h2 className="text-white text-2xl font-bold mb-2">
//               {selectedMovie.title}
//             </h2>
//             <p className="text-gray-400 mb-2">
//               Release Date: {selectedMovie.release_date}
//             </p>
//             <p className="text-gray-300 mb-2">
//               Rating: {selectedMovie.vote_average} / 10
//             </p>
//             <p className="text-gray-300">{selectedMovie.overview}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GptSearchBar;











