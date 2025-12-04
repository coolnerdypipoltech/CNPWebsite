import React, { useEffect, useState } from 'react'
import {  ParallaxLayer } from '@react-spring/parallax'

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

export default function Culture() {
  const videos = [
    {
      title: 'We are Cool Nerdy People',
      
      url: 'https://www.youtube.com/embed/ZiX4d7fwtdg?si=M_9xk4YuXF53D57y',
      description: 'Our work lives at the intersection of strategy, storytelling, and emerging tech, where innovation becomes emotional, and creativity becomes scalable. We’re not adapting to the future; we’re shaping it.',
    },
    {
      title: 'ACT II Video Hero',
      url: 'https://www.youtube.com/embed/4OKFlupaB8k?si=1np5CBLUaRreF2az',
      description: 'For ACTII’s Black Spicy campaign, we produced a hero video that merges AI-driven models with a green screen shoot, resulting in a visually impactful piece and a cutting-edge visual language.',
    },
    {
      title: 'Costa Coffee AR Experience',
      url: 'https://www.youtube.com/embed/4XnUHykYAgY?si=JBp29E3R63a9URof',
      description: 'We took over the physical space with an augmented reality experience layered over the real world. ' + "<br />" + "<br />" + 'Through a simple QR code, guests unlocked a creative dimension of the Costa brand, immersive, emotional, and full of surprises. Every corner became an interactive portal, turning exploration into play and physical presence into digital engagement.',
    },
        {
      title: 'Kimberly Clark Femenine Depend 360° CAMPAIGN',
      url: 'https://www.youtube.com/embed/ugICtFSwQgQ?si=q4SmhwvbGN5OdB2V',
      description: "We developed a campaign with Luz Elena Gonzalez, driving audience engagement by demystifying cultural tensions around the product and making a strong statement: a physiological condition does not define who you are."
    },
    {
      title: 'YoYo The App',
      url: 'https://www.youtube.com/embed/rvFLh0HdQkQ?si=v6IeFupJQLCQKqE8',
      description: 'We created an app that connects users with curated spots through a gamified journey, building a community that actively visits and engages with each venue. ' + "<br />" + "<br />" + 'YoYo also generates valuable data while unlocking a hidden layer of the city — discover exclusive places, earn YoYo Credits, and redeem rewards inside its secret loop.',
    },
    {
      title: 'AXESS BY AXE: THE METAVERSE LOYALTY ECOSYSTEM',
      url: 'https://www.youtube.com/embed/QFPyvZ6eXmI?si=rSSn6gD3TO-eCA0K',
      description: 'We imagined and built a gamified loyalty ecosystem that transforms entertainment into engagement - users compete inside a metaverse in virtual mini-games to earn points for exclusive concert access, creating a self-sustaining community of brand advocates.  ' + "<br />" + "<br />" + 'Results: 1M Active Users' + "<br />" + "<br />" + '8/10 Users Rewarded',
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
      <div
      >

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

          <ParallaxLayer style={{ zIndex: 5 }} offset={0.75} speed={0.1} factor={0.1}>
            <div className="centerDiv" style={{ justifyContent: 'flex-start' }}>
              <p className='fontGoldenAgeOG' style={{fontSize: '36px', color: "white", position: "relative", bottom: "150px"}}>Our work</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 3 }} offset={0.5} speed={0.1} factor={1}>
            <div
              className="centerDiv"
              style={{ justifyContent: 'center', gap: '20px', paddingTop: '0%', justifyItems: 'center' }}
            >
              <div
                ref={glitch.ref}
                style={{
                  position: 'relative',
                  width: '50vw',
                  height: '30vw',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <iframe
                
                  key={videos[currentVideo].url}
                  style={{
                    width: '50vw',
                    height: '29vw',
                    paddingTop: '0.5vw',
                    borderRadius: '40px',
                    border: 'none',
                  }}
                  src={videos[currentVideo].url}
                  title={videos[currentVideo].title}
                  allowFullScreen
                  
                />
                <img
                  src={Marco}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '50vw',
                    height: '100%',
                    pointerEvents: 'none',
                  }}
                />
              </div>
              <p className="fontGoldenAgeOG" style={{ color: 'white' }}>
                {videos[currentVideo].title}
              </p>
              <p className="fontGoldenAge" style={{ color: 'white', fontSize: '16px', width: "80%", textAlign: "center", paddingBottom: "20px"  }}>
                <span dangerouslySetInnerHTML={{ __html: videos[currentVideo].description }} />
              </p>
              <div className="splitCenterDiv" style={{ width: '45%', height: '40px' }}>
                <img src={Back} onClick={previousVideo} style={{ width: '150px' }} />
                <img src={Next} onClick={nextVideo} style={{ width: '150px' }} />
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={2.2} speed={0.25} factor={0.25}>
            <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
              <img src={Flecha} style={{ height: '150px', position: 'relative', top: '0%' }} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 4 }} offset={2.6} speed={0.3} factor={0.25}>
            <div className="centerDiv" style={{alignItems: "center", paddingLeft: "0%", justifyContent: "flex-end", paddingTop: "15%"}}>
              <p className='grad1' style={{ color: 'white' }}>Think human, act AI native</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={2.5} speed={0.25} factor={1}>
            <div className="centerDiv" style={{}}>
              <img src={Nube6} style={{ width: '80vw', position: 'relative', top: '90%' }} />
              <img src={Nube5} style={{ width: '25vw', position: 'relative', left: '-31%', top: '-25%' }} />
              <img src={Nube1} style={{ width: '25vw', position: 'relative', left: '40%', top: '-20%' }} />
              <img src={nyanCat} onClick={() => {window.open('https://www.tiktok.com/@animaldex/video/7442466728153451832?lang=es')}} style={{ width: '25vw', position: 'relative', right: '30%', top: '-45%' }} />
              <img src={CAT} style={{ width: '20vw', position: 'relative', right: '-22%', top: '-63%' }} />
              <img src={BOOK} style={{ width: '15vw', position: 'relative', left: '-25%', top: '-60%' }} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={3.4} speed={0.25} factor={1}>
            <div className="centerDiv" style={{}}>
              <img src={rose} style={{ width: '25vw', position: 'relative', right: '-25%', top: '-0%' }} />
              <img src={Nube4} style={{ width: '25vw', position: 'relative', left: '-10%', top: '0%' }} />
              <img src={Nube3} style={{ width: '25vw', position: 'relative', left: '-30%', top: '10%' }} />
              <img src={FIGHT} style={{ width: '25vw', position: 'relative', left: '-30%', top: '-40%' }} />
              <img src={Nube2} style={{ width: '25vw', position: 'relative', right: '-30%', top: '-80%' }} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={4.30} speed={0.3} factor={0.25}>
            <div className="centerDiv" style={{alignItems: "flex-start", paddingLeft: "10%", justifyContent: "flex-start"}}>
              <p className='grad1' >Designing a smarter</p>
              <p className='grad1' >future together</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 3 }} offset={4.5} speed={0.3} factor={1}>
            <div className="centerDiv" style={{}}>
              <img src={Nube3} style={{ width: '25vw', position: 'relative', right: '-30%', top: '0%' }} />
              <img src={Blackhorse} style={{ width: '25vw', position: 'relative', right: '-25%', top: '-35%' }} />
              <img src={Angel} style={{ width: '25vw', position: 'relative', left: '-25%', top: '-30%' }} />
              <img src={ovni} style={{ width: '15vw', position: 'relative', left: '0%', top: '-25%' }} />
              
            </div>
          </ParallaxLayer>

                  <ParallaxLayer style={{ zIndex: 5 }} offset={4.5} speed={0.3} factor={0.20}>
            <div className="centerDiv" style={{alignItems: "flex-end", paddingRight: "15%", position: "relative",  top: "16vw", justifyContent: "flex-start"}}>
              <p className='grad1' >HEARTCRAFTED</p>
              <p className='grad1' >TECH POWERED</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={4.5} speed={0.25} factor={1}>
            <div className="splitCenterDiv">
              <img
                src={Nube5}
                style={{ width: '28vw', marginLeft: '2%', position: 'relative', right: '-5%', top: '-55%' }}
              />
              <img src={Nube1} style={{ width: '30vw', position: 'relative', right: '-10%', top: '-5%' }} />
            </div>
          </ParallaxLayer>

  

          <ParallaxLayer style={{ zIndex: 2 }} offset={5} speed={0.25} factor={1}>
            <div className="splitCenterDiv">
              <img src={Nube4} style={{ width: '28vw', marginLeft: '20%' }} />
              <img src={Dios} style={{ width: '50vw', position: 'relative', right: '2%', top: '-5%' }} onClick={() => {window.open('https://www.youtube.com/watch?si=CLdTQAEINEfrjLQp&v=5nJZY7FbeP4&feature=youtu.be')}} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={5.5} speed={0.25} factor={1}>
            <div className="splitCenterDiv">
              <img src={Nube3} style={{ width: '28vw', marginLeft: '2%' }} />
              <img src={Nube2} style={{ width: '30vw', position: 'relative', right: '-10%', top: '-5%' }} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 4 }} offset={7} speed={0.5} factor={0.25}>
            <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
              <img src={Flecha} style={{ height: '150px', position: 'relative', top: '-30%' }} />
            </div>
          </ParallaxLayer>

      </div>

    </>
  )
}
