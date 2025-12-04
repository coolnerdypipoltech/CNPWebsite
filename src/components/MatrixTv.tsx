import React, { useEffect, useState } from 'react'

import { useGlitch, GlitchHandle } from 'react-powerglitch'
import CNP_1 from '../assets/Lobby/CNP/cnp_1.webp'
import CNP_2 from '../assets/Lobby/CNP/cnp_2.webp'
import CNP_3 from '../assets/Lobby/CNP/cnp_3.webp'
import CNP_4 from '../assets/Lobby/CNP/cnp_4.webp'
import CNP_5 from '../assets/Lobby/CNP/cnp_5.webp'
import CNP_6 from '../assets/Lobby/CNP/cnp_6.webp'
import CNP_7 from '../assets/Lobby/CNP/cnp_7.webp'
import CNP_8 from '../assets/Lobby/CNP/cnp_8.webp'
import CNP_9 from '../assets/Lobby/CNP/cnp_9.webp'
import Button_back from '../assets/Lobby/Button_back.png'
import Button_Next from '../assets/Lobby/Button_Next.png'

export default function MatrixTv() {
  const images = [CNP_1, CNP_2, CNP_3, CNP_4, CNP_5, CNP_6, CNP_7, CNP_8, CNP_9]
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
    /*
    glitch.startGlitch()
    setTimeout(() => {
      glitch.stopGlitch()
    }, 250)
    */
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
        </div>
      </div>
    </>
  )
}
