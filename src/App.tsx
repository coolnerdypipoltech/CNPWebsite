import React, { useState, useEffect } from 'react'
import Main from './Main'
import { criticalAssets, preloadImages } from './assetsPreloader'

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoEnded, setVideoEnded] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [videoSource, setVideoSource] = useState<string>('')

  // Detectar si es dispositivo móvil y cargar el video apropiado
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
      const isSmallScreen = window.innerWidth < 768
      const mobile = isMobileDevice || isSmallScreen
      setIsMobile(mobile)
      
      console.log(`📹 Cargando video de ${mobile ? 'móvil' : 'PC'}...`)
      
      // Importar dinámicamente solo el video apropiado
      const loadVideo = async () => {
        try {
          let video
          if (mobile) {
            video = await import('./assets/Main/loaderMobil.mp4')
          } else {
            video = await import('./assets/Main/loaderPc.mp4')
          }
          setVideoSource(video.default)
          setVideoLoaded(true)
          console.log('✅ Video cargado')
        } catch (error) {
          console.error('❌ Error cargando video:', error)
          setVideoLoaded(true) // Continuamos de todas formas
        }
      }
      
      loadVideo()
    }

    checkMobile()
  }, [])

  // Precargar assets DESPUÉS de que el video esté cargado
  useEffect(() => {
    if (!videoLoaded) return

    console.log('🚀 Video listo, iniciando precarga de assets...')
    // Precargar todos los assets críticos
    preloadImages(criticalAssets)
      .then(() => {
        console.log('✅ Todos los assets críticos se han cargado (' + criticalAssets.length + ' assets)')
        setAssetsLoaded(true)
      })
      .catch((error) => {
        console.error('❌ Error cargando assets:', error)
        setAssetsLoaded(true) // Continuamos de todas formas
      })
  }, [videoLoaded])

  const handleVideoEnd = () => {
    console.log('✅ Video de carga terminado')
    setVideoEnded(true)
  }

  // Cuando tanto el video termine como los assets estén cargados, mostramos el contenido
  useEffect(() => {
    if (assetsLoaded && videoEnded) {
      console.log('✅ Todo listo! Mostrando contenido principal')
      setShowContent(true)
    }
  }, [assetsLoaded, videoEnded])

  // Mostrar el loader mientras el video se carga, los assets se cargan o el video no ha terminado
  if (!showContent || !videoSource) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#000',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {videoSource ? (
          <>
            <video
              key={videoSource} // Forzar re-render si cambia el video
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            >
              <source src={videoSource} type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
            {/* Indicador de progreso de assets */}
            {videoLoaded && !assetsLoaded && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'white',
                  fontSize: '12px',
                  opacity: 0.7,
                  textAlign: 'center',
                }}
              >
                Loading...
              </div>
            )}
          </>
        ) : (
          // Indicador de carga inicial del video
          <div
            style={{
              color: 'white',
              fontSize: '14px',
              textAlign: 'center',
            }}
          >
            <div style={{ marginBottom: '10px' }}>⏳</div>
            Cargando video... ({isMobile ? 'Móvil' : 'PC'})
          </div>
        )}
      </div>
    )
  }

  return <Main />
}
