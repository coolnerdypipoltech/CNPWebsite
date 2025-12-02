import React, { useState } from 'react'

import PopUp from '../assets/Lobby/PopUp.webp'

export default function PopUpComponent() {
  const texts = [
    "Inside CNP, culture feels like a living organism that hums with restless curiosity. It isn't a handbook or a poster on a meeting room wall, it's a mood, a frequency, a shared belief that the future is something you build, not something you wait for.",
    "People here speak in ideas the way others breathe, jumping between code, memes, deep theory, and street culture without ever losing the plot.",
    "Everyone is both student and sensei. Experiments happen fast, humor is essential equipment, and every project is treated like a small portal to a more imaginative reality.",
    "It's a place where the weird is welcomed, the nerd-core is celebrated, and collaboration feels less like teamwork and more like a creative jam session inside a tiny spaceship drifting through the unknown."
  ]
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const handleNext = () => {
    setCurrentTextIndex((prev) => (prev + 1) % texts.length)
  }

  const handleBack = () => {
    setCurrentTextIndex((prev) => (prev - 1 + texts.length) % texts.length)
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
          minWidth: "400px"
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
            src={PopUp}
            style={{
              width: '50%',
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: '45%',
              left: '45%',
              transform: 'translate(-50%, -50%)',
              width: '30vw',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1rem',
            }}
          >
            <p
              className="fontGoldenAge"
              style={{
                color: 'black',
                fontSize: '1vw',
                textAlign: 'center',
                lineHeight: '1.6',
                margin: 0,
              }}
            >
              {texts[currentTextIndex]}
            </p>

            
          </div>

          <div
          className='buttonContainerPopUp'
              style={{
                display: 'flex',

                alignItems: 'center',
                position: "absolute",
              }}
            >
              <button
                onClick={handleBack}
                style={{
                  background: 'transparent',
                  color: 'white',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  fontSize: '3vw',
                  fontWeight: 'bold',
                  borderColor: "transparent",
                }}
                className="fontGoldenAge"
              >
                BACK
              </button>
              <button
                onClick={handleNext}
                style={{
                  background: 'transparent',
                  color: 'white',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  fontSize: '3vw',
                  fontWeight: 'bold',
                  borderColor: "transparent",

                }}
                className="fontGoldenAge"
              >
                NEXT
              </button>
            </div>

        </div>
      </div>
    </>
  )
}
