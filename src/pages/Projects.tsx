import React, { useEffect, useState } from 'react'


import video1 from '../assets/test/Video1.mp4'
import video2 from '../assets/test/Video2.mp4'
import video3 from '../assets/test/Video3.mp4'
import { useGlitch, GlitchHandle } from 'react-powerglitch'
import OverlayMenu from './overlayMenu'

const videos = [
  {
    title: 'Video 1',
    url: video1,
    description: 'Primer video de ejemplo',
  },
  {
    title: 'Video 2',
    url: video2,
    description: 'Segundo video de ejemplo',
  },
  {
    title: 'Video 3',
    url: video3,
    description: 'Tercer video de ejemplo',
  },
]

export default function Projects() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const glitch: GlitchHandle = useGlitch({ glitchTimeSpan: false })

  useEffect(() => {
    startGlitchAndStopWithTimeout()
  })
  
  
  const nextVideo = () => {
    setCurrentVideo(prev => (prev + 1) % videos.length)
    startGlitchAndStopWithTimeout()
  }

  const previousVideo = () => {
    setCurrentVideo(prev => (prev - 1 + videos.length) % videos.length)
    startGlitchAndStopWithTimeout()
  }

  const startGlitchAndStopWithTimeout = () => {
    glitch.startGlitch()
    setTimeout(() => {
      glitch.stopGlitch()
    }, 500)
  }

  return (
    <>
        <div
      style={{
        width: '100%',
        height: '100vh',
        background: '#1a1a2e',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Projects</h1>

      <div
        style={{
          width: '100%',
          maxWidth: '900px',
          margin: '2rem 0',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>{videos[currentVideo].title}</h2>

        <div
          ref={glitch.ref}
          style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
            background: '#000',
          }}
        >
          <video
            key={videos[currentVideo].url}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
            src={videos[currentVideo].url}
            loop
            autoPlay
          />
        </div>

        <p
          style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            margin: '1.5rem 0',
            color: '#aaa',
          }}
        >
          {videos[currentVideo].description}
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '2rem',
          }}
        >
          <button
            onClick={previousVideo}
            style={{
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              background: '#4fc3f7',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontWeight: 'bold',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#0288d1')}
            onMouseLeave={e => (e.currentTarget.style.background = '#4fc3f7')}
          >
            ← Anterior
          </button>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '1.2rem',
              color: '#4fc3f7',
            }}
          >
            {currentVideo + 1} / {videos.length}
          </div>

          <button
            onClick={nextVideo}
            style={{
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              background: '#4fc3f7',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontWeight: 'bold',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#0288d1')}
            onMouseLeave={e => (e.currentTarget.style.background = '#4fc3f7')}
          >
            Siguiente →
          </button>
        </div>
      </div>

    </div>
    <OverlayMenu />
    </>

  )
}
