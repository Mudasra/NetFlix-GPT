import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_IMG } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
      <div className="absolute top-1 -z-10">
        <img
          className=""
          src={BG_IMG}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-transparent pointer-events-none to-black/95 z-10"></div>
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch;
