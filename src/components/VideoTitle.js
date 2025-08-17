import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='pt-32 px-6'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
      <button className='bg-gray-500 p-4 px-12 text-xl text-white rounded-lg bg-opacity-50'>▶ Play</button>
      <button className='bg-gray-500 mx-2 p-4 px-12 text-xl text-white rounded-lg bg-opacity-50'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
