import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from '../utils/constants'

const useNowPlayingMovies = () => {
    //  fetch data from tmdb api an update the store
  const dispatch = useDispatch();

  const GetNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1' , API_OPTIONS);

    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() => {
    GetNowPlayingMovies();
  },[])
}

export default useNowPlayingMovies;
