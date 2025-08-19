import { useDispatch } from "react-redux";
import {  addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from '../utils/constants'

const useUpcomingMovies = () => {
    //  fetch data from tmdb api an update the store
  const dispatch = useDispatch();

  const GetUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1' , API_OPTIONS);

    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  }

  useEffect(() => {
    GetUpcomingMovies();
  },[])
}

export default useUpcomingMovies;
