import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    <div className='bg-[#2a2a2a]'>
      <div className='-mt-56 relative z-20'>
      <MovieList title= {"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title= {"Top Rated Movies"} movies={movies.TopRatedMovies}/>
      <MovieList title= {"Popular Movies"} movies={movies.PopularMovies}/>
      <MovieList title= {"Upcoming Movies"} movies={movies.UpcomingMovies}/>
      <MovieList title= {"Horror Movies"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
