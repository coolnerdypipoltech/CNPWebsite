import React, { useEffect, useState } from 'react'
import { ParallaxLayer } from '@react-spring/parallax'

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
import { useGlitch, GlitchHandle } from 'react-powerglitch'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
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
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={0.5}
          style={{
            backgroundImage: `url(${LobbyStars})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={0.5}
          speed={0}
          factor={0.5}
          style={{
            backgroundImage: `url(${LobbyStars})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={1}
          speed={0}
          factor={0.5}
          style={{
            backgroundImage: `url(${LobbyStars})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={1.5}
          speed={0}
          factor={0.5}
          style={{
            backgroundImage: `url(${LobbyStars})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={0}
          factor={0.5}
          style={{
            backgroundImage: `url(${LobbyStars})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2.5}
          speed={0}
          factor={0.5}
          style={{
            backgroundImage: `url(${LobbyStars})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={3}
          speed={0}
          factor={0.5}
          style={{
            backgroundImage: `url(${LobbyStars})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer style={{ zIndex: 5 }} offset={0.1} speed={0.1} factor={0.1}>
          <div className="centerDiv" style={{ justifyContent: 'flex-start' }}>
            <p
              className="fontGoldenAgeOG"
              style={{ fontSize: '36px', color: 'white', position: 'relative', bottom: '15px' }}
            >
              Our work
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={0.25} speed={0.1} factor={0.5}>
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
            <p className="fontGoldenAgeOG" style={{ color: 'white' }}>
              {videos[currentVideo].title}
            </p>
            <p
              className="fontGoldenAge"
              style={{ color: 'white', fontSize: '16px', width: '80%', textAlign: 'center', paddingBottom: '20px' }}
            >
              {videos[currentVideo].description}
            </p>
            <div className="splitCenterDiv" style={{ width: '80%', height: '40px' }}>
              <img src={Back} onClick={previousVideo} style={{ width: '150px' }} />
              <img src={Next} onClick={nextVideo} style={{ width: '150px' }} />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={1} speed={0.25} factor={0.25}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={Flecha} style={{ height: '100px', position: 'relative', top: '100%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 4 }} offset={1.5} speed={0.3} factor={0.25}>
                    <div className="centerDiv" style={{alignItems: "flex-end", paddingRight: "10%", justifyContent: "flex-end"}}>
                      <p className='grad1' style={{ color: 'white', fontSize: '24px' }}>Think human,</p>
                      <p className='grad1' style={{ color: 'white', fontSize: '24px' }}> act AI native</p>
                    </div>
                  </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={1.5} speed={0.25} factor={0.5}>
          <div className="centerDiv" style={{}}>
            <img src={Nube6} style={{ width: '95vw', minWidth: '500px', position: 'relative', top: '100%' }} />
            <img
              src={Nube5}
              style={{ width: '40vw', minWidth: '200px', position: 'relative', left: '-40%', top: '-30%' }}
            />
            <img
              src={Nube1}
              style={{ width: '40vw', minWidth: '200px', position: 'relative', left: '40%', top: '-40%' }}
            />
            <img
              src={nyanCat}
              onClick={() => {window.open('https://www.tiktok.com/@animaldex/video/7442466728153451832?lang=es')}}
              style={{ width: '40vw', minWidth: '180px', position: 'relative', right: '20%', top: '-50%' }}
            />
            <img
              src={CAT}
              style={{ width: '40vw', minWidth: '150px', position: 'relative', right: '-22%', top: '-50%' }}
            />
            <img
              src={BOOK}
              style={{ width: '15vw', minWidth: '100px', position: 'relative', left: '-25%', top: '-60%' }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={2} speed={0.25} factor={0.5}>
          <div className="centerDiv" style={{}}>
            <img
              src={rose}
              style={{ width: '40vw', minWidth: '200px', position: 'relative', right: '-25%', top: '10%' }}
            />
            <img
              src={Nube4}
              style={{ width: '40vw', minWidth: '200px', position: 'relative', left: '-30%', top: '-20%' }}
            />
            <img
              src={Nube3}
              style={{ width: '40vw', minWidth: '200px', position: 'relative', left: '-22%', top: '15%' }}
            />
            <img
              src={FIGHT}
              style={{ width: '40vw', minWidth: '200px', position: 'relative', left: '-25%', top: '-35%' }}
            />
            <img
              src={Nube2}
              style={{ width: '40vw', minWidth: '200px', position: 'relative', right: '-30%', top: '-70%' }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 5 }} offset={2.25} speed={0.3} factor={0.25}>
          <div
            className="centerDiv"
            style={{ alignItems: 'flex-start', paddingLeft: '10%', paddingTop: '0px', justifyContent: 'flex-start' }}
          >
            <p className="grad1" style={{ color: 'white', fontSize: '24px' }}>
              Designing a smarter
            </p>
            <p className="grad1" style={{ color: 'white', fontSize: '24px' }}>
              future together
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={2.5} speed={0.3} factor={0.5}>
          <div className="centerDiv" style={{}}>
            <img
              src={Blackhorse}
              style={{ width: '40vw', minWidth: '200px', position: 'relative', right: '-25%', top: '-40%' }}
            />
            <img
              src={Angel}
              style={{ width: '40vw', minWidth: '150px', position: 'relative', left: '-25%', top: '-30%' }}
            />
            <img
              src={ovni}
              style={{ width: '10vw', minWidth: '100px', position: 'relative', left: '5%', top: '-40%' }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={2.5} speed={0.25} factor={0.5}>
          <div className="splitCenterDiv">
            <img
              src={Nube5}
              style={{
                width: '35vw',
                minWidth: '150px',
                marginLeft: '2%',
                position: 'relative',
                right: '-5%',
                top: '-45%',
              }}
            />
            <img src={Nube1} style={{ width: '30vw', position: 'relative', right: '-5%', top: '-5%' }} />
          </div>
        </ParallaxLayer>

                <ParallaxLayer style={{ zIndex: 5 }} offset={2.75} speed={0.25} factor={0.5}>
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

        <ParallaxLayer style={{ zIndex: 2 }} offset={2.75} speed={0.25} factor={0.5}>
          <div className="splitCenterDiv">
            <img src={Nube4} style={{ width: '40vw', minWidth: '230px', marginLeft: '0%' }} />
            <img
              src={Dios}
              style={{ width: '50vw', minWidth: '300px', position: 'relative', right: '10%', top: '-5%' }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={3} speed={0.25} factor={0.5}>
          <div className="splitCenterDiv">
            <img src={Nube3} style={{ width: '28vw', minWidth: '200px', marginLeft: '0%' }} />
            <img
              src={Nube2}
              style={{ width: '30vw', minWidth: '230px', position: 'relative', right: '-10%', top: '-5%' }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={3.5} speed={0.5} factor={0.25}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={Flecha} style={{ height: '100px', position: 'relative', top: '100%' }} />
          </div>
        </ParallaxLayer>
      </div>
    </>
  )
}
