import React, { useRef, useEffect, useState } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import OverlayMenu from '../overlayMenu'
import ovni from '../../assets/Lobby/ovni.webp'
import LobbyStars from '../../assets/Lobby/LobbyStars.webp'
import Flecha from '../../assets/Culture/IMG_Flecha.webp'
import Nube1 from '../../assets/Culture/IMG_Nube1.webp'
import Nube2 from '../../assets/Culture/IMG_Nube2.webp'
import Nube3 from '../../assets/Culture/IMG_Nube3.webp'
import Nube4 from '../../assets/Culture/IMG_Nube4.webp'
import Nube5 from '../../assets/Culture/IMG_Nube5.webp'
import Nube6 from '../../assets/Lobby/Nube4.webp'
import Dios from '../../assets/Culture/IMG_Dios.webp'
import Angel from '../../assets/Culture/IMG_ANGEL.webp'
import Blackhorse from '../../assets/Culture/IMG_Blackhorse.webp'
import FIGHT from '../../assets/Culture/IMG_FIGHT.webp'
import rose from '../../assets/Culture/IMG_rose.webp'
import BOOK from '../../assets/Culture/IMG_BOOK.webp'
import CAT from '../../assets/Culture/IMG_CAT.webp'
import nyanCat from '../../assets/Culture/nyanCat.webp'
import Marco from '../../assets/Culture/IMG_Marco.webp'
import Back from '../../assets/Culture/IMG_Back.webp'
import Next from '../../assets/Culture/IMG_Next.webp'

import video1 from '../../assets/test/Video1.mp4'
import video2 from '../../assets/test/Video2.mp4'
import video3 from '../../assets/test/Video3.mp4'
import { useGlitch, GlitchHandle } from 'react-powerglitch'

export default function Culture() {
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
  const parallax = useRef<IParallax>(null!)
  const [currentVideo, setCurrentVideo] = useState(0)
  const glitch: GlitchHandle = useGlitch({ glitchTimeSpan: false })
  useEffect(() => {
    parallax.current.scrollTo(5.5)
  }, [])

  
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
          height: '100%',
          background: '#253237',
          display: 'flex',
          flexDirection: 'column-reverse',
          overflowX: 'hidden',
          overflowY: 'scroll',
        }}
      >
        <Parallax ref={parallax} pages={5.5}>
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={1}
            style={{
              backgroundImage: `url(${LobbyStars})`,
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer
            offset={4}
            speed={0}
            factor={1}
            style={{
              backgroundImage: `url(${LobbyStars})`,
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer
            offset={5}
            speed={0}
            factor={1}
            style={{
              backgroundImage: `url(${LobbyStars})`,
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer
            offset={1}
            speed={0}
            factor={1}
            style={{
              backgroundImage: `url(${LobbyStars})`,
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer
            offset={2}
            speed={0}
            factor={1}
            style={{
              backgroundImage: `url(${LobbyStars})`,
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer
            offset={3}
            speed={0}
            factor={1}
            style={{
              backgroundImage: `url(${LobbyStars})`,
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer style={{ zIndex: 2 }} offset={0.05} speed={0.1} factor={1}>
            <div className="centerDiv" style={{ justifyContent: 'center', gap: '20px', paddingTop: '0%', justifyItems: 'center' }}>
              <div ref={glitch.ref} style={{ position: 'relative', width: '100%', height: '30vw', display: "flex", justifyContent: "center" }}>
                <video
                  key={videos[currentVideo].url}
                  style={{
                    width: '100%',
                    height: '30vw',
                    objectFit: 'contain',
                    borderRadius: '40px',
                  }}
                  src={videos[currentVideo].url}
                  loop
                  autoPlay
                />
                <img 
                  src={Marco} 
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '30vw',
                    objectFit: 'contain',
                    pointerEvents: 'none'
                  }} 
                />
              </div>
              <p className="fontGoldenAge" style={{ color: 'white' }}>
                {videos[currentVideo].title}
              </p>
              <p className="fontGoldenAge" style={{ color: 'white', fontSize: '16px' }}>
                {videos[currentVideo].description}
              </p>
              <div className="splitCenterDiv" style={{ width: '45%', height: '40px' }}>
                <img src={Back} onClick={previousVideo} style={{ width: '150px' }} />
                <img src={Next} onClick={nextVideo} style={{ width: '150px' }} />
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={1.2} speed={0.25} factor={0.25}>
            <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
              <img src={Flecha} style={{ height: '150px', position: 'relative', top: '0%' }} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={1.5} speed={0.25} factor={1}>
            <div className="centerDiv" style={{}}>
              <img src={Nube6} style={{ width: '80vw', position: 'relative', top: '90%' }} />
              <img src={Nube5} style={{ width: '25vw', position: 'relative', left: '-31%', top: '-25%' }} />
              <img src={Nube1} style={{ width: '25vw', position: 'relative', left: '40%', top: '-20%' }} />
              <img src={nyanCat} style={{ width: '25vw', position: 'relative', right: '30%', top: '-50%' }} />
              <img src={CAT} style={{ width: '25vw', position: 'relative', right: '-22%', top: '-50%' }} />
              <img src={BOOK} style={{ width: '15vw', position: 'relative', left: '-25%', top: '-60%' }} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={2.5} speed={0.25} factor={1}>
            <div className="centerDiv" style={{}}>
              <img src={rose} style={{ width: '25vw', position: 'relative', right: '-25%', top: '5%' }} />
              <img src={Nube4} style={{ width: '25vw', position: 'relative', left: '-10%', top: '0%' }} />
              <img src={Nube3} style={{ width: '25vw', position: 'relative', left: '-22%', top: '15%' }} />
              <img src={FIGHT} style={{ width: '25vw', position: 'relative', left: '-25%', top: '-35%' }} />
              <img src={Nube2} style={{ width: '25vw', position: 'relative', right: '-30%', top: '-70%' }} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={3.5} speed={0.3} factor={1}>
            <div className="centerDiv" style={{}}>
              <img src={Blackhorse} style={{ width: '25vw', position: 'relative', right: '-25%', top: '-40%' }} />
              <img src={Angel} style={{ width: '25vw', position: 'relative', left: '-25%', top: '-20%' }} />
              <img src={ovni} style={{ width: '10vw', position: 'relative', left: '5%', top: '-40%' }} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={3.5} speed={0.25} factor={1}>
            <div className="splitCenterDiv">
              <img
                src={Nube5}
                style={{ width: '28vw', marginLeft: '2%', position: 'relative', right: '-5%', top: '-45%' }}
              />
              <img src={Nube1} style={{ width: '30vw', position: 'relative', right: '-10%', top: '-5%' }} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={4} speed={0.25} factor={1}>
            <div className="splitCenterDiv">
              <img src={Nube4} style={{ width: '28vw', marginLeft: '20%' }} />
              <img src={Dios} style={{ width: '50vw', position: 'relative', right: '2%', top: '-5%' }} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={4.5} speed={0.25} factor={1}>
            <div className="splitCenterDiv">
              <img src={Nube3} style={{ width: '28vw', marginLeft: '2%' }} />
              <img src={Nube2} style={{ width: '30vw', position: 'relative', right: '-10%', top: '-5%' }} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={5} speed={0.5} factor={0.25}>
            <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
              <img src={Flecha} style={{ height: '150px', position: 'relative', top: '-30%' }} />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
      <OverlayMenu />
    </>
  )
}
