import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  const langKey = useSelector((store) => store.config.lang);
  
  return (
    <div className='bg-[#2a2a2a]'>
      <div className='-mt-4 sm:-mt-20 md:-mt-16 lg:-mt-28  relative z-20'>
        <MovieList title= {lang[langKey].Now_Playing} movies={movies.nowPlayingMovies}/>
        <MovieList title= {lang[langKey].Top_Rated_Movies} movies={movies.TopRatedMovies}/>
        <MovieList title= {lang[langKey].Popular_Movies} movies={movies.PopularMovies}/>
        <MovieList title= {lang[langKey].Upcoming_Movies} movies={movies.UpcomingMovies}/>
        <MovieList title= {lang[langKey].Horror_Movies} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;












