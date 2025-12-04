import React, { useEffect, useState, useRef } from 'react'
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
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const glitch: GlitchHandle = useGlitch({ glitchTimeSpan: false, shake: { velocity: 1, amplitudeX: 0.1 }, playMode: "click" })

  const handlePantallasClick = () => {
    setCurrentPantallaIndex(prev => (prev + 1) % pantallasImages.length)
  }

  // Detectar si el componente está visible en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  // Ejecutar glitch cada 2 segundos cuando está visible
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        startGlitchAndStopWithTimeout()
      }, 2000)

      return () => clearInterval(interval)
    }
    return undefined
  }, [isVisible])

  // Glitch cuando cambia la imagen
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
    <div ref={containerRef} className="centerDiv" style={{ justifyContent: 'flex-end' }}>
      <img
        ref={glitch.ref}
        src={pantallasImages[currentPantallaIndex]}
        onClick={handlePantallasClick}
        style={{ width, position: 'relative', top, cursor: 'pointer' }}
      />
    </div>
  )
}
