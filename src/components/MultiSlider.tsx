import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useWindowSize } from 'usehooks-ts'
interface IMultiSliderProps {
  title: string
  item: any[]
}
const MultiSlider: React.FC<IMultiSliderProps> = (props) => {
  const { title, item } = props
  const location = useLocation()
  const { width } = useWindowSize()
  const slidesCondition = useMemo(() => {
    return width <= 768 ? 2 : width <= 1192 ? 4 : 6
  }, [width])
  const redirectMovieDetail = (item: any) => {
    const { id } = item
    location.pathname = ''
    window.location.href = `/movie/${id}`
  }
  return (
    <div className="mx-12 mt-6">
      <div className="text-2xl mb-4">{title}</div>
      <Swiper
        slidesPerView={slidesCondition}
        spaceBetween={30}
        slidesPerGroup={slidesCondition}
        loopFillGroupWithBlank={true}
      >
        {item.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center">
                <div className="relative justify-center items-center flex cursor-pointer">
                  <div onClick={() => redirectMovieDetail(movie)} className="absolute hover:bg-black hover:bg-opacity-50 top-0 bottom-0 right-0 left-0 transition-all duration-300 flex justify-center items-center"></div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-full object-cover rounded-2xl -z-10"
                  />
                </div>
                <div className="text-center mt-2 cursor-pointer" onClick={() => redirectMovieDetail(movie)}>{movie.title}</div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default MultiSlider
