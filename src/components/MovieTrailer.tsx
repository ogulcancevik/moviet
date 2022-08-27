import { movieSelector } from '@/app/selectors'
import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

const MovieTrailer: React.FC = () => {
  const { movieTrailerInfo } = useSelector(movieSelector)
  const [trailerLink, setTrailerLink] = useState<string>('')
  const trailer = useMemo(() => {
    return movieTrailerInfo.filter((m) => m.type === 'Trailer')[0]?.key
  }, [movieTrailerInfo])
  useEffect(() => {
    setTrailerLink(`https://www.youtube.com/embed/${trailer}?autoplay=1`)
  }, [])
  return (
 <>
    <div className="w-screen h-screen px-36 pb-36">
      <div className='text-3xl font-semibold uppercase my-12'>Offical Trailer</div>
      <iframe
        width="100%"
        height="100%"
        src={trailerLink}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
 </>
  )
}

export default MovieTrailer
