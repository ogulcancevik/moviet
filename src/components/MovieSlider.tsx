import { getMovieTrailerInfo } from '@/app/modules/movie/movie.actions'
import { IMovie } from '@/app/modules/movie/movie.types'
import { movieSelector } from '@/app/selectors'
import { useAppDispatch } from '@/app/store'
import { IMG_PATH } from '@/services/baseUrls'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useWindowSize } from 'usehooks-ts'
import MovieTrailerModal from './MovieTrailerModal'

const HomeSlider: React.FC = () => {
  const { popularMovies } = useSelector(movieSelector)
  return (
    <div className="relative h-screen w-screen">
      <Swiper
        // autoplay={{
        //   delay: 4000
        // }}
        speed={800}
        // modules={[Autoplay]}
      >
        {popularMovies.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <SliderContent item={item} />
              <SliderImg
                src={{ poster: item.poster_path, backdrop: item.backdrop_path }}
                alt={item.title}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default HomeSlider

interface SliderImgProps {
  src: {
    poster: string;
    backdrop: string;
  };
  alt: string;
}
export const SliderImg = (props: SliderImgProps) => {
  const { src, alt } = props
  const { width } = useWindowSize()
  return (
    <>
      <img
        className="h-screen w-screen "
        src={`${IMG_PATH}/${width > 768 ? src.backdrop : src.poster}`}
        alt={alt}
      />
    </>
  )
}
interface SliderContentProps {
  item: IMovie;
}
export const SliderContent = (props: SliderContentProps) => {
  const { item } = props
  const dispatch = useAppDispatch()
  const [show, setShow] = useState<boolean>(false)
  const openMovieTrailerModal = async () => {
    const { id } = item
    await dispatch(getMovieTrailerInfo(id))
    setShow(true)
  }
  return (
    <>
      <div className="absolute bg-black bg-opacity-60 w-screen h-full flex items-center swiper-shadow">
        <div className="text-white ml-32 w-2/4 md:w-full md:ml-0 md:text-center md:px-8">
          <div className="text-6xl md:text-4xl animate__animated animate__fadeInDown">
            {item.original_title}
          </div>
          <div className="mt-4 text-sm animate__animated animate__fadeInDown">
            {item.overview}
          </div>
          <div className='flex md:justify-center'>
            <div
              onClick={openMovieTrailerModal}
              className="animate__animated animate__fadeInDown mt-4 w-40 h-10 rounded-full text-base flex items-center justify-center bg-white text-custom-red hover:bg-btn-red hover:text-white hover:bg-custom-red transition-all duration-300 cursor-pointer"
            >
              Watch Trailer
            </div>
          </div>
        </div>
        <div className="w-2/4 animate__animated animate__fadeInDown md:hidden">
          <img
            className="w-1/2 ml-36 rounded-3xl shadow-2xl"
            src={'https://image.tmdb.org/t/p/original/' + item.poster_path}
          />
        </div>
      </div>
      {show && <MovieTrailerModal setShow={setShow} />}
    </>
  )
}
