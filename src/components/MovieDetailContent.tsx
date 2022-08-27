import { REMOVE_COLLECTION, SET_COLLECTION } from '@/app/global'
import { Genre } from '@/app/modules/movie/movie.types'
import { globalSelector, movieSelector } from '@/app/selectors'
import { useAppDispatch } from '@/app/store'
import { IMG_PATH } from '@/services/baseUrls'
import React, { useMemo } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useWindowSize } from 'usehooks-ts'

const DetailContent: React.FC = () => {
  const { movieDetail } = useSelector(movieSelector)
  const { collection } = useSelector(globalSelector)
  const isExist = useMemo(() => {
    return collection.map(m => m.id).includes(movieDetail.id)
  }, [collection, movieDetail.id])
  const dispatch = useAppDispatch()
  const addCollection = () => {
    if (isExist) {
      dispatch(REMOVE_COLLECTION(movieDetail.id))
      toast.success('This movie removed your collection', {
        duration: 1750
      })
    } else {
      dispatch(SET_COLLECTION(movieDetail))
      toast.success('Movie added to your collection', {
        duration: 1750
      })
    }
  }
  return (
    <div className="flex w-9/12">
      <DetailPoster posterPath={movieDetail.poster_path} />
      <div className="ml-6 flex flex-col animate__animated animate__fadeInDown">
        <div className="text-5xl font-medium md:text-4xl animate__animated animate__fadeInDown">
          {movieDetail.title}
        </div>
        <DetailGenres genres={movieDetail.genres} />
        <div className="mt-8 animate__animated animate__fadeInDown">
          {movieDetail.overview}
        </div>
        <div className="flex justify-end">
          <div onClick={addCollection} className="my-6 border border-white px-4 flex justify-center py-3 rounded-full hover:bg-custom-red hover:text-white transition-all cursor-pointer">
            {!isExist ? 'Add Collection' : 'Remove Collection'}
          </div>
        </div>
        <DetailCast />
      </div>
    </div>
  )
}

export default DetailContent

interface IDetailPosterProps {
  posterPath: string;
}
export const DetailPoster: React.FC<IDetailPosterProps> = (props) => {
  const { posterPath } = props
  return (
    <img
      className="rounded-3xl cover w-detail-poster xl:hidden animate__animated animate__fadeInDown"
      src={`${IMG_PATH}/${posterPath}`}
    />
  )
}

interface IDetailGenresProps {
  genres: Genre[];
}
export const DetailGenres: React.FC<IDetailGenresProps> = (props) => {
  const { genres } = props
  return (
    <div className="flex justify-start gap-5 md:hidden mt-4">
      {genres.map((g, key) => {
        return (
          <div
            className="border rounded-full h-10 w-max px-3 flex justify-center items-center animate__animated animate__fadeInDown"
            key={key}
          >
            {g.name}
          </div>
        )
      })}
    </div>
  )
}

export const DetailCast: React.FC = () => {
  const { movieCredits } = useSelector(movieSelector)
  const { cast } = movieCredits
  const { width } = useWindowSize()
  const castList = useMemo(() => {
    return cast.slice(0, width <= 768 ? 3 : 5)
  }, [cast, width])
  return (
    <div className="xl:mt-2">
      <div className="text-3xl font-medium mb-3 md:text-center mt-5">Casts</div>
      <div className="flex gap-5 justify-between md:justify-center">
        {castList.map((c, key) => {
          return (
            <div key={key}>
              <img
                className="w-36 xl:w-24 object-cover"
                src={`${IMG_PATH}/${c.profile_path}`}
              />
              <div className="mt-2">{c.original_name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
