import React from 'react'
import TypewriterComponent from 'typewriter-effect'

const NotFoundView: React.FC = () => {
  return (
    <div
      style={{
        height: 'calc(100vh - 80px)'
      }}
      className="w-screen flex justify-center items-center text-3xl"
    >
      <TypewriterComponent
        onInit={(typewriter) => {
          typewriter
            .changeDelay(20)
            .typeString('PAGE NOT FOUND')
            .start()
        }}
      />
    </div>
  )
}

export default NotFoundView
