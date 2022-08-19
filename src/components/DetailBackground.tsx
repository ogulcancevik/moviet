import { movieSelector } from '@/app/selectors'
import { IMG_PATH } from '@/services/baseUrls'
import React from 'react'
import { useSelector } from 'react-redux'
import { useWindowSize } from 'usehooks-ts'

const DetailBackground: React.FC = () => {
  const { movieDetail } = useSelector(movieSelector)
  const { width } = useWindowSize()

  return (
    <div className='absolute w-screen h-screen -z-10'>
      <img
        className="w-full h-full"
        src={`${IMG_PATH}/${width >= 1192 ? movieDetail.backdrop_path : movieDetail.poster_path}`}
      />
      <div className="absolute h-screen w-screen bg-black top-0 bottom-0 right-0 left-0 bg-opacity-75 swiper-shadow"></div>
    </div>
  )
}

export default DetailBackground
