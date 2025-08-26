import { useDispatch, useSelector } from "react-redux";
import {  addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS, SUPPORTED_LANGUAGES } from '../utils/constants'

const usePopularMovies = () => {
    //  fetch data from tmdb api an update the store
  const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang);
const langCode = SUPPORTED_LANGUAGES.find(l => l.identifier === langKey)?.tmdbCode || "en-US";


const PopularMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const GetPopularMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?page=1&language=${langCode}` , API_OPTIONS);

    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  }

  useEffect(() => {
   !PopularMovies && GetPopularMovies();
  },[])
}

export default usePopularMovies;
