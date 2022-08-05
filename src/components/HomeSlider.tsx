import { IMovie } from '@/app/modules/movie/movie.types'
import { movieSelector } from '@/app/selectors'
import React from 'react'
import { useSelector } from 'react-redux'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const HomeSlider = () => {
  const { popularMovies } = useSelector(movieSelector)
  return (
    <div className="relative">
      <Swiper
        autoplay={{
          delay: 4000
        }}
        speed={800}
        modules={[Autoplay]}
      >
        {popularMovies.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <SliderContent item={item} />
              <SliderImg src={item.backdrop_path} alt={item.title} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default HomeSlider

interface SliderImgProps {
  src: string;
  alt: string;
}
export const SliderImg = (props: SliderImgProps) => {
  const { src, alt } = props
  const IMG_PATH = 'https://image.tmdb.org/t/p/original'
  return (
    <img
      className="w-full h-screen cover"
      src={`${IMG_PATH}/${src}`}
      alt={alt}
    />
  )
}
interface SliderContentProps {
  item: IMovie;
}
export const SliderContent = (props: SliderContentProps) => {
  const { item } = props
  return (
    <div className="absolute bg-black bg-opacity-50 w-screen h-screen flex items-center">
      <div className="text-white ml-32 w-2/4">
        <div className="text-6xl">{item.original_title}</div>
        <div className="mt-4">{item.overview}</div>
        <div className="mt-4 w-40 h-10 rounded-full text-base flex items-center justify-center bg-white text-btn-red hover:bg-btn-red hover:text-white transition-all cursor-pointer">
          Watch Trailer
        </div>
      </div>
      <div className='w-2/4'>
        <img className='w-1/2 ml-36 rounded-3xl shadow-2xl' src={'https://image.tmdb.org/t/p/original/' + item.poster_path} />
      </div>
    </div>
  )
}
