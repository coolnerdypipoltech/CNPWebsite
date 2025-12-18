import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './Main'
import { criticalAssets, preloadImages } from './assetsPreloader'

import DinoGame from './pages/DinoGame'

function LoaderScreen() {
  const [assetsLoaded, setAssetsLoaded] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoEnded, setVideoEnded] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [videoSource, setVideoSource] = useState<string>('')
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
      const isSmallScreen = window.innerWidth < 768
      const mobile = isMobileDevice || isSmallScreen
      setIsMobile(mobile)
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

  useEffect(() => {
    if (!videoLoaded) return
    preloadImages(criticalAssets)
      .then(() => {
        setAssetsLoaded(true)
      })
      .catch((error) => {
        setAssetsLoaded(true)
      })
  }, [videoLoaded])

  const handleVideoEnd = () => {
    console.log('✅ Video de carga terminado')
    setVideoEnded(true)
  }

  useEffect(() => {
    if (!videoLoaded || videoEnded) return

    const fallbackTimer = setTimeout(() => {
      if (!videoEnded) {
        handleVideoEnd()
      }
    }, 3000)

    return () => clearTimeout(fallbackTimer)
  }, [videoLoaded, videoEnded])

  useEffect(() => {
    if (assetsLoaded && videoEnded) {
      setShowContent(true)
    }
  }, [assetsLoaded, videoEnded])

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
              key={videoSource}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              onClick={(e) => {
                // Intentar reproducir el video si el usuario hace click
                const video = e.currentTarget
                if (video.paused) {
                  video.play().catch((err) => {
                    console.log('No se pudo reproducir el video:', err)
                  })
                }
              }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
            >
              <source src={videoSource} type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
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

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/CNPWebsite" element={<Main />} />
      <Route path="/game" element={<DinoGame />} />
    </Routes>
  )
}

export default function App() {
  return (
    <Router>
      <LoaderScreen />
    </Router>
  )
}
