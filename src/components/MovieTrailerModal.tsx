import { movieSelector } from '@/app/selectors'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IoIosClose } from 'react-icons/io'
interface IMovieTrailerModalProps {
  setShow: (show: boolean) => void;
}
const MovieTrailerModal: React.FC<IMovieTrailerModalProps> = (props) => {
  const { setShow } = props
  const [trailerLink, setTrailerLink] = useState<string>('')
  const { movieTrailerInfo } = useSelector(movieSelector)
  useEffect(() => {
    const { key } = movieTrailerInfo.filter(
      (item) => item.type === 'Trailer'
    )[0]
    setTrailerLink(`https://www.youtube.com/embed/${key}?autoplay=1`)
  }, [])
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 h-screen w-screen z-50 flex justify-center items-center bg-black bg-opacity-60">
      <div
        className="flex items-center justify-center relative"
        style={{
          width: '55%',
          height: '55%'
        }}
      >
        <div
          onClick={() => setShow(false)}
          className="text-white text-4xl absolute top-0 right-0 m-2 cursor-pointer"
        >
          <IoIosClose />
        </div>
        <iframe
          width="100%"
          height="100%"
          src={trailerLink}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default MovieTrailerModal
