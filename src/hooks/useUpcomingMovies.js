import { useDispatch, useSelector } from "react-redux";
import {  addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS, SUPPORTED_LANGUAGES } from '../utils/constants'

const useUpcomingMovies = () => {
    //  fetch data from tmdb api and update the store
  const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang);
const langCode = SUPPORTED_LANGUAGES.find(l => l.identifier === langKey)?.tmdbCode || "en-US";

 const UpcomingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const GetUpcomingMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?page=1&language=${langCode}` , API_OPTIONS);

    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  }

  useEffect(() => {
   !UpcomingMovies && GetUpcomingMovies();
  },[])
}

export default useUpcomingMovies;
