import { useDispatch } from "react-redux";
import {  addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from '../utils/constants'

const useTopRatedMovies = () => {
    //  fetch data from tmdb api an update the store
  const dispatch = useDispatch();

  const GetTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1' , API_OPTIONS);

    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  }

  useEffect(() => {
    GetTopRatedMovies();
  },[])
}

export default useTopRatedMovies;
