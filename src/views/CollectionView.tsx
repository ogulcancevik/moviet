import { globalSelector } from '@/app/selectors'
import CollectionCard from '@/components/CollectionCard'
import React from 'react'
import { useSelector } from 'react-redux'
import TypewriterComponent from 'typewriter-effect'

const CollectionView: React.FC = () => {
  const { collection } = useSelector(globalSelector)
  return (
    <>
      {collection.length > 0
        ? (
        <CollectionCard collection={collection}/>
          )
        : (
        <div
          style={{
            height: 'calc(100vh - 80px)'
          }}
          className="w-screen flex justify-center items-center text-3xl"
        >
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter.changeDelay(20).typeString('YOUR COLLECTION IS EMPTY').start()
            }}
          />
        </div>
          )}
    </>
  )
}

export default CollectionView
