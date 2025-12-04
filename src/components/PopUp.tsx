import React, { useState } from 'react'

import buttonNext from '../assets/Lobby/Next_PopUp.png'
import buttonBack from '../assets/Lobby/Back_PopUp.png'
import PopUp1 from '../assets/Lobby/PopUp/1.webp'
import PopUp2 from '../assets/Lobby/PopUp/2.webp'
import PopUp3 from '../assets/Lobby/PopUp/3.webp'
import PopUp4 from '../assets/Lobby/PopUp/4.webp'
import PopUp5 from '../assets/Lobby/PopUp/5.webp'
export default function PopUpComponent() {
  const images = [PopUp1, PopUp2, PopUp3, PopUp4, PopUp5]
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const handleNext = () => {
    setCurrentTextIndex((prev) => (prev + 1) % images.length)
  }
  
  const handleBack = () => {
    setCurrentTextIndex((prev) => (prev - 1 + images.length) % images.length)
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
          minWidth: "800px"
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}
        >
          <img
            src={images[currentTextIndex]}
            style={{
              width: '50%',
              minWidth: '400px',
            }}
          />

          <div
          className='textContainerPopUp'
            style={{
              position: 'absolute',
              top: '45%',
              left: '45%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
          </div>

          <div
          className='buttonContainerPopUp'
              style={{
                display: 'flex',

                alignItems: 'center',
                position: "absolute",
              }}
            >
              <img
                src={buttonBack}
                onClick={handleBack}
                className='NextButtonPopUp'
                style={{
                  background: 'transparent',
                  color: 'white',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  fontSize: '3vw',
                  fontWeight: 'bold',
                  borderColor: "transparent",
                }}
              >
              </img>
              <img
                src={buttonNext}
                onClick={handleNext}
                className='NextButtonPopUp'
                style={{
                  background: 'transparent',
                  color: 'white',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  fontSize: '3vw',
                  fontWeight: 'bold',
                  borderColor: "transparent",

                }}
              >
              </img>
            </div>

        </div>
      </div>
    </>
  )
}
