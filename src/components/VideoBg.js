import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBg = (movieId) => {

  const trailerVideo = useSelector(store=> store.movies?.trailerVideo)

  useMovieTrailer(movieId);
  return (
    <div className="">
      <iframe
      className="w-scree aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key +"?autoplay=1&mute=1&controls=0&loop=1=1&rel=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBg;
