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











// import React from "react";
// import MovieCards from "./MovieCards";

// const MovieList = ({ title, movies }) => {
//   return (
//     <div className="pl-4 sm:pl-8 md:pl-12 mb-6">
//       <h1 className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-3">
//         {title}
//       </h1>
//       <div className="flex overflow-x-auto space-x-3 sm:space-x-4 md:space-x-6 no-scrollbar pb-2">
//         {movies &&
//           movies.map((movie) => (
//             <div
//               key={movie.id}
//               className="flex-shrink-0 w-36 sm:w-44 md:w-48 lg:w-52"
//             >
//               <MovieCards posterPath={movie.poster_path} />
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default MovieList;
