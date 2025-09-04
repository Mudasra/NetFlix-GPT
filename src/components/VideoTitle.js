import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const VideoTitle = ({ title, overview }) => {
  const langKey = useSelector((store) => store.config.lang);

  return (
<div className="absolute inset-0 bg-gradient-to-r from-black text-white flex items-end md:items-center px-4 sm:px-8 lg:px-12 pt-6 md:pt-16 lg:pt-24">
  <div className="w-full md:w-3/4 lg:w-2/3 sm:pt-16">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">{title}</h1>

    <p className="mt-3 text-xs sm:text-sm md:text-base lg:text-base w-full sm:w-3/4 md:w-2/3 line-clamp-3">
      {overview}
    </p>

    <div className="mt-4 flex flex-col sm:flex-row gap-3">
      <button className="bg-white text-black text-sm sm:text-base px-5 py-2 rounded-md hover:bg-opacity-80 transition">
        ▶ {lang[langKey].play}
      </button>
      <button className="bg-gray-500 bg-opacity-50 text-white text-sm sm:text-base px-5 py-2 rounded-md hover:bg-opacity-70 transition">
        {lang[langKey].more_Info}
      </button>
    </div>
  </div>
</div>

  );
};

export default VideoTitle;
