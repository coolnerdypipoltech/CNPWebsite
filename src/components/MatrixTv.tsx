import React, { useEffect, useState } from 'react'

import FunLab from '../assets/Lobby/FunLab.png'
import { useGlitch, GlitchHandle } from 'react-powerglitch'
import CNP_1 from '../assets/Lobby/CNP/CNP_1.png'
import CNP_2 from '../assets/Lobby/CNP/CNP_2.png'
import CNP_3 from '../assets/Lobby/CNP/CNP_3.png'
import CNP_4 from '../assets/Lobby/CNP/CNP_4.png'
import CNP_5 from '../assets/Lobby/CNP/CNP_5.png' 
import Button_back from '../assets/Lobby/Button_back.png'
import Button_Next from '../assets/Lobby/Button_Next.png'

export default function MatrixTv() {
  const images = [CNP_1, CNP_2, CNP_3, CNP_4, CNP_5]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const firstTimeRef = React.useRef(true);
  const glitch: GlitchHandle = useGlitch({ glitchTimeSpan: false, shake: { velocity: 1, amplitudeX: 0.1 } })
  useEffect(() => {
    if(firstTimeRef.current) {
      firstTimeRef.current = false;
      glitch
      return;
    }
    startGlitchAndStopWithTimeout()
  })
  const startGlitchAndStopWithTimeout = () => {
    glitch.startGlitch()
    setTimeout(() => {
      glitch.stopGlitch()
    }, 250)
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const handleBack = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <div
        style={{
          width: '100%',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 5,

        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
          }}
        >
          <img
            ref={glitch.ref}
            src={images[currentImageIndex]}
            style={{
              width: '100%',
            }}
          />



          <div
            style={{
              position: 'absolute',
              bottom: '19vw',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '80px',
              alignItems: 'center',
            }}
          >
            <img
              src={Button_back}
              onClick={handleBack}
              className='MatrixButtons'
              style={{
                cursor: 'pointer',
              }}
            />
            <img
              src={Button_Next}
              onClick={handleNext}
              className='MatrixButtons'
              style={{
                cursor: 'pointer',
              }}
            />
          </div>

                    <img
            src={FunLab}
            style={{
              position: 'absolute',
              width: '15%',
              paddingBottom: "8vw",
              left: '50%',
              transform: 'translate(-50%, -80%)',
              display: 'block',
            }}
          />
        </div>
      </div>
    </>
  )
}
