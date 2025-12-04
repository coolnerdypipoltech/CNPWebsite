import React, { useEffect, useState } from 'react'
import { ParallaxLayer } from '@react-spring/parallax'

import ovni from '../../assets/Lobby/ovni.webp'
import Background from '../../assets/Culture/Mobil/Culture.png'
import Flecha from '../../assets/Culture/IMG_Flecha.webp'
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
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { useGlitch, GlitchHandle } from 'react-powerglitch'

export default function CultureMobil() {
  const videos = [
    {
      title: 'We are Cool Nerdy People',

      url: 'ZiX4d7fwtdg',
      description: 'Our work lives at the intersection of strategy, storytelling, and emerging tech, where innovation becomes emotional, and creativity becomes scalable. We’re not adapting to the future; we’re shaping it.',
    },
    {
      title: 'ACT II',
      url: '4OKFlupaB8k',
      description:
        'For ACTII’s Black Spicy campaign, we produced a hero video that merges AI-driven models with a green screen shoot, resulting in a visually impactful piece and a cutting-edge visual language.',
    },
    {
      title: 'Costa Coffee',
      url: '4XnUHykYAgY',
      description:
        'We took over the physical space with an augmented reality experience layered over the real world. Through a simple QR code, guests unlocked a creative dimension of the Costa brand, immersive, emotional, and full of surprises. Every corner became an interactive portal, turning exploration into play and physical presence into digital engagement.',
    },
    {
      title: 'Femenine Depend',
      url: 'ugICtFSwQgQ',
      description:
        'We design interactive games that connect with the target consumer through engagement and education. In this case, we created Eva — a guided, character-driven experience that explains the feminine care segment and walks users through each stage, making product understanding simple, dynamic, and memorable',
    },
    {
      title: 'YoYo',
      url: 'rvFLh0HdQkQ',
      description:
        'We created an app that connects users with curated spots through a gamified journey, building a community that actively visits and engages with each venue. YoYo also generates valuable data while unlocking a hidden layer of the city — discover exclusive places, earn YoYo Credits, and redeem rewards inside its secret loop.',
    },
    {
      title: 'AXESS BY AXE',
      url: 'QFPyvZ6eXmI',
      description:
        'We imagined and built a gamified loyalty ecosystem that transforms entertainment into engagement - users compete inside a metaverse in virtual mini-games to earn points for exclusive concert access, creating a self-sustaining community of brand advocates. Results: 1M Active Users / 8/10 Users Rewarded',
    },
  ]

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
      <div>
        <ParallaxLayer style={{ zIndex: 0 }} offset={0} speed={0} factor={3}>
          <div className="centerDiv" style={{ width: '100%', height: '100%', transform: 'scale(0.5)' }}>
            <img src={Background} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 6 }} offset={-1.5} speed={0} factor={0.1}>
          <div className="centerDiv" style={{ justifyContent: 'flex-start', marginTop: "40px" }}>
            <p className="fontGoldenAgeOG" style={{ fontSize: '36px', color: 'white' }}>
              Our work
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={-1.25} speed={0} factor={0.5}>
          <div
            className="centerDiv"
            style={{ justifyContent: 'center', gap: '20px', paddingTop: '0%', justifyItems: 'center' }}
          >
            <div
              ref={glitch.ref}
              style={{
                position: 'relative',
                width: '80vw',
                height: '50vw',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <LiteYouTubeEmbed id={videos[currentVideo].url} title={videos[currentVideo].title} />
              <img
                src={Marco}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '80vw',
                  height: '100%',
                  pointerEvents: 'none',
                }}
              />
            </div>
            <p className="fontGoldenAgeOG" style={{ color: 'white', width: '80%', textAlign: 'center' }}>
              {videos[currentVideo].title}
            </p>
            <p
              className="fontGoldenAge"
              style={{ color: 'white', fontSize: '14px', width: '80%', textAlign: 'center', paddingBottom: '20px' }}
            >
              {videos[currentVideo].description}
            </p>
            <div className="splitCenterDiv" style={{ width: '80%', height: '40px' }}>
              <img src={Back} onClick={previousVideo} style={{ width: '120px' }} />
              <img src={Next} onClick={nextVideo} style={{ width: '120px' }} />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={-0.5} speed={0} factor={0.25}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={Flecha} style={{ height: '100px', position: 'relative', top: '30%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 4 }} offset={0} speed={0} factor={0.2}>
          <div
            className="centerDiv"
            style={{ alignItems: 'flex-end', paddingRight: '15%', justifyContent: 'flex-end', textAlign: 'center' }}
          >
            <p className="grad1" style={{ color: 'white', fontSize: '24px' }}>
              Think human
            </p>
            <p className="grad1" style={{ color: 'white', fontSize: '24px' }}>
              act AI native
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={0.75} speed={0} factor={0.5}>
          <div className="centerDiv" style={{}}>
            <img
              src={nyanCat}
              onClick={() => {
                window.open('https://www.tiktok.com/@animaldex/video/7442466728153451832?lang=es')
              }}
              style={{ width: '25vw', minWidth: '180px', position: 'relative', right: '30%', top: '-120%' }}
            />
            <img
              src={CAT}
              style={{ width: '25vw', minWidth: '150px', position: 'relative', right: '-22%', top: '-80%' }}
            />
            <img
              src={BOOK}
              style={{ width: '15vw', minWidth: '100px', position: 'relative', left: '-25%', top: '-100%' }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={0.75} speed={0} factor={0.5}>
          <div className="centerDiv" style={{}}>
            <img
              src={rose}
              style={{ width: '25vw', minWidth: '200px', position: 'relative', right: '-25%', top: '30%' }}
            />
            <img
              src={FIGHT}
              style={{ width: '25vw', minWidth: '200px', position: 'relative', left: '-25%', top: '15%' }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={2.5} speed={0} factor={0.25}>
          <div
            className="centerDiv"
            style={{ alignItems: 'center', paddingLeft: '0%', paddingTop: '20px', justifyContent: 'flex-start' }}
          >
            <p className="grad1" style={{ color: 'white', fontSize: '24px' }}>
              Designing a smarter
            </p>
            <p className="grad1" style={{ color: 'white', fontSize: '24px' }}>
              future together
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={1.75} speed={0} factor={0.5}>
          <div className="centerDiv" style={{}}>
            <img
              src={Blackhorse}
              style={{ width: '25vw', minWidth: '200px', position: 'relative', right: '-25%', top: '-40%' }}
            />
            <img
              src={Angel}
              style={{ width: '25vw', minWidth: '150px', position: 'relative', left: '-25%', top: '-30%' }}
            />
            <img
              src={ovni}
              style={{ width: '10vw', minWidth: '100px', position: 'relative', left: '5%', top: '-40%' }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 5 }} offset={3.25} speed={0} factor={0.2}>
          <div
            className="centerDiv"
            style={{
              alignItems: 'flex-start',
              paddingLeft: '15%',
              position: 'relative',
              top: '16vw',
              justifyContent: 'flex-start',
            }}
          >
            <p className="grad1" style={{ color: 'white', fontSize: '24px' }}>
              HEARTCRAFTED
            </p>
            <p className="grad1" style={{ color: 'white', fontSize: '24px' }}>
              TECH POWERED
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={2.75} speed={0} factor={0.5}>
          <div className="splitCenterDiv" style={{justifyContent: "flex-end"}}>
            <img
              src={Dios}
              style={{ width: '50vw', minWidth: '300px', position: 'relative', right: '0%', top: '10%' }}
            />
          </div>
        </ParallaxLayer>


      </div>
    </>
  )
}
