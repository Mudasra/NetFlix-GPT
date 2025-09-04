import { useDispatch, useSelector } from "react-redux";
import {  addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS, SUPPORTED_LANGUAGES } from '../utils/constants'

const useTopRatedMovies = () => {
    //  fetch data from tmdb api and update the store
  const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang);
const langCode = SUPPORTED_LANGUAGES.find(l => l.identifier === langKey)?.tmdbCode || "en-US";


 const TopRatedMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const GetTopRatedMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=1&language=${langCode}` , API_OPTIONS);

    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  }

  useEffect(() => {
   !TopRatedMovies && GetTopRatedMovies();
  },[])
}

export default useTopRatedMovies;
