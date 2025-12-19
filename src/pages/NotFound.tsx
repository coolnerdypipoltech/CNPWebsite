
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useRef, useState} from 'react'
import ovniImage from '../assets/Main/404.png'
import { useGlitch, GlitchHandle } from 'react-powerglitch'
export default function NotFound() {
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)
    const glitch: GlitchHandle = useGlitch({ glitchTimeSpan: false, shake: { velocity: 1, amplitudeX: 0.1 }, playMode: "click" })
    const [isVisible, setIsVisible] = useState(false)

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
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        startGlitchAndStopWithTimeout()
      }, 2000)

      return () => clearInterval(interval)
    }
    return undefined
  }, [isVisible])
  
    const startGlitchAndStopWithTimeout = () => {
      glitch.startGlitch()
      setTimeout(() => {
        glitch.stopGlitch()
      }, 250)
    }

  return (
    <div
    ref={containerRef} 
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a1a',
        backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a3e 0%, #0a0a1a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Estrellas de fondo */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(2px 2px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 90%, white, transparent),
            radial-gradient(2px 2px at 70% 40%, white, transparent)
          `,
          backgroundSize: '200% 200%',
          animation: 'twinkle 3s ease-in-out infinite',
          opacity: 0.6,
        }}
      />

      {/* Contenido principal */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          animation: 'float 3s ease-in-out infinite',
        }}
      >
        {/* Imagen OVNI */}
        <img
        ref={glitch.ref}
          src={ovniImage}
          alt="404 - Not Found"
          style={{
            width: '300px',
            maxWidth: '80vw',
            height: 'auto',
            marginBottom: '30px',
            filter: 'drop-shadow(0 0 30px rgba(138, 43, 226, 0.6))',
          }}
        />

        {/* Mensaje */}
        <p
          style={{
            fontFamily: "Golden Age",
            fontSize: 'clamp(18px, 4vw, 28px)',
            color: '#b8b8d1',
            marginTop: '20px',
            marginBottom: '40px',
            fontWeight: '300',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          Page lost in space
        </p>

        {/* Botón de regreso */}
        <button
          onClick={() => navigate('/')}
          style={{
            fontFamily: "Golden Age",
            padding: '15px 40px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#ffffff',
            backgroundColor: 'rgba(138, 43, 226, 0.3)',
            border: '2px solid #8a2be2',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 0 20px rgba(138, 43, 226, 0.5)',
            backdropFilter: 'blur(10px)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.6)'
            e.currentTarget.style.transform = 'scale(1.05)'
            e.currentTarget.style.boxShadow = '0 0 30px rgba(138, 43, 226, 0.8)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.3)'
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = '0 0 20px rgba(138, 43, 226, 0.5)'
          }}
        >
          Back to Home
        </button>
      </div>

      {/* Animaciones CSS */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  )
}
