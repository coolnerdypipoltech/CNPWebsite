import React, { useEffect, useState } from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import { useGlitch, GlitchHandle } from 'react-powerglitch'
import background from '../../assets/Founders/background.png'
import Globe1 from '../../assets/Founders/Globe1.webp'
import Globe2 from '../../assets/Founders/Globe2.webp'
import spacheship1 from '../../assets/Founders/spaceship1.webp'
import Asteroide from '../../assets/Founders/Asteroide.webp'
import spaceship2 from '../../assets/Founders/spaceship2.webp'
import ovni from '../../assets/Founders/ovni.webp'
import desk from '../../assets/Founders/desk.webp'
import founder1 from '../../assets/Founders/founder1.webp'
import founder2 from '../../assets/Founders/Andrea.webp'
import table from '../../assets/Founders/table.webp'
import tv from '../../assets/Founders/Tv.png'
import PantallasCNP from '../../assets/Founders/PantallasCNP.png'
import PantallasError from '../../assets/Founders/PantallasError.png'
import IMG_back from '../../assets/Founders/IMG_back.png'
import textBubble from '../../assets/Founders/textBubble.webp'
import Flecha from '../../assets/Culture/IMG_Flecha.webp'
import select from '../../assets/Founders/Select.png'
export default function Founders() {
  const pantallasImages = [ PantallasCNP, PantallasError, ]
  const [currentPantallaIndex, setCurrentPantallaIndex] = useState(0)
  const [showFounder1Text, setShowFounder1Text] = useState(false)
  const [showFounder2Text, setShowFounder2Text] = useState(false)
  const firstTimeRef = React.useRef(true);
  const glitch: GlitchHandle = useGlitch({ glitchTimeSpan: false, shake: { velocity: 1, amplitudeX: 0.1 } })
  const handlePantallasClick = () => {
    setCurrentPantallaIndex(prev => (prev + 1) % pantallasImages.length)
  }

  const handleFounder1Click = () => {
    setShowFounder1Text(!showFounder1Text)
    setShowFounder2Text(false)
  }

  const handleFounder2Click = () => {
    setShowFounder2Text(!showFounder2Text)
    setShowFounder1Text(false)
  }

    useEffect(() => {
      if(firstTimeRef.current) {
        firstTimeRef.current = false;
        glitch
        return;
      }
      startGlitchAndStopWithTimeout()
    })
    const startGlitchAndStopWithTimeout = () => {
      glitch.startGlitch()
      setTimeout(() => {
        glitch.stopGlitch()
      }, 250)
    }

  return (
    <>
      <div>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={4}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer
          offset={5}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={5.5}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url(${IMG_back})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={1}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={3}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer style={{ zIndex: 1 }} offset={0.15} speed={0.2} factor={0.1}>
          <div className="centerDiv" style={{ justifyContent: 'center' }}>
            <p className="fontGoldenAge" style={{fontSize: "12px"}}> 2025 Cool Nerdy People ©</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 1 }} offset={0.6} speed={0.2} factor={0.25}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img
            ref={glitch.ref}
              src={pantallasImages[currentPantallaIndex]}
              onClick={handlePantallasClick}
              style={{ width: '65vw', position: 'relative', top: '10vw', cursor: 'pointer' }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={1} speed={0.2} factor={0.25}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end', position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                width: '45vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top: '30%',
              }}
            >
              <img src={tv} style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={1.5} speed={0.1} factor={0.5}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={Globe1} style={{ width: '40vw', position: 'relative', top: '20%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={1.75} speed={0.1} factor={0.5}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={table} style={{ width: '60vw' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={1.75} speed={0} factor={0.75}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end', position: 'relative' }}>
            <div className="splitCenterDiv" style={{ width: '30vw', position: 'relative', top: '21vw', left: "-2.5vw" }}>
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={founder1} onClick={handleFounder1Click} style={{ width: '15vw', cursor: 'pointer' }} />
                {showFounder1Text && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-25vh',
                      display: 'flex',
                      marginRight: '-220px',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img src={textBubble} style={{ width: '300px', scale: '-1 1 1' }} />
                    <p
                      className="fontGoldenAgeOverlay"
                      style={{
                        position: 'absolute',
                        color: 'black',
                        fontSize: '10px',
                        textAlign: 'center',
                        width: '280px',
                        padding: '10px',
                        paddingBottom: '30px',
                      }}
                    >
                      Creative technologist with 25 years in advertising, blending culture, art, and AI to reinvent
                      communication.
                    </p>
                  </div>
                )}
              </div>
              {!showFounder1Text && (<div
                className="splitCenterDiv"
                style={{ width: '30vw', height: "20px", position: 'relative', top: '-15vw', left: '-10vw' }}
              >
                <img  src={select} style={{ width: '50px' }} />
              </div>)}

              {showFounder1Text && (<div
                className="splitCenterDiv"
                style={{ width: '30vw', height: "20px", position: 'relative', top: '-15vw', left: '-10vw' }}
              >
                <div style={{ minWidth: '50px' }} />
              </div>)}

              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                  src={founder2}
                  onClick={handleFounder2Click}
                  style={{ width: '15vw', position: 'relative', scale: '1 0.9 1', cursor: 'pointer' }}
                />
                {showFounder2Text && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-25vh',
                      marginLeft: '-220px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img src={textBubble} style={{ width: '300px' }} />
                    <p
                      className="fontGoldenAgeOverlay"
                      style={{
                        position: 'absolute',
                        color: 'black',
                        fontSize: '10px',
                        textAlign: 'center',
                        width: '280px',
                        padding: '10px',
                        paddingBottom: '30px',
                      }}
                    >
                      Entrepreneur and business strategist with 10+ years of experience, building at the intersection of
                      AI-native creativity, technology, and culture to shape the future of communication and
                      entertainment.
                    </p>
                  </div>
                )}
              </div>
              
              {!showFounder2Text && (<div
                className="splitCenterDiv"
                style={{ width: '30vw', height: "20px", position: 'relative', top: '-15vw', left: '-10vw' }}
              >
                <img  src={select} style={{ width: '50px' }} />
              </div>)}

              {showFounder2Text && (<div
                className="splitCenterDiv"
                style={{ width: '30vw', height: "20px", position: 'relative', top: '-15vw', left: '-10vw' }}
              >
                <div style={{ minWidth: '50px' }} />
              </div>)}
            </div>
            <img src={desk} style={{ width: '60vw' }} />
            <p
              className="fontGoldenAgeOverlay"
              style={{ color: 'white', fontSize: '40px', position: 'relative', top: '20%' }}
            >
              Founders
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={2.75} speed={0.2} factor={0.75}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={ovni} style={{ width: '40vw', position: 'relative', left: '-40%' }} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer style={{ zIndex: 4 }} offset={3.5} speed={0.5} factor={0.25}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={Flecha} style={{ height: '150px', position: 'relative', top: '0%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={2.75} speed={0.1} factor={0.25}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={spaceship2} style={{ width: '30vw', position: 'relative', right: '-30%', scale: '-1 1 1' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={4} speed={0.1} factor={0.75}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={Asteroide} style={{ width: '20vw', position: 'relative', right: '35%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={4} speed={0.1} factor={0.75}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={spacheship1} style={{ width: '70vw', position: 'relative', left: '20%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={5.5} speed={0.2} factor={0.75}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={Globe2} style={{ width: '130vw', position: 'relative', top: '0%' }} />
          </div>
        </ParallaxLayer>
      </div>
    </>
  )
}
