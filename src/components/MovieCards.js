import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCards = ({posterPath}) => {
  return (
    <div>
       <img
      className="w-full h-72 object-cover rounded"
      src={IMG_CDN_URL + posterPath}
      alt="Movie Poster"
    />
    </div>
  )
}

export default MovieCards
