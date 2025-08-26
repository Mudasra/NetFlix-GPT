import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBg from './VideoBg';

const MainContainer = () => {
  
    const movies = useSelector ((store) => store.movies?.nowPlayingMovies);

   if(!movies) return;

    const mainMovie = movies[4];
    // console.log(mainMovie);

    const {original_title, overview , id} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview = {overview}/> 
      <VideoBg movieId={id}/>
    </div>
  )
}

export default MainContainer






// import { useSelector } from 'react-redux';
// import VideoTitle from './VideoTitle';
// import VideoBg from './VideoBg';

// const MainContainer = () => {
//   const movies = useSelector((store) => store.movies?.nowPlayingMovies);

//   if (!movies || movies.length === 0) return null;

//   const mainMovie = movies[4] || movies[0];
//   const { original_title, overview, id } = mainMovie;

//   return (
//     <div className="relative w-full h-[80vh] md:h-[90vh] lg:h-[100vh] overflow-hidden">
//       {/* Video / background image */}
//       <VideoBg movieId={id} />

//       {/* Title & overview overlay */}
//       <div className="absolute bottom-8 md:bottom-16 lg:bottom-24 left-4 md:left-12 lg:left-24 text-white max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
//         <VideoTitle title={original_title} overview={overview} />
//       </div>
//     </div>
//   );
// };

// export default MainContainer;
