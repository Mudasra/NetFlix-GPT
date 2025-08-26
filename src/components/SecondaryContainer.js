import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  const langKey = useSelector((store) => store.config.lang);
  
  return (
    <div className='bg-[#2a2a2a]'>
      <div className='-mt-56 relative z-20'>
        <MovieList title= {lang[langKey].Now_Playing} movies={movies.nowPlayingMovies}/>
        <MovieList title= {lang[langKey].Top_Rated_Movies} movies={movies.TopRatedMovies}/>
        <MovieList title= {lang[langKey].Popular_Movies} movies={movies.PopularMovies}/>
        <MovieList title= {lang[langKey].Upcoming_Movies} movies={movies.UpcomingMovies}/>
        <MovieList title= {lang[langKey].Horror_Movies} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer









// import React from 'react'
// import MovieList from './MovieList'
// import { useSelector } from 'react-redux'
// import lang from '../utils/languageConstants';

// const SecondaryContainer = () => {
//   const movies = useSelector(store => store.movies);

//   const langKey = useSelector((store) => store.config.lang);
  
//   return (
//     <div className='bg-[#141414] px-2 sm:px-4 md:px-6 lg:px-12 pb-8bg-[#2a2a2a] pt-8 sm:pt-12 md:pt-16'>
//       <div className='mt-6 space-y-8'>
//       <MovieList title= {lang[langKey].Now_Playing} movies={movies.nowPlayingMovies}/>
//       <MovieList title= {lang[langKey].Top_Rated_Movies} movies={movies.TopRatedMovies}/>
//       <MovieList title= {lang[langKey].Popular_Movies} movies={movies.PopularMovies}/>
//       <MovieList title= {lang[langKey].Upcoming_Movies} movies={movies.UpcomingMovies}/>
//       <MovieList title= {lang[langKey].Horror_Movies} movies={movies.nowPlayingMovies}/>
//       </div>
//     </div>
//   )
// }

// export default SecondaryContainer
