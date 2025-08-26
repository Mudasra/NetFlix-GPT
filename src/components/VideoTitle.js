import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const VideoTitle = ({ title, overview }) => {
    const langKey = useSelector((store) => store.config.lang);

  return (
    <div className=' pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <div className="aspect-video">
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4 line-clamp-3 mb-5'>{overview}</p>
      <div className=''>
      <button className='bg-white p-4 px-12 text-xl text-black rounded-lg hover:bg-opacity-80'>▶ {lang[langKey].play}</button>
      <button className='bg-gray-500 mx-2 p-4 px-12 text-xl text-white rounded-lg bg-opacity-50'>{lang[langKey].more_Info}</button>
      </div>
      </div>
    </div>
  );
};

export default VideoTitle;
