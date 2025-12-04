import React, { useEffect, useState } from 'react'
import { useGlitch, GlitchHandle } from 'react-powerglitch'
import PantallasCNP from '../assets/Founders/PantallasCNP.png'
import PantallasError from '../assets/Founders/PantallasError.png'

interface ScreensProps {
  width?: string
  top?: string
}

export default function Screens({ width, top}: ScreensProps) {
  const pantallasImages = [PantallasCNP, PantallasError]
  const [currentPantallaIndex, setCurrentPantallaIndex] = useState(0)
  const glitch: GlitchHandle = useGlitch({ glitchTimeSpan: false, shake: { velocity: 1, amplitudeX: 0.1 }, playMode: "click" })

  const handlePantallasClick = () => {
    setCurrentPantallaIndex(prev => (prev + 1) % pantallasImages.length)
  }

  useEffect(() => {
    startGlitchAndStopWithTimeout()
  }, [currentPantallaIndex])

  const startGlitchAndStopWithTimeout = () => {
    glitch.startGlitch()
    setTimeout(() => {
      glitch.stopGlitch()
    }, 250)
  }

  return (
    <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
      <img
        ref={glitch.ref}
        src={pantallasImages[currentPantallaIndex]}
        onClick={handlePantallasClick}
        style={{ width, position: 'relative', top, cursor: 'pointer' }}
      />
    </div>
  )
}
