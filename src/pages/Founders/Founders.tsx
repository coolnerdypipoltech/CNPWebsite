import React, { useState, useEffect, useRef } from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
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
import tv from '../../assets/Founders/Tv.webp'
import IMG_back from '../../assets/Founders/IMG_back.png'
import textBubble from '../../assets/Founders/Mobil/Cuadro_dialogo.webp'
import Flecha from '../../assets/Culture/IMG_Flecha.webp'
import select from '../../assets/Founders/Select.webp'
import Screens from '../../components/Screens'
import xButton from '../../assets/Founders/Mobil/Button_X.webp'
export default function Founders() {
  const [showFounder1Text, setShowFounder1Text] = useState(false)
  const [showFounder2Text, setShowFounder2Text] = useState(false)
  const founder1BubbleRef = useRef<HTMLDivElement>(null)
  const founder2BubbleRef = useRef<HTMLDivElement>(null)
  const founder1ImgRef = useRef<HTMLImageElement>(null)
  const founder2ImgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      
      // Verificar si el click fue fuera del bubble 1 y su imagen
      if (
        showFounder1Text &&
        founder1BubbleRef.current &&
        !founder1BubbleRef.current.contains(target) &&
        founder1ImgRef.current &&
        !founder1ImgRef.current.contains(target)
      ) {
        setShowFounder1Text(false)
      }
      
      // Verificar si el click fue fuera del bubble 2 y su imagen
      if (
        showFounder2Text &&
        founder2BubbleRef.current &&
        !founder2BubbleRef.current.contains(target) &&
        founder2ImgRef.current &&
        !founder2ImgRef.current.contains(target)
      ) {
        setShowFounder2Text(false)
      }
    }

    // Agregar el event listener
    document.addEventListener('mousedown', handleClickOutside)
    
    // Limpiar el event listener al desmontar
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showFounder1Text, showFounder2Text])

  const handleFounder1Click = () => {
    setShowFounder1Text(!showFounder1Text)
    setShowFounder2Text(false)
  }

  const handleFounder2Click = () => {
    setShowFounder2Text(!showFounder2Text)
    setShowFounder1Text(false)
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
            <p className="fontGoldenAge" style={{ fontSize: '1vw' }}>
              {' '}
              2025 Cool Nerdy People ©
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 1 }} offset={0.6} speed={0.2} factor={0.25}>
          <Screens width="65vw" top="10vw" />
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
            <div
              className="splitCenterDiv"
              style={{ width: '30vw', position: 'relative', top: '21vw', left: '-2.5vw', alignItems: 'flex-end' }}
            >
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                  ref={founder1ImgRef}
                  src={founder1}
                  className="founderHover"
                  onClick={handleFounder1Click}
                  style={{ width: '15vw', cursor: 'pointer' }}
                />
                {showFounder1Text && (
                  <div
                  ref={founder1BubbleRef}
                    style={{
                      position: 'absolute',
                      top: '-40vh',
                      marginRight: '-270px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 20,
                    }}
                  >
                    <img  src={textBubble} style={{ width: '320px', scale: '-1 1 1' }} />
                    <p
                      className="fontGoldenAgeBubble"
                      style={{
                        position: 'absolute',
                        color: 'white',
                        fontSize: '17px',
                        textAlign: 'center',
                        width: '300px',
                        padding: '30px',
                        paddingLeft:"0px",
                        paddingRight: "40px",
                        paddingBottom: '60px',
                        lineHeight: "11px",
                      }}
                    >
                      I’m a creative technologist, storyteller, and modern polímata with 25 years exploring the
                      intersection of culture, technology, and human behavior. I turn complexity into experiences people
                      want to live and teach the next generation how to use AI with purpose.
                    </p>
                    <img onClick={handleFounder1Click} className='xButtonFounder'  src={xButton} style={{ width: '40px', position: "relative", top: '-145px', left: '-15px', cursor: 'pointer' }} />
                  </div>
                )}
              </div>
              {!showFounder1Text && (
                <div
                  className="selectHover"
                  style={{ width: '30vw', height: '20px', position: 'relative', top: '-26vw', left: '-9vw', zIndex: 5 }}
                >
                  <img onClick={handleFounder1Click} className="floating " src={select} style={{ width: '50px' }} />
                </div>
              )}

              {showFounder1Text && (
                <div
                  className="splitCenterDiv"
                  style={{ width: '30vw', height: '20px', position: 'relative', top: '-15vw', left: '-10vw' }}
                >
                  <div style={{ minWidth: '50px' }} />
                </div>
              )}

              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                  ref={founder2ImgRef}
                  src={founder2}
                  className="founderHover"
                  onClick={handleFounder2Click}
                  style={{ width: '15vw', position: 'relative', scale: '1 0.9 1', cursor: 'pointer' }}
                />
                {showFounder2Text && (
                  <div
                  ref={founder2BubbleRef}
                    style={{
                      position: 'absolute',
                      top: '-40vh',
                      marginRight: '210px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 20,
                    }}
                  >
                    <img  src={textBubble} style={{ width: '320px' }} />
                    <p
                      className="fontGoldenAgeBubble"
                      style={{
                        
                        position: 'absolute',
                        color: 'white',
                        fontSize: '16px',
                        textAlign: 'center',
                        width: '350px',
                        padding: '20px',
                        paddingRight: "60px",
                        paddingBottom: '50px',
                        lineHeight: "11px",
                      }}
                    >
                      As Founder & CEO (aka Chief Energy Officer) at CNP, I lead with curiosity, creativity, and heart,
                      shaping how brands and people connect through AI-native creativity, technology and entertainment.
                      At the core of everything I build is a belief that performance and impact should always coexist
                      with kindness, purpose, and authenticity.
                    </p>
                    <img onClick={handleFounder2Click} className='xButtonFounder'  src={xButton} style={{ width: '40px', position: "relative", top: '-145px', right: '345px', cursor: 'pointer' }} />
                  
                  </div>
                )}
              </div>

              {!showFounder2Text && (
                <div
                  className="selectHover"
                  style={{ width: '30vw', height: '20px', position: 'relative', top: '-26vw', left: '-9.5vw', zIndex: 5  }}
                >
                  <img onClick={handleFounder2Click} className="floating " src={select} style={{ width: '50px' }} />
                </div>
              )}

              {showFounder2Text && (
                <div
                  className="splitCenterDiv"
                  style={{ width: '30vw', height: '20px', position: 'relative', top: '-15vw', left: '-10vw' }}
                >
                  <div style={{ minWidth: '50px' }} />
                </div>
              )}
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
        <ParallaxLayer style={{ zIndex: 5 }} offset={3.5} speed={0.5} factor={0.25}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end', position: 'absolute' }}>
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
